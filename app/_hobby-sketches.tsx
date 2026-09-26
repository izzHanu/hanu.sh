// Rough, hand-drawn sketches for the hobbies section. Everything is drawn in
// currentColor so it follows the site's fg/muted tokens in both themes, and a
// small turbulence filter wobbles the strokes so they feel pencil-drawn.

type SketchProps = { className?: string };

function Rough({ id, scale = 2.6 }: { id: string; scale?: number }) {
  return (
    <filter id={id}>
      <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="3" />
      <feDisplacementMap in="SourceGraphic" scale={scale} />
    </filter>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ChessSketch({ className }: SketchProps) {
  return (
    <svg viewBox="0 0 120 100" preserveAspectRatio="xMinYMid meet" className={className} aria-hidden>
      <defs>
        <Rough id="rough-chess" />
      </defs>
      <g filter="url(#rough-chess)" {...stroke}>
        {/* board corner */}
        <path d="M8 92 L112 91" />
        <path d="M10 78 L110 79" opacity={0.5} />
        {[22, 44, 66, 88].map((x) => (
          <path key={x} d={`M${x} 79 L${x + 0.5} 92`} opacity={0.5} />
        ))}
        {/* hatched dark squares */}
        {[12, 56].map((x) => (
          <g key={x} opacity={0.35}>
            <path d={`M${x} 90 L${x + 8} 81`} />
            <path d={`M${x + 5} 90 L${x + 9} 85`} />
            <path d={`M${x + 22} 90 L${x + 30} 81`} />
          </g>
        ))}
        {/* knight */}
        <path d="M40 76 C40 66 46 62 50 56 C44 57 38 60 34 56 C31 52 36 46 42 40 C45 34 48 26 56 22 L55 16 L61 21 C72 22 80 34 78 50 C77 62 72 68 74 76 Z" />
        <path d="M36 76 L78 76" />
        <circle cx="52" cy="32" r="1.4" fill="currentColor" />
        <path d="M64 30 C68 38 70 48 66 58" opacity={0.5} />
        {/* pawn in the back */}
        <circle cx="96" cy="50" r="5" />
        <path d="M92 56 C92 62 89 68 88 76 L104 76 C103 68 100 62 100 56 Z" />
        {/* move arrow */}
        <path d="M18 60 C16 42 22 30 30 26" strokeDasharray="3 4" opacity={0.6} />
        <path d="M25 24 L31 25 L29 31" opacity={0.6} />
      </g>
    </svg>
  );
}

export function SoccerSketch({ className }: SketchProps) {
  return (
    <svg viewBox="0 0 120 100" preserveAspectRatio="xMinYMid meet" className={className} aria-hidden>
      <defs>
        <Rough id="rough-soccer" />
      </defs>
      <g filter="url(#rough-soccer)" {...stroke}>
        {/* ball */}
        <circle cx="70" cy="50" r="24" />
        <path d="M70 40 L79 46 L76 57 L64 57 L61 46 Z" />
        <path d="M70 40 L70 27" />
        <path d="M79 46 L92 42" />
        <path d="M76 57 L84 68" />
        <path d="M64 57 L56 68" />
        <path d="M61 46 L48 42" />
        {/* hatching on patches */}
        <g opacity={0.35}>
          <path d="M66 46 L72 42" />
          <path d="M65 51 L75 44" />
          <path d="M66 55 L76 49" />
        </g>
        {/* speed lines */}
        <path d="M8 40 L36 40" opacity={0.55} />
        <path d="M14 50 L40 50" opacity={0.55} />
        <path d="M4 60 L34 60" opacity={0.55} />
        {/* ground + shadow */}
        <path d="M10 88 C40 85 80 90 112 86" />
        <path d="M54 84 C62 82 78 82 86 84" opacity={0.4} />
      </g>
    </svg>
  );
}

export function BrainstormingSketch({ className }: SketchProps) {
  return (
    <svg viewBox="0 0 120 100" preserveAspectRatio="xMinYMid meet" className={className} aria-hidden>
      <defs>
        <Rough id="rough-brainstorm" />
      </defs>
      <g filter="url(#rough-brainstorm)" {...stroke}>
        {/* thought cloud */}
        <path d="M30 58 C18 58 16 44 26 40 C24 28 40 22 48 30 C52 18 72 18 76 30 C88 26 98 38 90 48 C98 56 88 66 78 62 C72 70 56 70 52 62 C44 68 32 66 30 58 Z" />
        <circle cx="30" cy="72" r="4" />
        <circle cx="22" cy="82" r="2.4" />
        {/* scribbled ideas inside */}
        <path d="M36 46 C40 40 44 52 48 44 C52 36 54 50 58 44" opacity={0.6} />
        <path d="M60 36 L68 44 M68 36 L60 44" opacity={0.6} />
        <circle cx="74" cy="50" r="4" opacity={0.6} />
        <path d="M42 56 L64 56" strokeDasharray="2 4" opacity={0.5} />
        {/* lightbulb sparking out */}
        <path d="M100 22 C100 14 112 14 112 22 C112 27 108 28 108 33 L104 33 C104 28 100 27 100 22 Z" />
        <path d="M104 37 L108 37" />
        <path d="M106 8 L106 4 M96 12 L93 9 M116 12 L119 9" opacity={0.6} />
      </g>
    </svg>
  );
}

export function BuildingSketch({ className }: SketchProps) {
  return (
    <svg viewBox="0 0 120 100" preserveAspectRatio="xMinYMid meet" className={className} aria-hidden>
      <defs>
        <Rough id="rough-building" />
      </defs>
      <g filter="url(#rough-building)" {...stroke}>
        {/* laptop */}
        <path d="M20 30 L76 30 L76 68 L20 68 Z" />
        <path d="M10 76 L86 76 L80 68 L16 68 Z" />
        {/* code on screen */}
        <path d="M28 40 L24 45 L28 50" />
        <path d="M40 40 L44 45 L40 50" />
        <path d="M34 39 L31 51" opacity={0.6} />
        <path d="M50 42 L68 42 M50 48 L62 48 M28 58 L56 58" opacity={0.5} />
        {/* hammer */}
        <path d="M86 58 L106 28" />
        <path d="M98 22 L114 32 L110 38 L96 30 Z" />
        <g opacity={0.35}>
          <path d="M100 26 L106 30" />
        </g>
        {/* ground */}
        <path d="M6 88 C40 85 80 90 114 86" />
        {/* sparks */}
        <path d="M84 16 L88 20 M80 24 L85 24" opacity={0.6} />
      </g>
    </svg>
  );
}

export function WalkingSketch({ className }: SketchProps) {
  return (
    <svg viewBox="0 0 120 94" preserveAspectRatio="xMinYMid meet" className={className} aria-hidden>
      <defs>
        <Rough id="rough-walking" />
      </defs>
      <g filter="url(#rough-walking)" {...stroke}>
        {/* person one */}
        <circle cx="40" cy="30" r="6" />
        <path d="M40 36 L40 60" />
        <path d="M40 44 L32 54 M40 44 L48 52" />
        <path d="M40 60 L32 78 M40 60 L48 78" />
        {/* person two */}
        <circle cx="66" cy="32" r="6" />
        <path d="M66 38 L66 62" />
        <path d="M66 46 L58 54 M66 46 L74 56" />
        <path d="M66 62 L58 78 M66 62 L74 78" />
        {/* chatter */}
        <path d="M78 14 C78 8 104 8 104 14 C104 20 96 22 88 21 L82 26 L83 20 C80 19 78 17 78 14 Z" />
        <path d="M84 14 L98 14" opacity={0.5} strokeDasharray="2 3" />
        {/* path */}
        <path d="M6 82 C40 78 80 84 114 80" />
        <path d="M20 90 L30 90 M52 91 L64 91 M86 89 L98 89" opacity={0.4} />
      </g>
    </svg>
  );
}

export function RacketSketch({ className }: SketchProps) {
  return (
    <svg viewBox="0 0 120 89" preserveAspectRatio="xMinYMid meet" className={className} aria-hidden>
      <defs>
        <Rough id="rough-racket" />
      </defs>
      <g filter="url(#rough-racket)" {...stroke}>
        {/* racket one */}
        <ellipse cx="38" cy="36" rx="16" ry="20" transform="rotate(-25 38 36)" />
        <path d="M46 54 L60 86" />
        <g opacity={0.35}>
          <path d="M28 28 L46 48 M26 36 L42 54 M34 20 L50 40" />
          <path d="M26 44 L44 22 M32 50 L50 30" />
        </g>
        {/* racket two */}
        <ellipse cx="84" cy="36" rx="16" ry="20" transform="rotate(25 84 36)" />
        <path d="M76 54 L62 86" />
        <g opacity={0.35}>
          <path d="M94 28 L76 48 M96 36 L80 54 M88 20 L72 40" />
          <path d="M96 44 L78 22 M90 50 L72 30" />
        </g>
        {/* ball */}
        <circle cx="61" cy="12" r="5" />
        <path d="M57 9 C60 12 60 14 58 16" opacity={0.5} />
        <path d="M48 8 L42 6 M50 14 L44 15" opacity={0.55} />
      </g>
    </svg>
  );
}

// The "me deep inside" set shares a quieter hand: a lighter wobble so the small
// details survive, a soft offset tint under the main shape (like a riso print
// slightly out of register), and four-point sparkles instead of plus signs.

function Tint({ d, dx = 3, dy = 3 }: { d: string; dx?: number; dy?: number }) {
  return <path d={d} transform={`translate(${dx} ${dy})`} fill="currentColor" fillOpacity={0.1} stroke="none" />;
}

const sparkle = (x: number, y: number, s: number) =>
  `M${x} ${y - s} Q${x} ${y} ${x + s} ${y} Q${x} ${y} ${x} ${y + s} Q${x} ${y} ${x - s} ${y} Q${x} ${y} ${x} ${y - s} Z`;

export function ListenSketch({ className }: SketchProps) {
  const ear =
    "M40 38 C38 22 50 13 60 14 C72 15 79 26 77 38 C76 48 70 53 67 60 C64 66 65 72 61 78 C57 84 47 84 45 76";
  return (
    <svg viewBox="0 0 120 91" preserveAspectRatio="xMinYMid meet" className={className} aria-hidden>
      <defs>
        <Rough id="rough-listen" scale={1.8} />
      </defs>
      <g filter="url(#rough-listen)" {...stroke}>
        <g transform="translate(11 16) scale(0.78)" strokeWidth={2.05}>
        <Tint d={`${ear} Z`} />
        {/* ear: helix, its inner fold, antihelix, tragus and canal */}
        <path d={ear} />
        <path d="M46 34 C47 26 54 21 61 22 C69 23 72 31 70 39" opacity={0.55} />
        <path d="M55 29 C63 32 64 42 59 48 C55 52 54 57 58 62" />
        <path d="M43 46 C48 45 50 52 45 56" />
        {/* the world talking, arriving in waves */}
        <path d="M86 36 C90 42 90 50 86 56" />
        <path d="M94 30 C100 40 100 52 94 62" opacity={0.55} />
        <path d="M102 24 C110 38 110 54 102 68" opacity={0.3} />
        {/* and me, saying very little */}
        <path d="M18 80 L30 80 C32 80 33 81 33 83 L33 86 C33 88 32 89 30 89 L23 89 L19 92.5 L19.5 89 C17.5 89 16 88 16 86 L16 83 C16 81 17 80 18 80 Z" opacity={0.6} />
        <g fill="currentColor" stroke="none" opacity={0.6}>
          <circle cx="21.5" cy="84.5" r="0.9" />
          <circle cx="24.5" cy="84.5" r="0.9" />
          <circle cx="27.5" cy="84.5" r="0.9" />
        </g>
        </g>
      </g>
    </svg>
  );
}

export function HeartSketch({ className }: SketchProps) {
  const coat = "M42 46 L39 70 L55 70 L52 46 C49 44.5 45 44.5 42 46 Z";
  const bird = "M78 70 C78 64 84 62 88 64 C89 61.5 93 62 93 65 L96 66 L93 67 C92 70 86 72 78 70 Z";
  const heart = (x: number, y: number, s: number) =>
    `M${x} ${y + s} C${x - 2 * s} ${y - 0.2 * s} ${x - 1.2 * s} ${y - 1.6 * s} ${x} ${y - 0.6 * s} C${x + 1.2 * s} ${y - 1.6 * s} ${x + 2 * s} ${y - 0.2 * s} ${x} ${y + s} Z`;
  return (
    <svg viewBox="0 0 120 89" preserveAspectRatio="xMinYMid meet" className={className} aria-hidden>
      <defs>
        <Rough id="rough-heart" scale={1.6} />
      </defs>
      <g filter="url(#rough-heart)" {...stroke}>
        {/* a park bench */}
        <path d="M18 56 L38 56 M70 56 L102 56 M18 62 L38 62 M70 62 L102 62" opacity={0.6} />
        <path d="M24 56 L24 72 M96 56 L96 72" opacity={0.6} />
        <path d="M14 72 L106 72 M20 72 L20 86 M100 72 L100 86" />
        <path d="M6 86 L114 86" opacity={0.5} />
        {/* someone in glasses, nose in a book */}
        <Tint d={coat} />
        <path d={coat} />
        <circle cx="47" cy="38" r="6" />
        <path d="M41.5 36 C42 30 51 29 53 35" opacity={0.7} />
        <circle cx="51" cy="38.5" r="2" />
        <path d="M49 38.2 L45 37.4" opacity={0.7} />
        <path d="M55 70 L62 70 L62 84 L66 84" />
        <path d="M49 51 L58 59" />
        <path d="M56 58 L62 55 L68 58 L68 63 L62 60.5 L56 63 Z M62 55 L62 60.5" />
        {/* ...sharing crumbs with a small friend */}
        <Tint d={bird} dx={2} dy={2} />
        <path d={bird} />
        <circle cx="91" cy="64.5" r="0.8" fill="currentColor" stroke="none" />
        <path d="M78 69 L73 67.5 M84 71 L84 72 M87 71 L87 72" />
        <g fill="currentColor" stroke="none" opacity={0.6}>
          <circle cx="72" cy="71" r="0.8" />
          <circle cx="75.5" cy="71.2" r="0.8" />
          <circle cx="70" cy="70.8" r="0.7" />
        </g>
        {/* and there it goes */}
        <path d={heart(72, 34, 4)} fill="currentColor" fillOpacity={0.12} />
        <path d={heart(84, 22, 2.6)} opacity={0.6} />
        <path d={sparkle(98, 36, 3)} opacity={0.5} />
      </g>
    </svg>
  );
}

export function NatureSketch({ className }: SketchProps) {
  const canopy =
    "M52 42 C46 40 46 32 52 30 C50 22 58 17 64 20 C66 13 78 13 80 20 C86 17 94 22 92 29 C98 31 98 40 92 42 C90 47 82 48 78 45 C74 48 68 48 66 45 C62 48 54 47 52 42 Z";
  return (
    <svg viewBox="0 0 120 85" preserveAspectRatio="xMinYMid meet" className={className} aria-hidden>
      <defs>
        <Rough id="rough-nature" scale={1.8} />
      </defs>
      <g filter="url(#rough-nature)" {...stroke}>
        {/* low sun, far hill, a couple of birds */}
        <circle cx="26" cy="34" r="6" fill="currentColor" fillOpacity={0.12} />
        <path d="M2 70 C12 65 24 63 34 66.5" opacity={0.35} />
        <path d="M34 20 Q36 18 38 20 Q40 18 42 20 M42 27 Q43.5 25.5 45 27 Q46.5 25.5 48 27" opacity={0.6} />
        {/* the tree on the hill */}
        <Tint d={canopy} />
        <path d={canopy} />
        <path d="M60 30 Q62 28 64 30 M74 24 Q76 22 78 24 M84 34 Q86 32 88 34 M68 38 Q70 36 72 38" opacity={0.35} />
        <path d="M70 64 C71 56 70 50 68 44 M75 64 C74 56 75 50 77 44" />
        <path d="M69.5 50 L64 45 M75.5 49 L81 43" opacity={0.7} />
        <path d="M2 82 C22 70 50 62 74 64 C94 66 108 70 118 72" />
        {/* someone sitting in its shade, doing nothing at all */}
        <circle cx="63" cy="53.5" r="2.6" />
        <path d="M64 56.5 L66.5 63.5 M66.5 63.5 L61 59.5 L58.5 64.5 M64.6 58.5 L61 59.5" />
        {/* grass and wildflowers */}
        <path d="M20 73.5 L21 70.5 M23 73 L23 69.5 M26 72 L27 69 M96 67 L97 64 M99 67.5 L99 64 M102 68.5 L103 65.5" opacity={0.5} />
        <path d="M38 67.3 L38 63.5 M46 65.8 L46 62.3 M88 65.6 L88 62" opacity={0.6} />
        <g fill="currentColor" stroke="none" opacity={0.6}>
          <circle cx="38" cy="62.5" r="1.4" />
          <circle cx="46" cy="61.3" r="1.4" />
          <circle cx="88" cy="61" r="1.4" />
        </g>
      </g>
    </svg>
  );
}

export function DreamSketch({ className }: SketchProps) {
  const moon = "M100 5 A10 10 0 1 0 110 19 A8.5 8.5 0 0 1 100 5 Z";
  const coat = "M35.5 58.5 L33.5 73 L42.5 73 L40.5 58.5 C39 57.5 37 57.5 35.5 58.5 Z";
  return (
    <svg viewBox="0 0 120 93" preserveAspectRatio="xMinYMid meet" className={className} aria-hidden>
      <defs>
        <Rough id="rough-dream" scale={1.6} />
      </defs>
      <g filter="url(#rough-dream)" {...stroke}>
        {/* the moon, just out of reach */}
        <Tint d={moon} dx={2} dy={2} />
        <path d={moon} />
        {/* someone on a hill, trying anyway with a butterfly net */}
        <path d="M4 90 C24 80 48 78 66 82 C84 86 100 90 116 90" />
        <Tint d={coat} />
        <path d={coat} />
        <circle cx="38" cy="53.5" r="4.5" />
        <path d="M36 73 L35.5 81 M40 73 L40.5 81" />
        <path d="M40 61 L46 54.5 M36 61 L43 57" />
        <path d="M42 58 L76 28" />
        <ellipse cx="80" cy="24" rx="6" ry="4.5" transform="rotate(-40 80 24)" />
        <path d="M75 27.5 C74 38 84 40 85.5 21" opacity={0.6} />
        <path d="M77 31 L83 27 M78 35 L84 30" opacity={0.3} />
        {/* one already caught */}
        <path d={sparkle(80, 33, 2.5)} fill="currentColor" fillOpacity={0.3} />
        {/* the rest of the sky */}
        <path d={sparkle(22, 20, 5)} />
        <path d={sparkle(58, 12, 3)} opacity={0.6} />
        <path d={sparkle(104, 48, 3.5)} opacity={0.6} />
        <circle cx="40" cy="30" r="0.8" fill="currentColor" opacity={0.6} />
        <circle cx="90" cy="62" r="0.8" fill="currentColor" opacity={0.6} />
        <circle cx="12" cy="52" r="0.8" fill="currentColor" opacity={0.6} />
      </g>
    </svg>
  );
}

export function MirrorSketch({ className }: SketchProps) {
  const cat = "M31 56 C22 62 18 76 22 88 L46 88 L41 80 C42 72 42 64 40 57";
  const [lx, ly, n] = [82, 46, 12];
  const mane =
    Array.from({ length: n }, (_, i) => {
      const a = (i / n) * Math.PI * 2;
      const m = ((i + 0.5) / n) * Math.PI * 2;
      const b = ((i + 1) / n) * Math.PI * 2;
      const p = (t: number, r: number) => `${(lx + r * Math.cos(t)).toFixed(1)} ${(ly + r * Math.sin(t)).toFixed(1)}`;
      return `${i === 0 ? `M${p(a, 10)} ` : ""}Q${p(m, 15)} ${p(b, 10)}`;
    }).join(" ") + " Z";
  return (
    <svg viewBox="0 0 120 94" preserveAspectRatio="xMinYMid meet" className={className} aria-hidden>
      <defs>
        <Rough id="rough-mirror" scale={1.6} />
      </defs>
      <g filter="url(#rough-mirror)" {...stroke}>
        {/* a standing mirror */}
        <ellipse cx="82" cy="46" rx="20" ry="28" />
        <ellipse cx="82" cy="46" rx="16.5" ry="24.5" opacity={0.45} />
        <path d="M72 70 L67 88 M92 70 L97 88" />
        <path d="M94 26 L97 31 M92 30 L96 37" opacity={0.35} />
        {/* ...and who's looking back */}
        <Tint d={mane} dx={1.5} dy={1.5} />
        <path d={mane} />
        <circle cx="82" cy="47" r="7" />
        <path d="M76.5 42 C75.5 38.5 79 37.5 79.5 40.5 M87.5 42 C88.5 38.5 85 37.5 84.5 40.5" />
        <g fill="currentColor" stroke="none">
          <circle cx="79.3" cy="46" r="0.9" />
          <circle cx="84.7" cy="46" r="0.9" />
        </g>
        <path d="M80.8 49.2 L83.2 49.2 L82 50.8 Z M82 50.8 C81.5 52.4 80 52.6 79.4 51.8 M82 50.8 C82.5 52.4 84 52.6 84.6 51.8" />
        {/* a very ordinary cat */}
        <Tint d={`${cat} Z`} />
        <path d={cat} />
        <circle cx="36" cy="50" r="8" />
        <path d="M29.9 44.9 L29 36 L34.6 42.1 M37.4 42.1 L43 36 L42.1 44.9" />
        <circle cx="39.8" cy="48.8" r="0.9" fill="currentColor" stroke="none" />
        <path d="M43 52 L50 51 M43 54 L50 55" opacity={0.5} />
        <path d="M34 88 C33 81 35 75 38 71" opacity={0.5} />
        <path d="M21 85 C12 86 9 77 14 72" />
        <path d="M6 88 L114 88" opacity={0.5} />
        <path d={sparkle(104, 14, 4)} opacity={0.7} />
        <path d={sparkle(60, 16, 3)} opacity={0.5} />
      </g>
    </svg>
  );
}

export function IntrovertSketch({ className }: SketchProps) {
  const blanket = "M60 86 C55 72 58 60 65 56 C62 42 68 32 76 32 C85 32 91 44 86 56 C92 62 95 72 92 86 Z";
  return (
    <svg viewBox="0 0 120 92" preserveAspectRatio="xMinYMid meet" className={className} aria-hidden>
      <defs>
        <Rough id="rough-introvert" scale={1.6} />
      </defs>
      <g filter="url(#rough-introvert)" {...stroke}>
        {/* rainy night outside */}
        <path d="M12 18 L42 18 L42 58 L12 58 Z" />
        <path d="M27 18 L27 58 M12 38 L42 38" opacity={0.6} />
        <path d="M8 60 L46 60" />
        <path d="M17 23 L15.5 27 M22 28 L20.5 32 M35 24 L33.5 28 M17 44 L15.5 48 M32 43 L30.5 47 M37 50 L35.5 54 M21 51 L19.5 55" opacity={0.4} />
        {/* wrapped up in a blanket, tea in hand */}
        <Tint d={blanket} />
        <path d={blanket} />
        <path d="M66 62 C69 70 69 78 68 83 M86 60 C83 68 84 78 85 86" opacity={0.4} />
        <circle cx="76" cy="46" r="7" />
        <path d="M73 46.5 C73.5 47.5 74.5 47.5 75 46.5 M78 46.5 C78.5 47.5 79.5 47.5 80 46.5" opacity={0.8} />
        <path d="M60 86 C64 82.5 69 83 72 86" opacity={0.5} />
        <path d="M71 62 L71 70 C71 72 73 73 75 73 L77 73 C79 73 81 72 81 70 L81 62 Z" />
        <path d="M81 64 C84.5 64 84.5 69 81 69" />
        <path d="M74 58 C72.5 55.5 75.5 54 74 51.5 M78 58 C76.5 55.5 79.5 54 78 51.5" opacity={0.5} />
        <path d="M50 86 L112 86" opacity={0.5} />
        {/* a lamp for company */}
        <path d="M104 86 L104 50 M96 50 L112 50 L108 40 L100 40 Z" />
        <path d="M98 54 L96 58 M104 55 L104 59 M110 54 L112 58" opacity={0.35} />
      </g>
    </svg>
  );
}

export function SearchSketch({ className }: SketchProps) {
  const home = "M-2 128 a52 52 0 1 0 104 0 a52 52 0 1 0 -104 0";
  const hers = "M154 140 a24 24 0 1 0 48 0 a24 24 0 1 0 -48 0";
  const skirt = "M174.5 97 C171 103 169 110 167 117.5 C173 115.3 183 115.3 189 117.5 C187 110 185 103 181.5 97 Z";
  const hairL = "M172.4 81 C170.5 86 171 91 168 95 C171 95.5 173 93.5 173.5 90";
  const hairR = "M183.6 81 C186 86 186 92 190 97 C186.5 97.5 184 95 183 91";
  const crown = "M173.8 77.8 L173 71.5 L175.6 74.3 L178 70.3 L180.4 74.3 L183 71.5 L182.2 77.8 Z";
  const tags: [string, number][] = [
    ["cute", 78],
    ["smart", 91],
    ["funny", 104],
  ];
  const hand = { fontFamily: "var(--font-hand)" };
  return (
    <svg viewBox="0 26 276 144" preserveAspectRatio="xMidYMid meet" className={className} aria-hidden>
      <defs>
        <Rough id="rough-search" scale={1.6} />
        <Rough id="rough-search-text" scale={0.8} />
      </defs>
      <g filter="url(#rough-search)" {...stroke}>
        {/* my little world: a house with the light on */}
        <g transform="translate(0 70)">
          <Tint d={home} />
          <path d={home} />
          <g transform="rotate(-25 28 81)">
            <path d="M22 82 L22 73 L28 67 L34 73 L34 82" />
            <path d="M26 74.5 L30 74.5 L30 78.5 L26 78.5 Z" fill="currentColor" fillOpacity={0.25} />
          </g>
          {/* me, scarf in the wind, looking out */}
          <circle cx="58" cy="59.5" r="3.5" />
          <path d="M57.5 63.5 C54 63 50 60 45.5 61 C49 62.5 52 64.5 55.5 64.8" opacity={0.7} />
          <path d="M56 63.5 L55 71 L61 71 L60 63.5 M56.8 71 L56.5 76.5 M59.2 71 L59.5 76.6 M59.5 64.5 L64.5 62" />
          <path d="M62.2 60.1 L81.7 48.2 L84.3 52.8 L63.8 62.9 Z" />
          <path d="M77.8 50.6 L80.2 54.8" opacity={0.6} />
          <path d="M72 56.5 L67 78.9 M72 56.5 L78 84.2" />
        </g>
        {/* all the way across, straight to her */}
        <path d="M90 114 C104 76 150 64 190 84" strokeDasharray="0.5 5" opacity={0.5} />

        <g transform="translate(32 0)">
          {/* her world */}
          <Tint d={hers} />
          <path d={hers} />
          <circle cx="170" cy="150" r="2.2" opacity={0.4} />
          <circle cx="189" cy="156" r="1.5" opacity={0.4} />

          {/* the princess: crown, long hair, a big skirt, the rose in hand */}
          <Tint d={hairL} dx={1} dy={1} />
          <Tint d={hairR} dx={1} dy={1} />
          <path d={hairL} />
          <path d={hairR} />
          <Tint d={skirt} dx={2} dy={1.5} />
          <path d={skirt} />
          <g fill="currentColor" stroke="none" opacity={0.5}>
            <circle cx="172" cy="111.8" r="0.7" />
            <circle cx="176" cy="111" r="0.7" />
            <circle cx="180" cy="111" r="0.7" />
            <circle cx="184" cy="111.8" r="0.7" />
          </g>
          <path d="M175 90 L181 90 L181.5 97 L174.5 97 Z" />
          <circle cx="178" cy="83" r="6" />
          <path d="M173 80.5 C175 80 176.8 79 177.8 77.9 M178.2 77.9 C179.2 79 181 80 183 80.5" opacity={0.8} />
          <path d={crown} fill="currentColor" fillOpacity={0.2} />
          <g fill="currentColor" stroke="none">
            <circle cx="173" cy="71" r="0.8" />
            <circle cx="178" cy="69.8" r="0.8" />
            <circle cx="183" cy="71" r="0.8" />
            <circle cx="176" cy="84" r="0.75" />
            <circle cx="180" cy="84" r="0.75" />
            <circle cx="174.3" cy="85.8" r="1.2" opacity={0.2} />
            <circle cx="181.7" cy="85.8" r="1.2" opacity={0.2} />
          </g>
          <path d="M176.6 86.4 C177.4 87.2 178.6 87.2 179.4 86.4" />
          {/* one arm holding the rose out toward me */}
          <path d="M175 91.5 L166 95.5" />
          <path d="M166 96 C165.2 93 166.2 90 165.5 87.5" />
          <path d="M165.8 92.5 C163.5 91 162 91.5 161.5 92.5 C163 93.5 164.5 93.5 165.8 92.5 Z" opacity={0.7} />
          <path d="M162.7 85.5 C162.7 89 168.3 89 168.3 85.5 L166.9 86.7 L165.5 84.5 L164.1 86.7 Z" fill="currentColor" fillOpacity={0.15} />
          <path d="M181 91.5 L185.5 97" />
          {/* her tags, as little pills */}
          {tags.map(([word, y]) => (
            <rect key={word} x="204" y={y - 5} width="28" height="10" rx="5" strokeWidth={1.1} opacity={0.6} />
          ))}

          {/* the things she loves: adventure, nature, sports, travelling */}
          <g transform="translate(160.2 123.9) rotate(-40)">
            <path d="M-11 1 L-4 -10 L-1.5 -6.5 L3 -16 L11 1 Z" fill="currentColor" fillOpacity={0.1} />
            <path d="M0 -8.5 L1.6 -7 L3 -9 L4.6 -7.2 L6 -9.6" />
            <path d="M-6 -5 L-3 -3 M6 -3 L8 -1" opacity={0.4} />
            <path d="M3 -16 L3 -23" />
            <path d="M3 -23 L8.5 -21.3 L3 -19.5" fill="currentColor" fillOpacity={0.25} />
          </g>
          <g transform="translate(196.4 124.6) rotate(50)">
            <path d="M0 0 L0 -8 M0 -4 L2.5 -6.5" />
            <path d="M-6 -10 C-9 -13 -6 -18 -2.5 -17 C-1 -21 5 -21 5.5 -17 C9 -16 9 -11 6 -9.5 C5 -7 -4 -7 -6 -10 Z" fill="currentColor" fillOpacity={0.12} />
          </g>
          <circle cx="145" cy="141" r="5" />
          <path d="M145 138.5 L147.3 140.2 L146.4 143 L143.6 143 L142.7 140.2 Z" fill="currentColor" fillOpacity={0.3} />
          <path d="M152 146 L156 147 M151 150 L154 151.5" opacity={0.4} />
          <path d="M150 62 C160 46 176 56 184 45 C187 41 191 39.5 195 38.5" strokeDasharray="0.5 4.5" opacity={0.5} />
          <g transform="translate(206 36) rotate(-12)">
            <path d="M-9 0 C-9 -1.8 6 -2.2 9.5 0 C6 2.2 -9 1.8 -9 0 Z" fill="currentColor" fillOpacity={0.12} />
            <path d="M-1 -1.5 L-5 -8.5 L-2.5 -8.5 L4 -1.5 M-1 1.5 L-5 8.5 L-2.5 8.5 L4 1.5" />
            <path d="M-7.5 -1 L-9.5 -4.5 L-8 -4.5 L-5.5 -1 M-7.5 1 L-9.5 4.5 L-8 4.5 L-5.5 1" opacity={0.7} />
          </g>
        </g>

        {/* the sky in between */}
        <path d={sparkle(138, 36, 4.5)} />
        <path d={sparkle(60, 60, 3)} opacity={0.6} />
        <path d={sparkle(14, 108, 3)} opacity={0.5} />
        <path d={sparkle(108, 126, 2.5)} opacity={0.5} />
        <path d={sparkle(262, 158, 3)} opacity={0.5} />
        <path d={sparkle(130, 118, 2.5)} opacity={0.5} />
        <path d="M20 40 L36 32" opacity={0.4} />
        <path d={sparkle(37.5, 31.2, 2.5)} opacity={0.7} />
        <g fill="currentColor" stroke="none" opacity={0.6}>
          <circle cx="36" cy="74" r="0.8" />
          <circle cx="90" cy="32" r="0.8" />
          <circle cx="166" cy="30" r="0.8" />
          <circle cx="264" cy="52" r="0.8" />
          <circle cx="110" cy="60" r="0.8" />
          <circle cx="100" cy="150" r="0.8" />
          <circle cx="8" cy="34" r="0.8" />
        </g>
      </g>

      {/* the words, in her handwriting */}
      <g filter="url(#rough-search-text)" fill="currentColor" style={hand}>
        <g transform="translate(32 0)">
          {tags.map(([word, y]) => (
            <text key={word} x="218" y={y + 2.8} textAnchor="middle" fontSize={8.5}>
              {word}
            </text>
          ))}
          <g fontSize={8} opacity={0.75}>
            <text x="206" y="56" textAnchor="middle"><tspan fontSize={6}>♡</tspan> travelling</text>
            <text x="143" y="100" textAnchor="end"><tspan fontSize={6}>♡</tspan> adventure</text>
            <text x="137" y="144" textAnchor="end"><tspan fontSize={6}>♡</tspan> sports</text>
            <text x="222" y="140" textAnchor="middle"><tspan fontSize={6}>♡</tspan> nature</text>
          </g>
        </g>
      </g>
    </svg>
  );
}

export function ObsessionSketch({ className }: SketchProps) {
  const coat = "M128 50 L134 51.5 L128 66 L121 64 Z";
  return (
    <svg viewBox="0 0 240 93" preserveAspectRatio="xMidYMid meet" className={className} aria-hidden>
      <defs>
        <Rough id="rough-obsession" scale={1.6} />
      </defs>
      <g filter="url(#rough-obsession)" {...stroke}>
        <path d="M8 88 L232 88" opacity={0.5} />
        {/* discipline, left ringing on the floor */}
        <g transform="rotate(-18 40 78)">
          <circle cx="40" cy="76" r="9" />
          <path d="M32 68 C30 64 34 61 37 64 M48 68 C50 64 46 61 43 64" />
          <path d="M40 76 L40 70.5 M40 76 L44 78" />
          <path d="M34 84 L32 87.5 M46 84 L48 87.5" />
        </g>
        <path d="M24 64 L20 61 M22 72 L17 72 M54 60 L57 56 M57 68 L62 66" opacity={0.45} />
        <path d="M62 82 C60 77 66 75 69 78 C72 79 71 86 66 86.5 C63 87 61 85 62 82 Z M64 80 L67 83 M66 79 L64 84" opacity={0.6} />
        <path d="M76 85 C75 82 79 81 81 83 C82 85 80 87.5 78 87.5 C76.5 87.5 76 86.5 76 85 Z" opacity={0.5} />
        {/* me, off after the thing i can't stop thinking about */}
        <path d="M92 56 L108 56 M96 64 L111 64 M88 72 L101 72" opacity={0.35} />
        <path d="M131 48 C124 44 118 46 112 42" opacity={0.6} />
        <Tint d={coat} />
        <path d={coat} />
        <circle cx="136" cy="44" r="5" />
        <path d="M125 65 L133 73 L131 84 L135 84 M123 65 L116 74 L107 72" />
        <path d="M132 52 L142 47 L148 45 M130 53 L122 58 L119 54" />
        <path d="M126 86 C122 84 118 86 116 88 M138 86 C141 84 144 85 146 87" opacity={0.4} />
        {/* the spark, always a little ahead */}
        <path d="M152 44 C162 30 170 52 180 42 C183 39 185 37 187 36.5" strokeDasharray="0.5 5" opacity={0.5} />
        <circle cx="196" cy="36" r="7" fill="currentColor" fillOpacity={0.15} />
        <path d="M206.0 36.0 L210.0 36.0 M203.1 43.1 L205.9 45.9 M196.0 46.0 L196.0 50.0 M188.9 43.1 L186.1 45.9 M186.0 36.0 L182.0 36.0 M188.9 28.9 L186.1 26.1 M196.0 26.0 L196.0 22.0 M203.1 28.9 L205.9 26.1" opacity={0.55} />
        <path d={sparkle(214, 20, 4)} opacity={0.7} />
        <path d={sparkle(178, 18, 3)} opacity={0.5} />
        <path d={sparkle(218, 58, 3)} opacity={0.5} />
        <path d={sparkle(160, 70, 2.5)} opacity={0.4} />
        <g fill="currentColor" stroke="none" opacity={0.6}>
          <circle cx="100" cy="24" r="0.8" />
          <circle cx="228" cy="38" r="0.8" />
          <circle cx="150" cy="16" r="0.8" />
        </g>
      </g>
    </svg>
  );
}

export function GoldenGateSketch({ className }: SketchProps) {
  // Wide, low canvas so it reads as a footer strip. Main span cable runs
  // from the tower tops (y 18) down to ~48 mid-span; side spans are straight.
  const sag = (x: number) => 48 - 30 * ((x - 320) / 128) ** 2;
  const side = (x: number) => 64 - (x < 320 ? x - 64 : 576 - x) * (46 / 128);
  return (
    <svg viewBox="0 0 640 124" preserveAspectRatio="xMidYMax meet" className={className}>
      <defs>
        <Rough id="rough-goldengate" />
      </defs>
      <g filter="url(#rough-goldengate)" {...stroke}>
        {/* hills on either shore */}
        <path d="M0 66 C22 52 48 46 74 50 C90 52 96 60 106 66" opacity={0.6} />
        <path d="M534 66 C550 54 576 44 602 46 C620 48 634 54 640 58" opacity={0.6} />
        {/* towers */}
        {[192, 448].map((x) => (
          <g key={x}>
            <path d={`M${x - 5} 92 L${x - 5} 14 M${x + 5} 92 L${x + 5} 14`} />
            <path d={`M${x - 5} 14 L${x + 5} 14 M${x - 5} 30 L${x + 5} 30 M${x - 5} 46 L${x + 5} 46 M${x - 5} 76 L${x + 5} 76`} />
            <path d={`M${x - 3} 22 L${x + 3} 22 M${x - 3} 38 L${x + 3} 38`} opacity={0.4} />
          </g>
        ))}
        {/* main cables */}
        <path d="M64 64 C112 52 160 34 192 18 C240 58 400 58 448 18 C480 34 528 52 576 64" />
        {/* suspenders */}
        <g opacity={0.4}>
          {[216, 240, 264, 288, 320, 352, 376, 400, 424].map((x) => (
            <path key={x} d={`M${x} ${sag(x).toFixed(1)} L${x} 66`} />
          ))}
          {[96, 120, 144, 168, 472, 496, 520, 544].map((x) => (
            <path key={x} d={`M${x} ${side(x).toFixed(1)} L${x} 66`} />
          ))}
        </g>
        {/* deck */}
        <path d="M48 66 L592 66 M48 70 L592 70" />
        <g opacity={0.3}>
          {[60, 110, 160, 230, 290, 350, 410, 480, 530, 575].map((x) => (
            <path key={x} d={`M${x} 70 L${x + 6} 66`} />
          ))}
        </g>
        {/* water */}
        <path d="M0 94 C64 91 112 96 176 93 C240 90 304 96 368 93 C432 90 496 96 560 93 C592 92 624 94 640 93" opacity={0.5} />
        <path d="M48 102 L96 102 M224 101 L282 101 M384 103 L432 103 M528 101 L570 101" opacity={0.35} />
        {/* sailboat */}
        <path d="M340 90 L356 90 L352 94 L343 94 Z M348 90 L348 76 L356 88 Z" opacity={0.6} />
        {/* fog + sun */}
        <path d="M104 22 C110 14 124 14 128 20 C136 16 144 22 140 26 L106 26 C100 26 100 23 104 22 Z" opacity={0.4} />
        <path d="M484 10 C490 4 502 6 504 10 C510 8 514 14 510 16 L486 16 C480 16 480 12 484 10 Z" opacity={0.3} />
        <circle cx="576" cy="18" r="7" opacity={0.5} />
      </g>
      {/* sign-off, hung in the sky between the two towers */}
      <text
        x="320"
        y="34"
        textAnchor="middle"
        filter="url(#rough-goldengate)"
        fill="currentColor"
        style={{ fontFamily: "var(--font-hand)", fontSize: 18 }}
      >
        thank you, that&apos;s it
      </text>
      {/* credit, in a handwritten face through the same wobble */}
      <a href="https://x.com/izzHanu" target="_blank" rel="noreferrer" className="hover:opacity-70">
        <text
          x="320"
          y="119"
          textAnchor="middle"
          filter="url(#rough-goldengate)"
          fill="currentColor"
          style={{ fontFamily: "var(--font-hand)", fontSize: 14 }}
        >
          Hanu
        </text>
      </a>
    </svg>
  );
}
