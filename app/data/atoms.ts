import { atom, useAtom } from "jotai";

const isMobileAtom = atom(false);
export const useIsMobile = () => useAtom(isMobileAtom);

const currentAnimationAtom = atom<"Idle" | "Typing" | "Falling" | "">("Idle");
export const useCurrentAnimation = () => useAtom(currentAnimationAtom);

const currentSectionAtom = atom(0);
export const useCurrentSection = () => useAtom(currentSectionAtom);

const isWireFrameAtom = atom(false);
export const useIsWireFrame = () => useAtom(isWireFrameAtom);
