import { create } from "zustand";

interface RatingModalStore {
    isOpen: boolean;
    name: string | null
    onOpen: (name: string) => void;
    onClose: () => void;
}

export const useRatingModal = create<RatingModalStore>((set) => ({
    isOpen: false,
    name: null,
    onOpen: (name) => set({ isOpen: true, name }),
    onClose: () => set({ isOpen: false, name: null })
}))