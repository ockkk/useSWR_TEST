import { useSelector, shallowEqual } from "react-redux";
import { RootState } from "./rootStore";

export default function useSelectorTyped<T>(fn: (state: RootState) => T): T {
  return useSelector(fn, shallowEqual);
}
