import { create } from "zustand";

interface AuthState {
  user: any;
  isAuthReady: boolean;
  setUser: (user: any) => void;
  setAuthReady: (value: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthReady: false,

  setUser: (user) => set({ user }),
  setAuthReady: (value) => set({ isAuthReady: value }),

  logout: () => set({ user: null }),
}));