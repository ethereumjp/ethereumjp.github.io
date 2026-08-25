import { createClient } from "honox/client";

createClient();

const activeFilterClasses = [
  "bg-dark",
  "text-light",
  "dark:bg-light",
  "dark:text-dark",
];

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) {
    return;
  }

  const option = target.closest<HTMLButtonElement>(
    "button[data-event-filter-option]",
  );
  const filter = option?.closest<HTMLElement>("[data-event-filter]");
  if (!option || !filter) {
    return;
  }

  const selectedType = option.dataset.eventType ?? "";

  for (const button of filter.querySelectorAll<HTMLButtonElement>(
    "button[data-event-filter-option]",
  )) {
    const isSelected = button === option;
    button.setAttribute("aria-pressed", String(isSelected));
    button.classList.toggle(activeFilterClasses[0], isSelected);
    button.classList.toggle(activeFilterClasses[1], isSelected);
    button.classList.toggle(activeFilterClasses[2], isSelected);
    button.classList.toggle(activeFilterClasses[3], isSelected);
  }

  for (const card of filter.querySelectorAll<HTMLElement>(
    "[data-event-card]",
  )) {
    card.hidden = Boolean(
      selectedType && card.dataset.eventType !== selectedType,
    );
  }
});
