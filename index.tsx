import { createFileRoute } from "@tanstack/react-router";
import { Abstract } from "@/components/lab/Abstract";
import { AboutResearch } from "@/components/lab/AboutResearch";
import { Analysis } from "@/components/lab/Analysis";
import { ExportView } from "@/components/lab/ExportView";
import { FilterSidebar } from "@/components/lab/FilterSidebar";
import { HelpView } from "@/components/lab/HelpView";
import { HeroMark } from "@/components/lab/HeroMark";
import { Inspector } from "@/components/lab/Inspector";
import { LanguagesView } from "@/components/lab/LanguagesView";
import { NetworkStage } from "@/components/lab/NetworkStage";
import type { AppView } from "@/lib/sim/filters";
import { useLab } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: LabPage,
});

const TABS: { id: AppView; label: string }[] = [
  { id: "network", label: "Network" },
  { id: "analysis", label: "Analysis" },
  { id: "languages", label: "Languages" },
  { id: "export", label: "Export" },
  { id: "help", label: "Help" },
];

function LabPage() {
  const view = useLab((s) => s.view);
  const setView = useLab((s) => s.setView);

  return (
    <div className="min-h-dvh overflow-x-hidden bg-bg text-fg">
      <header className="border-b border-border">
        <div className="mx-auto max-w-[1480px] px-4 py-5 md:px-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <h1 className="font-display text-3xl text-fg">Nkitahodi</h1>
              <p className="mt-1 max-w-2xl text-sm text-muted">
                A documentary network of collaboration among Ghanaian language-technology
                organisations, 2021–2026
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-fg px-3 py-1 text-xs text-accent-fg">2021–2026</span>
              <span className="rounded-full border border-border bg-elevated px-3 py-1 text-xs text-muted">
                Public record
              </span>
            </div>
          </div>
        </div>
      </header>
      <HeroMark />

      <nav
        aria-label="Primary views"
        className="sticky top-0 z-20 border-b border-border bg-bg/95 backdrop-blur"
      >
        <div className="mx-auto flex max-w-[1480px] flex-wrap gap-1 px-2 py-2 md:px-6">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setView(t.id)}
              className={cn(
                "min-h-11 flex-1 rounded-md px-3 py-2 text-sm md:flex-none",
                view === t.id ? "bg-fg text-accent-fg" : "text-muted hover:bg-elevated hover:text-fg",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-[1480px] space-y-6 px-4 py-6 md:px-6 md:py-8">
        {view === "network" && (
          <>
            <Abstract />
            <div className="grid items-start gap-4 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <FilterSidebar />
              </div>
              <div className="lg:col-span-5">
                <NetworkStage />
              </div>
              <aside id="story" className="min-w-0 lg:col-span-4">
                <Inspector />
              </aside>
            </div>
          </>
        )}
        {view === "analysis" && <Analysis />}
        {view === "languages" && <LanguagesView />}
        {view === "export" && <ExportView />}
        {view === "help" && (
          <>
            <HelpView />
            <AboutResearch />
          </>
        )}
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-[1480px] px-4 py-4 text-xs text-subtle md:px-6">
          <span>Documentary record · public sources only · 2021–2026</span>
        </div>
      </footer>
    </div>
  );
}
