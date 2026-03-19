import { NAV_LINKS } from "@/constants/navigation";

interface NavbarContentsProps {
  className?: string;
}

export const NavbarContents = ({ className }: NavbarContentsProps) => {
  return (
    <ul className={className}>
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          {link.isDisabled ? (
            <div className="tooltip tooltip-bottom" data-tip={link.tooltipText}>
              <a>{link.label}</a>
            </div>
          ) : (
            <a href={link.href} className="tooltip tooltip-bottom">
              {link.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};
