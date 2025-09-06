import { create } from "zustand";

const useSelectedStore = create((set) => ({
  selected: "home",
  setSelected: (value) => set({ selected: value })
}));

export default useSelectedStore;
