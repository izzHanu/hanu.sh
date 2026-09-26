import Link from "next/link";
import { Shell, SectionTitle } from "./_shell";
import { Pill } from "./_pill";
import { SiteLogo } from "./_site-logo";
import { ProfileAvatar } from "./_theme-toggle";
import {
  MailIcon,
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  XIcon,
  ThreadsIcon,
  YouTubeIcon,
  BriefcaseIcon,
} from "./_icons";
import { projects } from "@/lib/projects";
import { domains } from "@/lib/domains";

const journey = [
   {
    heading: "Chef at tiptop",
    span: " Q4 2026 — present",
    text: "building all in one distribution os for founders",
  },
  {
    heading: "Solo builder",
    span: "2026 — 2026-Q4",
    text: "built dotschool.org, cutefol.io, tpot.cc, onedb.net and more.",
  },
  {
    heading: "Back to CS",
    span: "2025 — 2026",
    text: "building cool stuff and learning new things.",
  },
  {
    heading: "Gigs and Agency",
    span: "2023 — 2024",
    text: "built dev and marketing agency and quit.",
  },
  {
    heading: "Marketing: web3 and crypto",
    span: "2022 — 2023",
    text: "got interest off with coding and started a career in marketing, networking and executing campaigns for different projects with KOLs.",
  },
  {
    heading: "Solo dev: ButterLemonBot",
    span: "2020 — 2022",
    text: "a Telegram bot built for fun that eventually hit 10k+ users.",
  },
];

export default function HomePage() {
  return (
    <Shell>
      <header>
        <div className="flex items-center gap-4"><h1 className="font-serif text-4xl leading-none sm:text-5xl">im</h1>
          <ProfileAvatar />
          <h1 className="font-serif text-4xl leading-none sm:text-5xl">
            <span className="wordmark-underline">hanu</span>
          </h1>
        </div>

      </header>

      <section className="mt-8 max-w-[58ch] text-base leading-relaxed text-fg/90">
        <p>
          21 y.o. fullstack eng with design eyes. now probably a jack of all trades. currently building <ExternalLink href="https://usetiptop.com">tiptop</ExternalLink> to solve distribution for every builder.
          
        </p>
      </section>

      <nav className="mt-6 flex flex-wrap gap-2" aria-label="Contact links">
        <Pill href="mailto:hi@hanu.sh" tone="violet" icon={<MailIcon className="h-4 w-4" />}>
          Email
        </Pill>
        <Pill href="https://github.com/2xBuild" tone="green" icon={<GitHubIcon className="h-4 w-4" />}>
          GitHub
        </Pill>
        <Pill
          href="https://www.linkedin.com/in/hanu-9958ab25b/"
          tone="blue"
          icon={<LinkedInIcon className="h-4 w-4" />}
        >
          LinkedIn
        </Pill>
        <Pill href="https://x.com/izzHanu" tone="amber" icon={<XIcon className="h-3.5 w-3.5" />}>
          (Twitter)
        </Pill>
        <Pill href="https://www.instagram.com/izz.hanu" tone="pink" icon={<InstagramIcon className="h-4 w-4" />}>
          Instagram
        </Pill>
        <Pill href="https://www.threads.com/@izz.hanu" tone="violet" icon={<ThreadsIcon className="h-4 w-4" />}>
          Threads
        </Pill>
        <Pill href="https://www.youtube.com/@izzHanu" tone="red" icon={<YouTubeIcon className="h-4 w-4" />}>
          YouTube
        </Pill>
      </nav>

      <SectionTitle id="projects">Projects</SectionTitle>

      <ul className="mt-8 ml-3.5 flex flex-col gap-3 text-lg">
        {projects.map((p) => (
          <li key={p.name}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className={`silent-underline flex w-fit items-center gap-3 font-serif text-2xl leading-tight ${
                p.visibility === "inactive" ? "text-fg/45" : ""
              } ${
                p.visibility === "closed"
                  ? "relative after:absolute after:top-1/2 after:left-0 after:w-full after:-translate-y-1/2 after:h-[2px] after:bg-current after:content-[''] opacity-60 grayscale text-fg/60"
                  : ""
              }`}
            >
              <SiteLogo src={p.logo} name={p.name} className={`${p.logoSize === "small" ? "h-7 w-7" : p.logoSize === "big" ? "h-3 w-3" : "h-5 w-5"} ${p.visibility === "inactive" ? "opacity-50 grayscale" : ""}`} />
              <span>{p.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <SectionTitle id="about">Stack</SectionTitle>
      <p className="mt-8 ml-3.5 max-w-[58ch] text-base leading-relaxed text-fg/85">
        Fullstack engineer, now an all-rounder. I can design, sell, and run
        GTM. Rich in creativity, ambition, and hunger.
      </p>

      <SectionTitle>Journey</SectionTitle>
      <ol className="mt-8 ml-3.5 border-l border-line pl-6">
        {journey.map((j) => (
          <li key={j.heading} className="relative mb-8 last:mb-0">
            <span
              aria-hidden
              className="absolute -left-[27px] top-2 h-2 w-2 rounded-full bg-fg/60 ring-4 ring-bg"
            />
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-xl">{j.heading}</span>
              <span className="text-sm text-muted">({j.span})</span>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-muted">{j.text}</p>
          </li>
        ))}
      </ol>

      <SectionTitle id="domains">Domains</SectionTitle>

      <p className="mt-8 ml-3.5 max-w-[58ch] text-base leading-relaxed text-fg/85">
        A small garden of domain names I&apos;ve collected. Some are for future
        projects, some are just fun. If you want one, ping me on{" "}
        <ExternalLink href="https://x.com/izzHanu">twitter/x</ExternalLink>.
      </p>

      <ul className="mt-8 ml-3.5 flex flex-col gap-3">
        {domains.map((d) => (
          <li key={d.name}>
            <a
              href={d.href}
              target="_blank"
              rel="noreferrer"
              className="silent-underline flex w-fit items-center gap-3 font-serif text-lg"
            >
              <SiteLogo src={d.logo} name={d.name} />
              {d.name}
            </a>
          </li>
        ))}
      </ul>

      <footer className="mt-16 text-sm text-muted">
        <Link href="/ui" className="silent-underline">
          UI
        </Link>{" "}
        — components and stuff i created for fun.
      </footer>
    </Shell>
  );
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="silent-underline text-link"
    >
      {children}
    </a>
  );
}
