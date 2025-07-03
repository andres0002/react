// js
// react
import { useReducer } from 'react';
// third
// own
import { ACTIONS_TYPE } from '../constants/constants';
import { initialState, reducer } from '../reducers/reducers';
import type { Language, FromLanguage } from '../interfaces/types';

export function useStore() {
    const [{
        fromLanguage,
        toLanguage,
        fromText,
        toText,
        loading
    }, dispatch] = useReducer(reducer, initialState);

    const setInterchangeLanguages = () => dispatch({
        type: ACTIONS_TYPE.INTERCHANGE_LANGUAGES
    });

    const setFromLanguage = (lang: FromLanguage) => dispatch({
        type: ACTIONS_TYPE.SET_FROM_LANGUAGE,
        payload: lang
    });

    const setToLanguage = (lang: Language) => dispatch({
        type: ACTIONS_TYPE.SET_TO_LANGUAGE,
        payload: lang
    });

    const setFromText = (text: string) => dispatch({
        type: ACTIONS_TYPE.SET_FROM_TEXT,
        payload: text
    });

    const setToText = (text: string) => dispatch({
        type: ACTIONS_TYPE.SET_TO_TEXT,
        payload: text
    });

    return {
        fromLanguage,
        toLanguage,
        fromText,
        toText,
        loading,
        setInterchangeLanguages,
        setFromLanguage,
        setToLanguage,
        setFromText,
        setToText
    };
}