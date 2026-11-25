"use client";

import { useState } from "react";
import AutoVideo from "@/components/AutoVideo";
import type { ProductVideo } from "@/data/productsServices";

/** Two portrait videos overlapping like stacked photos. First = back card, second = front card. */
export default function OverlapVideos({ videos }: { videos: [ProductVideo, ProductVideo] }) {
  const [active, setActive] = useState<number | null>(null);
  const cls = ["ov-back", "ov-front"];

  return (
    <div className="ov-stage">
      <div className="ov-blob" aria-hidden="true" />
      {videos.map((v, i) => (
        <div
          key={v.src}
          className={`ov-card ${cls[i]} ${active === i ? "active" : ""}`}
          onClick={() => setActive(active === i ? null : i)}
        >
          <AutoVideo src={v.src} poster={v.poster} label={v.caption} />
          <span className="ov-caption">{v.caption}</span>
        </div>
      ))}
    </div>
  );
}
