const SimpleIcon = ({
  src,
  alt,
  klass = "w-4 h-4",
}: {
  src: string;
  alt: string;
  klass?: string;
}) => {
  return (
    <div
      aria-label={alt}
      role="img"
      class={`${klass} bg-current`}
      style={{
        maskImage: `url('${src}')`,
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "contain",
        WebkitMaskImage: `url('${src}')`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "contain",
        backgroundColor: "currentColor",
      }}
    />
  );
};

export default SimpleIcon;
