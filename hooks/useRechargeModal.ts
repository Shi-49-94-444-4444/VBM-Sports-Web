import { create } from 'zustand';

interface RechargeModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRechargeModal = create<RechargeModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}))


export default useRechargeModal