// js
// react
import { useState } from "react";
// third
// own

interface Props {
    saveTodo: (title: string) => void;
}

function CreateTodo({saveTodo}: Props) {
    const [inputValue, setInputValue] = useState('');

    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    //     event.preventDefault();
    //     console.log('handleSubmit',inputValue);
    //     saveTodo(inputValue);
    //     setInputValue('');
    // }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.key === 'Enter' && inputValue !== '') {
            // console.log('KeyDown',inputValue);
            saveTodo(inputValue);
            setInputValue('');
        }
    }

    return (
        // <form onSubmit={handleSubmit}>
        <input
            className="new-todo"
            value={inputValue}
            onChange={(event) => {
                setInputValue(event.target.value);
            }}
            onKeyDown={handleKeyDown}
            placeholder="¿Qué quieres hacer?"
            autoFocus
        />
        // </form>
    )
}

// export
export default CreateTodo;