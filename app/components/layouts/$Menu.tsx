import { useState } from "hono/jsx";
import LogoIcon from "@/components/icons/Logo";
import DarkModeButton from "@/components/layouts/$DarkModeButton";

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      class="w-6 h-6"
      viewBox="0 0 256 256"
      fill="currentColor"
      width="32"
      height="32"
    >
      <title>menu icon</title>
      {isOpen ? (
        <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
      ) : (
        <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
      )}
    </svg>
  );
}

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navItems = [
    { href: "/", label: "Home", enabled: true },
    { href: "/manifesto", label: "Manifesto", enabled: true },
    {
      href: "https://forms.ethtokyo.org/p/event-submission",
      label: "Submit Event",
      enabled: true,
    },
    {
      href: "https://speak.ethtokyo.org/conference-2026",
      label: "Apply as speaker",
      enabled: true,
    },
  ];

  return (
    <header class="fixed top-0 w-full z-50 border-b style-base-menu">
      <div class="h-12 flex items-center justify-between">
        <div class="flex items-center h-full">
          <a
            href="/"
            class="w-12 h-full items-center justify-center border-r hidden sm:flex"
          >
            <LogoIcon klass="w-8.5 h-auto" stroke={32} />
          </a>
          <button
            type="button"
            class="sm:hidden p-1 rounded px-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <MenuIcon isOpen={isOpen} />
          </button>
          <nav
            class={`
              font-mono text-base
              absolute top-12 left-0 w-full overflow-hidden transition-all duration-200 ease-in-out sm:style-base-menu style-base
              sm:static sm:w-auto sm:h-full sm:overflow-visible sm:bg-transparent sm:transition-none
              ${isOpen ? "max-h-screen border-b" : "max-h-0"}
              sm:max-h-full sm:border-none
            `}
          >
            <ul class="flex flex-col sm:flex-row sm:h-full sm:items-center">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  class={`
                    px-6 border-b last:border-b-0
                    sm:border-b-0 sm:border-r sm:h-full sm:flex sm:items-center sm:first:hidden
                    ${!item.enabled ? "cursor-not-allowed opacity-60" : ""}
                  `}
                >
                  {item.enabled ? (
                    <a
                      href={item.href}
                      class="block py-3 sm:py-0 w-full h-full sm:flex sm:items-center"
                      onClick={() => setIsOpen(false)}
                      target={
                        item.href.startsWith("http://") ||
                        item.href.startsWith("https://")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.href.startsWith("http://") ||
                        item.href.startsWith("https://")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span class="block py-3 sm:py-0 w-full h-full sm:flex sm:items-center">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div class="flex items-center gap-2 px-4">
          <DarkModeButton />
        </div>
      </div>
    </header>
  );
}
