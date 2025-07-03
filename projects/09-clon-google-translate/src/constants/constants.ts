// js
// react
// third
// own

export const ACTIONS_TYPE = {
    INTERCHANGE_LANGUAGES: 'INTERCHANGE_LANGUAGES',
    SET_FROM_LANGUAGE: 'SET_FROM_LANGUAGE',
    SET_TO_LANGUAGE: 'SET_TO_LANGUAGE',
    SET_FROM_TEXT: 'SET_FROM_TEXT',
    SET_TO_TEXT: 'SET_TO_TEXT'
} as const;

export const SUPPORTED_LANGUAGES = {
    en: 'English',
    es: 'Español'
};

export const VOICE_FOR_LANGUAGE = {
    en: 'en-US',
    es: 'es-CO',
    auto: 'auto'
}

export const AUTO_LANGUAGE = 'auto';