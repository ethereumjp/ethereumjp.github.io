import ExternalLink from "@/components/ui/ExternalLink";

type ScheduleItem = {
  label: string;
  href: string;
  date: string;
  dateSortKey: string;
};

const ScheduleFallback = ({ items }: { items: ScheduleItem[] }) => (
  <ul class="list-disc list-outside pl-6">
    {[...items]
      .sort((a, b) => a.dateSortKey.localeCompare(b.dateSortKey))
      .map((item) => (
        <li key={item.href} class="text-lg">
          <ExternalLink href={item.href}>{item.label}</ExternalLink>
          &nbsp;:&nbsp;{item.date}
        </li>
      ))}
  </ul>
);

export default ScheduleFallback;
