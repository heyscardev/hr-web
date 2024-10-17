import { create } from "zustand";

interface State {
  languageId?: number | false;
  open: boolean;
  setOpen: (open: State["open"], languageId?: State["languageId"]) => void;
}

export const useGraphModalStore = create<State>()((set) => ({
  languageId: false,
  open: false,
  setOpen: (open, languageId) => {
    const data: Partial<State> = { open };
    if (languageId) data.languageId = languageId;
    set(data);
  },
}));
