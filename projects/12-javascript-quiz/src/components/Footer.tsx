// js
// react
// third
import { Button } from "@mui/material";
// own
import { useQuestions } from "../hooks/useQuestions";

function Footer() {
    const {
        unansweredQuestions,
        correctQuestions,
        errorQuestions,
        resetGame
    } = useQuestions();
    return (
        <footer
            style={{
                marginTop: '20px'
            }}
        >
            <p>
                Por responder {unansweredQuestions}
            </p>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px'
                }}
            >
                <strong>
                    Results
                    {`✅${correctQuestions}`}
                    {`❌${errorQuestions}`}
                </strong>
                <Button
                    onClick={() => resetGame()}
                >
                    Reset Game
                </Button>
            </div>
        </footer>
    )
}

// exports.
export default Footer;