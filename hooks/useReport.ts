import { create } from 'zustand';

interface ReportModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useReportModal = create<ReportModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))