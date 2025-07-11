// js
// react
// third
import { useSelector, useDispatch, type TypedUseSelectorHook } from "react-redux";
// own
import type { RootState, AddDispatch } from "../store";


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAddDispatch: () => AddDispatch = useDispatch;