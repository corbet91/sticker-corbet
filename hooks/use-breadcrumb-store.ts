import { create } from "zustand";

export type BreadcrumbItemType = {
  label: string;
  href: string;
};

interface BreadcrumbState {
  items: BreadcrumbItemType[];
  setBreadcrumbs: (items: BreadcrumbItemType[]) => void;
}

export const useBreadcrumbStore = create<BreadcrumbState>((set) => ({
  items: [],
  setBreadcrumbs: (items) => set({ items }),
}));
