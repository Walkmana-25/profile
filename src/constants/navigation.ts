import { NavLinkItem } from "@/components/navbar/types";

export const NAV_LINKS: NavLinkItem[] = [
  { label: "Profile", href: "/profile", isDisabled: true, tooltipText: "🚧工事中🚧" },
  { label: "Work", href: "/work", isDisabled: false },
  { label: "Contact", href: "/contact", isDisabled: true, tooltipText: "🚧工事中🚧" },
];
