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
import {
  ChessSketch,
  SoccerSketch,
  BrainstormingSketch,
  BuildingSketch,
  WalkingSketch,
  RacketSketch,
  ListenSketch,
  HeartSketch,
  NatureSketch,
  DreamSketch,
  MirrorSketch,
  IntrovertSketch,
  SearchSketch,
  ObsessionSketch,
  GoldenGateSketch,
} from "./_hobby-sketches";
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

const achievements = [
  "been a topper in school. lil annoying cuz i used to ask a lot.",
  "built my first product @16, did 10k+ users and $1k+ revenue.",
  "peaked 1700+ at chess (somewhere around 1500-1600 now).",
  "bought my first car before i got out of school, and some real estate before college.",
  "did everything you see by self-learning and FAFOing.",
  "was the only one of my kind in school and college, going against the environment's pull on dreams and career path.",
];

const hobbies = [
  { heading: "Chess", Sketch: ChessSketch },
  { heading: "Soccer", Sketch: SoccerSketch },
  { heading: "Brainstorming", Sketch: BrainstormingSketch },
  { heading: "Building", Sketch: BuildingSketch },
];

type Answer = {
  text: string;
  Sketch: (props: { className?: string }) => React.JSX.Element;
  wide?: boolean;
  wider?: boolean;
};

const prompts: { prompt: string; answers: Answer[] }[] = [
  {
    prompt: "ideal way to have a first time convo",
    answers: [
      { text: "walking", Sketch: WalkingSketch },
      { text: "racket sports", Sketch: RacketSketch },
    ],
  },
  {
    prompt: "me deep inside",
    answers: [
      { text: "listen more, talk less", Sketch: ListenSketch },
      { text: "i fall for kind yet smart people", Sketch: HeartSketch },
      { text: "nature lover", Sketch: NatureSketch },
      { text: "delusional", Sketch: DreamSketch },
      { text: "high self esteem", Sketch: MirrorSketch },
      { text: "introvert", Sketch: IntrovertSketch },
      { text: "driven by obsession and not discipline", Sketch: ObsessionSketch, wide: true },
    ],
  },
  {
    prompt: "relationship status",
    answers: [
      { text: "single in find of 'her' who understands my world", Sketch: SearchSketch, wide: true, wider: true },
    ],
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
        GTM. Rich in taste, creativity, ambition, hunger and problem solving skills.
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

      <SectionTitle id="hobbies">Hobbies</SectionTitle>
      <p className="mt-8 ml-3.5 max-w-[58ch] text-base leading-relaxed text-fg/85">
        Things I&apos;m never tired of.
      </p>
      <ul className="mt-6 ml-3.5 grid max-w-[58ch] grid-cols-2 gap-x-8 gap-y-10">
        {hobbies.map(({ heading, Sketch }) => (
          <li key={heading}>
            <Sketch className="h-36 w-full text-fg/70" />
            <div className="mt-3 font-serif text-xl">{heading}</div>
          </li>
        ))}
      </ul>

      <SectionTitle id="achievements">Small things I am proud of</SectionTitle>
      <ul className="mt-8 ml-3.5 flex max-w-[58ch] list-disc flex-col gap-3 pl-5 text-base leading-relaxed text-fg/85 marker:text-fg/40">
        {achievements.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>

      <SectionTitle id="more">A bit more of me</SectionTitle>
     
      <ul className="mt-10 ml-3.5 flex flex-col gap-16">
        {prompts.map(({ prompt, answers }, i) => (
          <li key={prompt}>
            <h3 className="w-fit font-serif text-2xl underline decoration-fg/25 decoration-1 underline-offset-[6px]">
              {i + 1}. {prompt}
            </h3>
            <ol className="mt-6 grid max-w-[480px] grid-cols-2 gap-x-6 gap-y-10">
              {answers.map(({ text, Sketch, wide, wider }) => (
                <li key={text} className={`flex flex-col justify-end text-center ${wide ? "col-span-2" : ""}`}>
                  <Sketch className={`mx-auto block text-fg/70 ${wider ? "h-auto w-full max-w-[460px]" : wide ? "h-auto w-full max-w-[400px]" : "h-auto w-[154px]"}`} />
                  <p className="mt-1.5 font-serif text-base font-normal leading-snug text-fg/85">{text}</p>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ul>

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

      <footer className="mt-20 -mb-16 sm:-mb-24">
        <GoldenGateSketch className="block h-auto w-full text-fg/60" />
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
