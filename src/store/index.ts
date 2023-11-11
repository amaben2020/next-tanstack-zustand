import { create } from "zustand";
import { createPokemonStore } from "./pokemonStore";

export const useCombinedStore = create((...params) => ({
  ...createPokemonStore(...params),
}));
