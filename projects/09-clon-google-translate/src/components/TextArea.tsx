// js
// react
// third
import { Form } from "react-bootstrap";
import { SectionType } from "../interfaces/types.d";
// own

interface IProps {
    type: SectionType;
    value: string;
    onChange: (value: string) => void;
    loading?: boolean;
}

const commonStyles: React.CSSProperties = {
    height: '150px',
    border: '0',
    resize: 'none'
};

const getPlaceHolder = ({type, loading}: {type: SectionType, loading?: boolean}) => {
    if (type === SectionType.from) return 'Introducir texto';
    if (loading) return 'Cargando...';
    return 'Traducción';
}

function TextArea({type, loading, value, onChange}: IProps) {
    const styles = type === SectionType.from
        ? {...commonStyles}
        : {...commonStyles, backgroundColor: '#ddd'}
    
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value);
    }

    return (
        <Form.Control
            as='textarea' // que element se debe renderizar.
            disabled={type === SectionType.to}
            placeholder={getPlaceHolder({type, loading})}
            autoFocus={type === SectionType.from}
            style={styles}
            value={value}
            onChange={handleChange}
        />
    )
}

export default TextArea;