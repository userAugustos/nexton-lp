export default function OptimizedImage({ src, alt, width, height, ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
}
