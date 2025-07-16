// js
// react
// third
// own

import { Button } from "@mui/material";
import { useQuestions } from "../hooks/useQuestions";

const LIMIT_QUESTIONS = 3;

function Start() {
    const { fetchQuestions } = useQuestions();

    const handleClick = () => {
        fetchQuestions(LIMIT_QUESTIONS);
    }

    return (
        <Button
            onClick={handleClick}
            variant="contained"
            style={{
                marginTop: '20px'
            }}
        >
            ¡Empezar!
        </Button>
    )
}

// exports
export default Start;