import type { ReactNode } from "react";

type Tone = "violet" | "green" | "blue" | "amber" | "olive" | "pink" | "red";

const tones: Record<Tone, string> = {
  violet: "pill-3d",
  green: "pill-3d",
  blue: "pill-3d",
  amber: "pill-3d",
  olive: "pill-3d",
  pink: "pill-3d",
  red: "pill-3d",
};

export function Pill({
  href,
  tone,
  icon,
  children,
}: {
  href: string;
  tone: Tone;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm ${tones[tone]}`}
    >
      <span className="grid h-4 w-4 place-items-center">{icon}</span>
      <span>{children}</span>
    </a>
  );
}
