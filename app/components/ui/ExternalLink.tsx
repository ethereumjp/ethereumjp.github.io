import type { Child } from "hono/jsx";

const ExternalLink = ({
  href,
  children,
  rel = "noopener noreferrer",
}: {
  href: string;
  children: Child;
  rel?: string;
}) => (
  <a
    href={href}
    class="ext underline decoration-dotted underline-offset-2 hover:text-secondary"
    target="_blank"
    rel={rel}
  >
    <span>{children}</span>
    <span style={{ fontSize: "0.8em", verticalAlign: "super" }}>↗︎</span>
  </a>
);

export default ExternalLink;
