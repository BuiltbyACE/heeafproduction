const tones = {
  gold: { from: "#E0A51A", to: "#C8901E" },
  energy: { from: "#F0954A", to: "#8C4A0F" },
  agri: { from: "#B4A24A", to: "#55491A" },
  estate: { from: "#C98A52", to: "#6B4019" },
  metal: { from: "#B7BBC3", to: "#45484F" },
} as const;

export type BlobTone = keyof typeof tones;

export default function Blob({
  tone = "gold",
  size = 480,
  className = "",
  float = true,
  opacity = 0.35,
}: {
  tone?: BlobTone;
  size?: number;
  className?: string;
  float?: boolean;
  opacity?: number;
}) {
  const colors = tones[tone];
  const gradientId = `blob-gradient-${tone}`;

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`pointer-events-none select-none blur-3xl ${float ? "animate-blob-float" : ""} ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={gradientId} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor={colors.from} />
          <stop offset="100%" stopColor={colors.to} />
        </radialGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        d="M45.8,-58.1C58.4,-49.4,67.1,-34.4,71.2,-18.1C75.3,-1.8,74.8,15.8,67.5,30.4C60.2,45,46.1,56.6,30.4,63.5C14.7,70.4,-2.6,72.6,-19.5,68.9C-36.4,65.2,-52.9,55.6,-63.1,41.4C-73.3,27.2,-77.2,8.4,-74.1,-8.8C-71,-26,-60.9,-41.6,-47.4,-50.5C-33.9,-59.4,-16.9,-61.6,0.4,-62.1C17.7,-62.6,33.2,-66.8,45.8,-58.1Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
