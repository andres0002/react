// js
// react
// third
// own
import { useQuestionsStore } from "../store/questions";

export function useQuestions() {
    const questions = useQuestionsStore(state => state.questions);
    const currentQuestion = useQuestionsStore( state => state.currentQuestion);
    const fetchQuestions = useQuestionsStore(state => state.fetchQuestions);
    const selectAnswer = useQuestionsStore(state => state.selectAnswer);
    const goNextQuestion = useQuestionsStore( state => state.goNextQuestion);
    const goPreviousQuestion = useQuestionsStore( state => state.goPreviousQuestion);
    const resetGame = useQuestionsStore(state => state.resetGame);

    const questionInfo = questions[currentQuestion];

    const correctQuestions = questions.filter(q => q.isCorrectUserAnswer && q.userSelectedAnswer !== undefined).length ?? 0;
    const errorQuestions = questions.filter(q => !q.isCorrectUserAnswer && q.userSelectedAnswer !== undefined).length ?? 0;
    const unansweredQuestions = questions.filter(q => q.userSelectedAnswer === undefined).length ?? 0;

    return {
        questions,
        currentQuestion,
        fetchQuestions,
        selectAnswer,
        goNextQuestion,
        goPreviousQuestion,
        resetGame,
        questionInfo,
        correctQuestions,
        errorQuestions,
        unansweredQuestions
    };
}