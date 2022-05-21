import { atom, selector} from "recoil";

const counterAtom = atom({
  key: "counterAtom",
  default: 0,
});

const counterSelector = selector({
  key: "counterSelector",
  get: ({ get }) => get(counterAtom),
});

export { counterAtom, counterSelector };
