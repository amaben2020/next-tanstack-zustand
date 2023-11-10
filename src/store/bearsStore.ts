import { create } from "zustand";

type TBearState = { bears: number };

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () =>
    set((state: TBearState) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
