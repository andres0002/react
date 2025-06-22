// js
// react
// third
// own
import { i18n } from "../utils/i18n";

export function useI18n(lang) {
    return i18n[lang] || i18n.en;
}