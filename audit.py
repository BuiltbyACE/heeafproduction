from playwright.sync_api import sync_playwright
import os
from pathlib import Path

BASE_URL = "http://localhost:3000"
SCREENSHOT_DIR = Path(r"C:\HOME LAB\Projects\HEEAF-project\test-screenshots")
SCREENSHOT_DIR.mkdir(parents=True, exist_ok=True)

PAGES = [
    {"name": "home", "path": "/"},
    {"name": "about", "path": "/about"},
    {"name": "businesses", "path": "/businesses"},
    {"name": "businesses-energy", "path": "/businesses/energy"},
    {"name": "businesses-agriculture", "path": "/businesses/agriculture"},
    {"name": "businesses-real-estate", "path": "/businesses/real-estate"},
    {"name": "businesses-metal", "path": "/businesses/metal"},
    {"name": "global-reach", "path": "/global-reach"},
    {"name": "contact", "path": "/contact"},
]

VIEWPORTS = [
    {"name": "mobile", "width": 375, "height": 812},
    {"name": "tablet", "width": 768, "height": 1024},
    {"name": "desktop", "width": 1440, "height": 900},
]

NAV_LINKS = [
    {"text": "HOME", "href": "/"},
    {"text": "ABOUT US", "href": "/about"},
    {"text": "GLOBAL REACH", "href": "/global-reach"},
    {"text": "CONTACT US", "href": "/contact"},
]

results = {"passed": [], "failed": [], "warnings": []}

def log_pass(msg):
    results["passed"].append(msg)
    print(f"  PASS: {msg}")

def log_fail(msg):
    results["failed"].append(msg)
    print(f"  FAIL: {msg}")

def log_warn(msg):
    results["warnings"].append(msg)
    print(f"  WARN: {msg}")

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    # ── 1. VISUAL SCREENSHOT AUDIT ───────────────────────────────────────────
    print("\n" + "="*60)
    print("1. VISUAL SCREENSHOT AUDIT (all pages x all viewports)")
    print("="*60)

    for vp in VIEWPORTS:
        context = browser.new_context(viewport={"width": vp["width"], "height": vp["height"]})
        page = context.new_page()
        for pg in PAGES:
            url = BASE_URL + pg["path"]
            try:
                response = page.goto(url, timeout=20000)
                page.wait_for_load_state("networkidle", timeout=20000)
                status = response.status if response else 0
                shot = SCREENSHOT_DIR / f"{pg['name']}_{vp['name']}.png"
                page.screenshot(path=str(shot), full_page=True)
                if status >= 400:
                    log_fail(f"[{vp['name']}] {pg['path']} → HTTP {status}")
                else:
                    log_pass(f"[{vp['name']}] {pg['path']} → {status} | screenshot: {shot.name}")
            except Exception as e:
                log_fail(f"[{vp['name']}] {pg['path']} → {str(e)[:100]}")
        context.close()

    # ── 2. NAVIGATION TESTING ────────────────────────────────────────────────
    print("\n" + "="*60)
    print("2. NAVIGATION TESTING")
    print("="*60)

    # Desktop nav
    print("\n  [Desktop Nav Links]")
    context = browser.new_context(viewport={"width": 1440, "height": 900})
    page = context.new_page()
    page.goto(BASE_URL)
    page.wait_for_load_state("networkidle")

    for link in NAV_LINKS:
        try:
            el = page.locator(f"header a[href='{link['href']}']").first
            if el.count() > 0 and el.is_visible():
                el.click()
                page.wait_for_load_state("networkidle", timeout=10000)
                path = page.url.replace(BASE_URL, "") or "/"
                if path == link["href"] or (link["href"] == "/" and path in ["/", ""]):
                    log_pass(f"'{link['text']}' nav → {link['href']}")
                else:
                    log_fail(f"'{link['text']}' nav → expected {link['href']}, landed {path}")
                page.go_back()
                page.wait_for_load_state("networkidle", timeout=10000)
            else:
                log_warn(f"'{link['text']}' nav link not found/visible on desktop")
        except Exception as e:
            log_fail(f"'{link['text']}' nav → {str(e)[:80]}")

    # Business dropdown hover
    print("\n  [Business Dropdown]")
    try:
        page.goto(BASE_URL)
        page.wait_for_load_state("networkidle")
        biz = page.locator("header").get_by_text("OUR BUSINESSES").first
        if biz.is_visible():
            biz.hover()
            page.wait_for_timeout(600)
            page.screenshot(path=str(SCREENSHOT_DIR / "nav_businesses_dropdown.png"), full_page=False)
            log_pass("Business dropdown hover → screenshot saved")
            # Check if dropdown links appeared
            dropdown_links = page.locator("header a[href*='/businesses']").all()
            log_pass(f"Dropdown: {len(dropdown_links)} business link(s) visible")
        else:
            log_warn("'OUR BUSINESSES' text not found in header at desktop")
    except Exception as e:
        log_fail(f"Business dropdown → {str(e)[:80]}")

    # CTA "Talk to Us" button
    print("\n  [Header CTA]")
    try:
        page.goto(BASE_URL)
        page.wait_for_load_state("networkidle")
        cta = page.locator("a:has-text('TALK TO US')").first
        if cta.is_visible():
            cta.click()
            page.wait_for_load_state("networkidle")
            if "/contact" in page.url:
                log_pass("'TALK TO US' CTA → /contact")
            else:
                log_fail(f"'TALK TO US' CTA → unexpected URL {page.url}")
        else:
            log_warn("'TALK TO US' CTA not visible at desktop")
    except Exception as e:
        log_fail(f"CTA → {str(e)[:80]}")

    # Footer links (HTTP status check)
    print("\n  [Footer Links]")
    try:
        page.goto(BASE_URL)
        page.wait_for_load_state("networkidle")
        footer_anchors = page.locator("footer a[href]").all()
        for anchor in footer_anchors:
            href = anchor.get_attribute("href") or ""
            label = anchor.inner_text().strip() or href
            if href.startswith("/"):
                resp = page.request.get(BASE_URL + href)
                if resp.status < 400:
                    log_pass(f"Footer '{label}' ({href}) → {resp.status}")
                else:
                    log_fail(f"Footer '{label}' ({href}) → HTTP {resp.status}")
            elif href.startswith("mailto:") or href.startswith("tel:"):
                log_pass(f"Footer '{label}' → {href} (not HTTP-checked)")
    except Exception as e:
        log_fail(f"Footer links → {str(e)[:80]}")

    context.close()

    # Mobile hamburger menu
    print("\n  [Mobile Hamburger Nav]")
    context = browser.new_context(viewport={"width": 375, "height": 812})
    page = context.new_page()
    try:
        page.goto(BASE_URL)
        page.wait_for_load_state("networkidle")
        burger = page.locator("button[aria-label='Toggle navigation menu']")
        if burger.is_visible():
            burger.click()
            page.wait_for_timeout(400)
            page.screenshot(path=str(SCREENSHOT_DIR / "mobile_nav_open.png"), full_page=False)
            log_pass("Hamburger menu opened → screenshot saved")
            for lbl in ["HOME", "ABOUT US", "GLOBAL REACH", "CONTACT US"]:
                visible = page.locator(f"text={lbl}").first.is_visible()
                if visible:
                    log_pass(f"Mobile nav '{lbl}' visible")
                else:
                    log_warn(f"Mobile nav '{lbl}' not visible after open")

            # Mobile sub-menu: OUR BUSINESSES expand
            biz_btn = page.locator("button:has-text('OUR BUSINESSES')")
            if biz_btn.is_visible():
                biz_btn.click()
                page.wait_for_timeout(400)
                page.screenshot(path=str(SCREENSHOT_DIR / "mobile_nav_businesses_expanded.png"), full_page=False)
                log_pass("Mobile 'OUR BUSINESSES' sub-menu expanded")
        else:
            log_fail("Hamburger button not found on mobile viewport")
    except Exception as e:
        log_fail(f"Mobile nav → {str(e)[:80]}")
    context.close()

    # ── 3. CONTACT FORM TESTING ──────────────────────────────────────────────
    print("\n" + "="*60)
    print("3. CONTACT FORM TESTING")
    print("="*60)

    context = browser.new_context(viewport={"width": 1440, "height": 900})
    page = context.new_page()

    # 3a. Empty submission → all required field errors
    print("\n  [Empty Submission]")
    try:
        page.goto(BASE_URL + "/contact")
        page.wait_for_load_state("networkidle")
        page.locator("button[type='submit']").click()
        page.wait_for_timeout(500)
        page.screenshot(path=str(SCREENSHOT_DIR / "form_empty_errors.png"), full_page=False)

        checks = [
            ("fullName error", "Full name is required"),
            ("email error", "Email address is required"),
            ("subject error", "Subject is required"),
            ("message error", "Message is required"),
        ]
        for label, text in checks:
            el = page.locator(f"p:has-text('{text}')").first
            if el.count() > 0:
                log_pass(f"{label}: '{text}'")
            else:
                log_fail(f"{label}: '{text}' NOT shown")
    except Exception as e:
        log_fail(f"Empty form → {str(e)[:80]}")

    # 3b. Invalid email
    print("\n  [Invalid Email]")
    try:
        page.reload()
        page.wait_for_load_state("networkidle")
        page.fill("#email", "not-a-valid-email")
        page.locator("button[type='submit']").click()
        page.wait_for_timeout(500)
        err = page.locator("p:has-text('valid email')").first
        if err.count() > 0:
            log_pass("Invalid email → error shown")
        else:
            log_fail("Invalid email → error NOT shown")
        page.screenshot(path=str(SCREENSHOT_DIR / "form_invalid_email.png"), full_page=False)
    except Exception as e:
        log_fail(f"Invalid email → {str(e)[:80]}")

    # 3c. Error clears on correction
    print("\n  [Error Clears on Input]")
    try:
        page.reload()
        page.wait_for_load_state("networkidle")
        page.locator("button[type='submit']").click()
        page.wait_for_timeout(400)
        err_before = page.locator("p:has-text('Full name is required')").count()
        page.fill("#fullName", "John Doe")
        page.wait_for_timeout(300)
        err_after = page.locator("p:has-text('Full name is required')").count()
        if err_before > 0 and err_after == 0:
            log_pass("fullName error clears after typing")
        else:
            log_warn(f"Error clear behavior: before={err_before} after={err_after}")
    except Exception as e:
        log_fail(f"Error clear test → {str(e)[:80]}")

    # 3d. Successful valid submission
    print("\n  [Valid Submission]")
    try:
        page.reload()
        page.wait_for_load_state("networkidle")
        page.fill("#fullName", "Test Auditor")
        page.fill("#email", "test@example.com")
        page.fill("#phone", "+254 700 000 000")
        page.fill("#subject", "Automated Audit Test")
        page.fill("#message", "This is an automated test message from the audit script.")
        page.screenshot(path=str(SCREENSHOT_DIR / "form_filled.png"), full_page=False)
        page.locator("button[type='submit']").click()
        page.wait_for_timeout(800)
        success = page.locator("text=Thank you for your message").first
        if success.count() > 0:
            log_pass("Valid submission → success banner shown")
            page.screenshot(path=str(SCREENSHOT_DIR / "form_success.png"), full_page=False)
        else:
            log_fail("Valid submission → success banner NOT found")
            page.screenshot(path=str(SCREENSHOT_DIR / "form_after_submit.png"), full_page=False)
    except Exception as e:
        log_fail(f"Valid submission → {str(e)[:80]}")

    context.close()

    # ── 4. RESPONSIVE LAYOUT CHECKS ─────────────────────────────────────────
    print("\n" + "="*60)
    print("4. RESPONSIVE LAYOUT CHECKS")
    print("="*60)

    breakpoints = [
        {"name": "375px",  "width": 375,  "height": 812},
        {"name": "428px",  "width": 428,  "height": 926},
        {"name": "768px",  "width": 768,  "height": 1024},
        {"name": "1024px", "width": 1024, "height": 768},
        {"name": "1440px", "width": 1440, "height": 900},
        {"name": "1920px", "width": 1920, "height": 1080},
    ]

    responsive_pages = [
        {"name": "home", "path": "/"},
        {"name": "about", "path": "/about"},
        {"name": "businesses", "path": "/businesses"},
        {"name": "contact", "path": "/contact"},
    ]

    for bp in breakpoints:
        context = browser.new_context(viewport={"width": bp["width"], "height": bp["height"]})
        page = context.new_page()
        for cp in responsive_pages:
            try:
                page.goto(BASE_URL + cp["path"])
                page.wait_for_load_state("networkidle")

                # Horizontal overflow
                overflow = page.evaluate(
                    "() => document.documentElement.scrollWidth > document.documentElement.clientWidth"
                )
                if overflow:
                    log_warn(f"[{bp['name']}] {cp['path']} → horizontal overflow")
                else:
                    log_pass(f"[{bp['name']}] {cp['path']} → no overflow")

                # Header/footer present
                header_vis = page.locator("header").is_visible()
                footer_vis = page.locator("footer").count() > 0
                if header_vis:
                    log_pass(f"[{bp['name']}] {cp['path']} → header visible")
                else:
                    log_fail(f"[{bp['name']}] {cp['path']} → header hidden")
                if footer_vis:
                    log_pass(f"[{bp['name']}] {cp['path']} → footer present")
                else:
                    log_fail(f"[{bp['name']}] {cp['path']} → footer missing")

                # Mobile: hamburger visible; desktop: full nav visible
                if bp["width"] < 1024:
                    burger = page.locator("button[aria-label='Toggle navigation menu']").is_visible()
                    if burger:
                        log_pass(f"[{bp['name']}] {cp['path']} → hamburger shown on mobile")
                    else:
                        log_warn(f"[{bp['name']}] {cp['path']} → hamburger NOT shown on mobile")
                else:
                    full_nav = page.locator("header nav.hidden.lg\\:flex").is_visible()
                    if full_nav:
                        log_pass(f"[{bp['name']}] {cp['path']} → desktop nav visible")
                    else:
                        log_warn(f"[{bp['name']}] {cp['path']} → desktop nav not detected")

                shot = SCREENSHOT_DIR / f"resp_{cp['name']}_{bp['name']}.png"
                page.screenshot(path=str(shot), full_page=True)
            except Exception as e:
                log_fail(f"[{bp['name']}] {cp['path']} → {str(e)[:80]}")
        context.close()

    browser.close()

# ── SUMMARY ──────────────────────────────────────────────────────────────────
print("\n" + "="*60)
print("AUDIT COMPLETE — SUMMARY")
print("="*60)
total = len(results["passed"]) + len(results["failed"]) + len(results["warnings"])
print(f"Total checks : {total}")
print(f"Passed       : {len(results['passed'])}")
print(f"Failed       : {len(results['failed'])}")
print(f"Warnings     : {len(results['warnings'])}")
print(f"\nScreenshots  : {SCREENSHOT_DIR}")

if results["failed"]:
    print("\nFAILURES:")
    for f in results["failed"]:
        print(f"  FAIL: {f}")

if results["warnings"]:
    print("\nWARNINGS:")
    for w in results["warnings"]:
        print(f"  WARN: {w}")
