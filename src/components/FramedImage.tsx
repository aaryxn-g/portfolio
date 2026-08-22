import Image from "next/image";

interface FramedImageProps {
  src: string;
  alt: string;
  aspectRatio: string;
  sizes: string;
  fit?: "cover" | "contain";
  objectPosition?: string;
  scale?: number;
  priority?: boolean;
  className?: string;
  /** Extra class applied to the inner <Image>, e.g. for a decorative CSS animation. */
  imageClassName?: string;
}

export default function FramedImage({
  src,
  alt,
  aspectRatio,
  sizes,
  fit = "cover",
  objectPosition = "50% 50%",
  scale,
  priority,
  className = "",
  imageClassName = "",
}: FramedImageProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ aspectRatio }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={imageClassName}
        style={{
          objectFit: fit,
          objectPosition,
          transform: scale ? `scale(${scale})` : undefined,
        }}
      />
    </div>
  );
}
