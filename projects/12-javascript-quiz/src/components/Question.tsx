// js
// react
// third
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// own
import { Card, Typography, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import type { Question as QuestionType } from "../interfaces/interfaces";
import { useQuestions } from '../hooks/useQuestions';

interface Props {
    info: QuestionType
}

function Question({ info }: Props) {
    const { selectAnswer } = useQuestions();

    const handleClick = (questionId: number, answerIndex: number) => () => {
        selectAnswer(questionId, answerIndex);
    }

    const getBackgroundColor = (index: number) => {
        const { correctAnswer, userSelectedAnswer } = info;
        // user no ha seleccionado nada todavía.
        if (userSelectedAnswer === undefined) return 'transparent';
        // user selecciono la respuesta incorrecta.
        if (index !== correctAnswer && index !== userSelectedAnswer) return 'blue';
        // user selecciono la respuesta correcta.
        if (index === correctAnswer) return 'green';
        // user selecciono pero no es correcta.
        if (index === userSelectedAnswer) return 'red';
    }

    return (
        <Card
            variant="outlined"
            sx={{
                bgcolor: '#222',
                padding: 2,
                // boxShadow: '0 0 10px #fff',
                marginTop: '20px'
            }}
        >
            <Typography variant="h5">
                {info.question}
            </Typography>

            <SyntaxHighlighter language="javascript" style={coldarkDark}>
                {info.code}
            </SyntaxHighlighter>

            <List sx={{
                bgcolor: '#333'
            }}
                disablePadding
            >
                {
                    info.answers.map((answer, index) => {
                        return <ListItem
                            key={index}
                            disablePadding
                            divider
                        >
                            <ListItemButton
                                onClick={handleClick(info.id, index)}
                                sx={{
                                    bgcolor: getBackgroundColor(index)
                                }}
                                disabled={info.userSelectedAnswer !== undefined}
                            >
                                <ListItemText
                                    primary={answer}
                                    sx={{
                                        textAlign: 'center'
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    })
                }
            </List>
        </Card>
    )
}

// exports.
export default Question;