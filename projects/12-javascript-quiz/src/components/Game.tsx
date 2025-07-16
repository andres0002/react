// js
// react
// third
import { IconButton, Stack } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
// own
import { useQuestions } from "../hooks/useQuestions";
import Question from "./Question";
import Footer from "./Footer";

function Game() {
    const {
        questions,
        currentQuestion,
        goNextQuestion,
        goPreviousQuestion,
        questionInfo
    } = useQuestions();

    return (
        <>
            <Stack
                direction='row' gap={2} alignItems='center' justifyContent='center'
            >
                <IconButton onClick={goPreviousQuestion} disabled={currentQuestion === 0}>
                    <ArrowBackIos />
                </IconButton>

                {
                    currentQuestion + 1
                }
                /
                {
                    questions.length
                }

                <IconButton onClick={goNextQuestion} disabled={currentQuestion === questions.length - 1}>
                    <ArrowForwardIos />
                </IconButton>
            </Stack>
            <Question info={questionInfo} />
            <Footer />
        </>
    )
}

// exports.
export default Game;