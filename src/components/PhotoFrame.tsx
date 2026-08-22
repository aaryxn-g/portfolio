import Image from "next/image";
import FramedImage from "@/components/FramedImage";

interface PhotoFrameProps {
  src: string;
  alt: string;
  caption: string;
  sizes: string;
  /** Overrides the default frame ratio when the source dimensions are known. */
  aspectRatio?: string;
  objectPosition?: "center" | "top";
  /** Zooms the image in slightly within the same frame (e.g. 1.1 for +10%). */
  scale?: number;
  className?: string;
}

export default function PhotoFrame({
  src,
  alt,
  caption,
  sizes,
  aspectRatio,
  objectPosition = "center",
  scale,
  className = "",
}: PhotoFrameProps) {
  const position = objectPosition === "top" ? "50% 20%" : "50% 50%";

  return (
    <div className={`relative ${className}`}>
      <span aria-hidden="true" className="absolute -left-2 -top-2 h-3 w-3 border-l border-t border-accent/50" />
      <span aria-hidden="true" className="absolute -right-2 -top-2 h-3 w-3 border-r border-t border-accent/50" />
      <span aria-hidden="true" className="absolute -bottom-2 -left-2 h-3 w-3 border-b border-l border-accent/50" />
      <span aria-hidden="true" className="absolute -bottom-2 -right-2 h-3 w-3 border-b border-r border-accent/50" />

      <div className="relative h-full w-full overflow-hidden rounded-xl border border-border transition-colors duration-300 group-hover:border-accent/40">
        {aspectRatio ? (
          <FramedImage
            src={src}
            alt={alt}
            aspectRatio={aspectRatio}
            sizes={sizes}
            objectPosition={position}
            scale={scale}
            // A fixed `scale` (set inline) would otherwise be overridden by this
            // hover class, since inline transforms win over Tailwind utilities.
            imageClassName={scale ? "" : "transition-transform duration-500 group-hover:scale-[1.03]"}
          />
        ) : (
          <div className="relative aspect-[4/3] w-full lg:aspect-[5/4]">
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              className={scale ? "" : "transition-transform duration-500 group-hover:scale-[1.03]"}
              style={{
                objectFit: "cover",
                objectPosition: position,
                transform: scale ? `scale(${scale})` : undefined,
              }}
            />
          </div>
        )}

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent p-4"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">{caption}</span>
        </div>
      </div>
    </div>
  );
}
