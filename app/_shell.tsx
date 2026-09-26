import type { ReactNode } from "react";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-24">
      {children}
    </main>
  );
}

export function SectionTitle({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}) {
  return (
    <div className="mt-16 scroll-mt-24" id={id}>
      <h2 className="pill-3d inline-flex items-center rounded-full px-3.5 py-1.5 font-serif text-[clamp(1rem,2vw,1.25rem)] leading-none tracking-[-0.02em]">
        {children}
      </h2>
    </div>
  );
}
