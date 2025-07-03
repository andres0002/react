// js
// react
// third
// own
import { ACTIONS_TYPE, AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants/constants";

export type Language = keyof typeof SUPPORTED_LANGUAGES;
export type AutoLanguage = typeof AUTO_LANGUAGE;
export type FromLanguage = Language | AutoLanguage;

export interface IInitialState {
    fromLanguage: FromLanguage;
    toLanguage: Language;
    fromText: string;
    toText: string;
    loading: boolean;
}

export type Action =
    | { type: typeof ACTIONS_TYPE.INTERCHANGE_LANGUAGES }
    | { type: typeof ACTIONS_TYPE.SET_FROM_LANGUAGE, payload: FromLanguage }
    | { type: typeof ACTIONS_TYPE.SET_TO_LANGUAGE, payload: Language }
    | { type: typeof ACTIONS_TYPE.SET_FROM_TEXT, payload: string }
    | { type: typeof ACTIONS_TYPE.SET_TO_TEXT, payload: string }

export type ReducerMap = {
    [K in Action['type']]: (
        state: IInitialState,
        action: Extract<Action, { type: K }>
    ) => IInitialState;
};

export enum SectionType {
    from='from',
    to='to'
}