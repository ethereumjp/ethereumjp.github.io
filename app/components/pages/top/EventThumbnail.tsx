const thumbnailFrameClass =
  "flex h-20 w-40 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-light/50 dark:bg-dark/50";

const EventThumbnail = ({
  name,
  thumbnail,
}: {
  name: string;
  thumbnail?: string;
}) => {
  const fallback = (
    <div class={`${thumbnailFrameClass} font-mono text-3xl font-bold`}>
      {name.charAt(0).toUpperCase()}
    </div>
  );

  if (!thumbnail) {
    return fallback;
  }

  return (
    <div class={thumbnailFrameClass}>
      <img
        src={thumbnail}
        alt=""
        class="max-h-full max-w-full object-contain"
        loading="lazy"
      />
    </div>
  );
};

export default EventThumbnail;
