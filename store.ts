import { create } from "zustand";
import { createDocumentedWorld } from "./sim/documented";
import { computeMetrics, robustnessDrop } from "./sim/engine";
import { DEFAULT_FILTERS, type AppView, type GraphFilters } from "./sim/filters";
import type { AgentKind, Language, Metrics, World } from "./sim/types";

export type IsolateMode = "none" | "ego" | "component";

interface LabState {
  world: World;
  selectedId: number | null;
  compareId: number | null;
  hoverId: number | null;
  focusLang: Language | null;
  showHost: boolean;
  isolate: IsolateMode;
  roleFilter: AgentKind | null;
  markCuts: boolean;
  showPath: boolean;
  metrics: Metrics;
  robustness: number;
  view: AppView;
  filters: GraphFilters;
  reset: () => void;
  resetFilters: () => void;
  select: (id: number | null) => void;
  setCompare: (id: number | null) => void;
  setHover: (id: number | null) => void;
  setFocusLang: (lang: Language | null) => void;
  setShowHost: (v: boolean) => void;
  setIsolate: (v: IsolateMode) => void;
  setRoleFilter: (v: AgentKind | null) => void;
  setMarkCuts: (v: boolean) => void;
  setShowPath: (v: boolean) => void;
  setView: (v: AppView) => void;
  patchFilters: (p: Partial<GraphFilters>) => void;
}

function snapshot(world: World) {
  return {
    world,
    metrics: computeMetrics(world),
    robustness: robustnessDrop(world),
  };
}

const initial = createDocumentedWorld();
const initialSnap = snapshot(initial);

export const useLab = create<LabState>((set) => ({
  world: initial,
  selectedId: null,
  compareId: null,
  hoverId: null,
  focusLang: null,
  showHost: true,
  isolate: "none",
  roleFilter: null,
  markCuts: true,
  showPath: false,
  metrics: initialSnap.metrics,
  robustness: initialSnap.robustness,
  view: "network",
  filters: { ...DEFAULT_FILTERS },
  reset: () => {
    const world = createDocumentedWorld();
    const snap = snapshot(world);
    set({
      world,
      selectedId: null,
      compareId: null,
      hoverId: null,
      focusLang: null,
      showHost: true,
      isolate: "none",
      roleFilter: null,
      markCuts: true,
      showPath: false,
      metrics: snap.metrics,
      robustness: snap.robustness,
      view: "network",
      filters: { ...DEFAULT_FILTERS },
    });
  },
  resetFilters: () => set({ filters: { ...DEFAULT_FILTERS } }),
  select: (id) => set({ selectedId: id }),
  setCompare: (id) => set({ compareId: id }),
  setHover: (id) => set({ hoverId: id }),
  setFocusLang: (lang) => set({ focusLang: lang }),
  setShowHost: (v) => set({ showHost: v }),
  setIsolate: (v) => set({ isolate: v }),
  setRoleFilter: (v) => set({ roleFilter: v }),
  setMarkCuts: (v) => set({ markCuts: v }),
  setShowPath: (v) => set({ showPath: v }),
  setView: (v) => set({ view: v }),
  patchFilters: (p) => set((s) => ({ filters: { ...s.filters, ...p } })),
}));
