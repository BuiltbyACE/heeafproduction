import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "HEEAF Investment Limited",
  description:
<<<<<<< HEAD
    "Connecting Opportunities. Delivering Value Across Borders. Quality and affordable solutions in Energy, Agriculture and Real Estate.",
  icons: {
    icon: "/favicon.png",
  },
=======
    "Connecting Opportunities. Delivering Value Across Borders. Commodity trading in metals, livestock and energy across Africa and beyond.",
>>>>>>> 1bcb5db (Changes and trade commodity)
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
