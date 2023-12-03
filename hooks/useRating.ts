import { create } from "zustand";

interface RatingModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useRatingModal = create<RatingModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))