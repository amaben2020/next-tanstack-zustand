import { create } from "zustand";

type TBearState = {
  bears: number;
  increasePopulation: () => void;
  decreasePopulation: () => void;
};

const bearStore = create<TBearState>()((set) => ({
  bears: 0,
  increasePopulation: () =>
    set((state: Pick<TBearState, "bears">) => ({ bears: state.bears + 1 })),
  decreasePopulation: () =>
    set((state: TBearState) => {
      if (state.bears === 0) {
        return {
          bears: 0,
        };
      } else {
        return { bears: state.bears - 1 };
      }
    }),
  removeAllBears: () => set({ bears: 0 }),
}));

export default bearStore;
