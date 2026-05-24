import type { Child } from "hono/jsx";

type Icon = {
  title: string;
  viewBox: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
  strokeLinecap?: string;
  strokeLinejoin?: string;
  paths: string[];
};

const ActionIcon = ({ icon }: { icon: Icon }) => (
  <svg
    stroke={icon.stroke ?? "currentColor"}
    fill={icon.fill ?? "currentColor"}
    stroke-width={icon.strokeWidth ?? "0"}
    viewBox={icon.viewBox}
    stroke-linecap={icon.strokeLinecap}
    stroke-linejoin={icon.strokeLinejoin}
    class="w-5 h-5 mr-2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{icon.title}</title>
    {icon.paths.map((path) => (
      <path key={path} d={path}></path>
    ))}
  </svg>
);

const ActionLink = ({
  href,
  children,
  icon,
}: {
  href: string;
  children: Child;
  icon: Icon;
}) => (
  <a
    class="btn mx-auto flex items-center"
    href={href}
    rel="noopener noreferrer"
  >
    <ActionIcon icon={icon} />
    <span>{children}</span>
  </a>
);

export type { Icon };
export default ActionLink;
