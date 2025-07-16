// js
// react
// third
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
// own
import { type Question } from "../interfaces/interfaces";

interface State {
    questions: Question[];
    currentQuestion: number;
    fetchQuestions: (limit: number) => Promise<void>;
    selectAnswer: (questionId: number, answerIndex: number) => void;
    goNextQuestion: () => void;
    goPreviousQuestion: () => void;
    resetGame: () => void;
}

// const loggerMiddleware = (config) => (set, get, api) =>
//     config(
//         (...args) => {
//             console.log('🧩 Middleware - before state:', get())
//             set(...args)
//             console.log('🧩 Middleware - after state:', get())
//         },
//         get,
//         api
//     )

export const useQuestionsStore = create<State>()(devtools(persist((set, get) => {
    return {
        questions: [],
        currentQuestion: 0,
        fetchQuestions: async (limit: number) => {
            const res = await fetch('/mocks/data.json');
            const json = await res.json();
            // console.log('json:', json);
            const questions = json.sort(() => Math.random() - 0.5).slice(0, limit);
            set({ questions }, false, 'FETCH_QUESTIONS');
        },
        selectAnswer: (questionId: number, answerIndex: number) => {
            // get questions del state current (get() => state).
            const { questions } = get();
            // use the structuredClone for clone object.
            const newQuestions = structuredClone(questions);
            // find index question.
            const questionIndex = newQuestions.findIndex(q => q.id === questionId);
            // get info question.
            const questionInfo = newQuestions[questionIndex];
            // assign values.
            const userSelectedAnswer = answerIndex;
            const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex;
            newQuestions[questionIndex] = {
                ...questionInfo,
                userSelectedAnswer,
                isCorrectUserAnswer
            }
            // set state global.
            set({
                questions: newQuestions
            }, false, 'SELECT_ANSWER');
        },
        goNextQuestion: () => {
            const { currentQuestion, questions } = get();
            const nextQuestion = currentQuestion + 1;

            if (nextQuestion < questions.length) {
                set({
                    currentQuestion: nextQuestion
                }, false, 'GO_NEXT_QUESTION');
            }
        },
        goPreviousQuestion: () => {
            const { currentQuestion } = get();
            const previousQuestion = currentQuestion - 1;

            if (previousQuestion >= 0) {
                set({
                    currentQuestion: previousQuestion
                }, false, 'GO_PREVIOUS_QUESTION');
            }
        },
        resetGame: () => {
            set({
                questions: [],
                currentQuestion: 0
            }, false, 'RESET_GAME');
        }
    }
}, {
    name: 'questions'

})));