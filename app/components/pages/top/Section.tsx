import type { Child } from "hono/jsx";

const Section = ({
  title,
  children,
  className = "border-b",
}: {
  title?: string;
  children: Child;
  className?: string;
}) => (
  <section class={`w-full pt-8 pb-9 px-6 ${className}`}>
    <div class="max-w-3xl mx-auto">
      {title ? (
        <h3 class="font-bold text-center text-2xl pb-5">{title}</h3>
      ) : null}
      {children}
    </div>
  </section>
);

export default Section;
