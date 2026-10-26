import type { ReactNode } from "react";
import { Icon } from "./Icon";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  icon?: Parameters<typeof Icon>[0]["name"];
  external?: boolean;
  download?: boolean;
};

const styles = {
  primary: "bg-forest text-paper hover:bg-forest-2 shadow-[0_8px_24px_-12px_rgb(22_48_43/0.7)]",
  secondary: "border border-ink/20 bg-card/60 text-ink hover:border-ink/50 hover:bg-card",
  light: "bg-paper text-forest hover:bg-butter",
};

export function Button({ href, children, variant = "primary", icon = "arrow", external, download }: Props) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download: "" } : {})}
      className={`group inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[0.95rem] font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${styles[variant]}`}
    >
      {children}
      <Icon
        name={icon}
        className={`h-4 w-4 transition-transform duration-300 ${
          icon === "arrow" ? "group-hover:translate-x-1" : icon === "download" ? "group-hover:translate-y-0.5" : ""
        }`}
      />
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  );
}
