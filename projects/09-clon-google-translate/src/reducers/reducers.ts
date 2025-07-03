// js
// react
// third
// own
import { ACTIONS_TYPE, AUTO_LANGUAGE } from '../constants/constants';
import type { IInitialState, Action, ReducerMap } from '../interfaces/types';

const ACTION_REDUCER_BY_ACTION_TYPE: ReducerMap = {
    [ACTIONS_TYPE.INTERCHANGE_LANGUAGES]: (state) => {
        // logica del state dentro del reducer.
        // se evita en los components.
        if (state.fromLanguage === AUTO_LANGUAGE) return state;
        const loading = state.fromText !== '';
        return {
            ...state,
            fromLanguage: state.toLanguage,
            toLanguage: state.fromLanguage,
            loading,
            toText: ''
        };
    },
    [ACTIONS_TYPE.SET_FROM_LANGUAGE]: (state, action) => {
        if (state.fromLanguage === action.payload) return state;
        const loading = state.fromText !== '';
        return {
            ...state,
            fromLanguage: action.payload,
            toText: '',
            loading
        };
    },
    [ACTIONS_TYPE.SET_TO_LANGUAGE]: (state, action) => {
        if (state.toLanguage === action.payload) return state;
        const loading = state.fromText !== '';
        return {
            ...state,
            toLanguage: action.payload,
            toText: '',
            loading
        };
    },
    [ACTIONS_TYPE.SET_FROM_TEXT]: (state, action) => {
        const loading = action.payload !== ''
        return {
            ...state,
            fromText: action.payload,
            toText: "",
            loading
        };
    },
    [ACTIONS_TYPE.SET_TO_TEXT]: (state, action) => {
        return {
            ...state,
            toText: action.payload,
            loading: false
        };
    },
};

export const initialState: IInitialState = {
    fromLanguage: "auto",
    toLanguage: "en",
    fromText: "",
    toText: "",
    loading: false,
};

export const reducer = (state: IInitialState, action: Action) => {
    const getAction = ACTION_REDUCER_BY_ACTION_TYPE[action.type];
    return getAction ? getAction(state, action as any) : state;
};
