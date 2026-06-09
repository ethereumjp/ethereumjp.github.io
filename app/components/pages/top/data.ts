import type { Icon } from "@/components/ui/ActionLink";

export const scheduleItems = [
  {
    label: "ETHTokyo Conference",
    href: "https://luma.com/j54ksopi",
    date: "Sep 19",
  },
  {
    label: "Decentralized AI Summit",
    href: "https://luma.com/0xoaxqaq",
    date: "Sep 23",
  },
  {
    label: "Ethereum Institutional Summit",
    href: "https://luma.com/154ptgo7",
    date: "Sep 25",
  },
  {
    label: "Pragma Tokyo",
    href: "https://ethglobal.com/events/pragma-tokyo2026",
    date: "Sep 24",
  },
  {
    label: "ETHGlobal Tokyo",
    href: "https://ethglobal.com/events/tokyo2026",
    date: "Sep 25-27",
  },
];

const eventIcon: Icon = {
  title: "Submit Event",
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  paths: [
    "M8 2v4",
    "M16 2v4",
    "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",
    "M3 10h18",
    "M16 19h6",
    "M19 16v6",
  ],
};

const SpeakIcon: Icon = {
  title: "Apply as Speaker",
  viewBox: "0 0 24 24",
  paths: [
    "M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z",
  ],
};

const supportIcon: Icon = {
  title: "Support us",
  viewBox: "0 0 640 512",
  paths: [
    "M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z",
  ],
};

const volunteerIcon: Icon = {
  title: "Volunteer with us",
  viewBox: "0 0 640 512",
  paths: [
    "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",
  ],
};

export const involvementLinks = [
  {
    label: "Submit Event",
    href: "https://forms.ethtokyo.org/p/event-submission",
    icon: eventIcon,
  },
  {
    label: "Apply as speaker",
    href: "https://speak.ethtokyo.org/conference-2026/cfp",
    icon: SpeakIcon,
  },
  {
    label: "Support us",
    href: "https://forms.ethtokyo.org/p/sponsor-inquiry",
    icon: supportIcon,
  },
  {
    label: "Join as Volunteer",
    href: "https://forms.ethtokyo.org/p/volunteer-signup",
    icon: volunteerIcon,
  },
];

export const pastEventImages = [
  "/images/2025/conf1.jpg",
  "/images/2025/conf2.jpg",
  "/images/2025/conf3.jpg",
  "/images/2025/conf4.jpg",
  "/images/2025/hack1.jpg",
  "/images/2025/hack2.jpg",
];

export const contributors = [
  {
    name: "Irohas",
    handle: "irohas.eth",
    role: "Lead",
    href: [
      "https://bsky.app/profile/irohas.eth.sucks",
      "https://github.com/neila",
      "https://irohas.eth.link/",
    ],
  },
  {
    name: "Yuta",
    handle: "kurotaky.eth",
    role: "Lead",
    href: [
      "https://twitter.com/kurotaky",
      "https://github.com/kurotaky",
      "https://mo-fu.org/",
    ],
  },
  {
    name: "Yudai",
    handle: "reblock.eth",
    role: "Ecosystem",
    href: ["https://twitter.com/9dai_5", "https://bio.reblock.eth.limo"],
  },
  {
    name: "Toshi",
    handle: "toshihiko.eth",
    role: "Ecosystem",
    href: ["https://twitter.com/tolehico", "https://web3.bio/toshihiko.eth"],
  },
  {
    name: "Torrent",
    handle: "torrentshinoda.eth",
    role: "Operator",
    href: [
      "https://twitter.com/TRNT_MST",
      "https://web3.bio/torrentshinoda.eth",
    ],
  },
  {
    name: "Yosuke",
    handle: "y0suke.eth",
    role: "Developer",
    href: ["https://github.com/yosukemiyata"],
  },
  {
    name: "Yuji",
    handle: "yujiym.eth",
    role: "Developer",
    href: [
      "https://x.com/yujiym",
      "https://github.com/yujiym",
      "https://web3.bio/yujiym.eth",
    ],
  },
  {
    name: "Seiya",
    handle: "silmin.eth",
    role: "Designer",
    href: [
      "https://bsky.app/profile/silmin.net",
      "https://github.com/silmin",
      "https://silmin.net/",
    ],
  },
];
