import Image from "next/image";

export default function GoldFrame({
  src,
  alt,
  fill = true,
  width,
  height,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
  wrapperClassName = "",
  imgClassName = "",
  overlay = true,
}: {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  wrapperClassName?: string;
  imgClassName?: string;
  overlay?: boolean;
}) {
  const loadingProps = priority ? { priority: true as const } : { loading: "lazy" as const };

  return (
    <div className={`relative ${wrapperClassName}`}>
      <div
        className="gold-image-card relative h-full w-full"
        style={!fill && width && height ? { aspectRatio: `${width} / ${height}` } : undefined}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className={`object-cover ${imgClassName}`}
            {...loadingProps}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            className={`h-full w-full object-cover ${imgClassName}`}
            {...loadingProps}
          />
        )}
        {overlay && <div className="absolute inset-0 bg-primary-darker/10" />}
      </div>
    </div>
  );
}
