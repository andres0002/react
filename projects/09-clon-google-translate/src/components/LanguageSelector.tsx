// js
// react
// third
import { Form } from "react-bootstrap";
// own
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants/constants";
import { type FromLanguage, type Language, SectionType } from "../interfaces/types.d";

type Props =
    | {type: SectionType.from, value: FromLanguage, onChange: (language: FromLanguage) => void}
    | {type: SectionType.to, value: Language, onChange: (language: Language) => void};

function LanguageSelector({onChange, value, type}: Props) {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Language);
    } 

    return (
        <Form.Select
            aria-label="Seleciona el idioma"
            onChange={handleChange}
            value={value}>
            {
                type === SectionType.from && <option value={AUTO_LANGUAGE}>Detectar Idioma</option>
            }
            {
                Object.entries(SUPPORTED_LANGUAGES).map(([key, language]) => {
                    return (
                        <option key={key} value={key}>
                            {language}
                        </option>
                    )
                })
            }
        </Form.Select>
    )
}

export default LanguageSelector;