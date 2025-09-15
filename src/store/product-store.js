import { create } from "zustand";

const useProductStore = create((set) => ({
  product: "",
  setProduct: (value) => set({ product: value })
}));

export default useProductStore;
