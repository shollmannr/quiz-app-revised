import {
    // SET_ANSWERS,
    // SET_CURRENT_QUESTION,
    // SET_CURRENT_ANSWER,
    SET_ERROR,
    SET_SHOW_RESULTS,
    SET_QUIZ,
    SET_FETCH,
    // RESET_QUIZ,
} from './types.js';

const initialState = {
    QuizData: [],
    error: "",
    isFetching: false,
}

export const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FETCH:
            return { ...state, isFetching: true }
        case SET_QUIZ:
            return { ...state, isFetching: false, QuizData: action.payload }
        case SET_ERROR:
            return { ...state, isFetching: false, error: action.payload }

// function quizReducer(state, action) {
//     switch (action.type) {
//         case SET_CURRENT_ANSWER:
//             return {
//                 ...state,
//                 currentAnswer: action.currentAnswer,
//             };
//         case SET_CURRENT_QUESTION:
//             return {
//                 ...state,
//                 currentQuestion: action.currentQuestion,
//             };
//         case SET_ERROR:
//             return {
//                 ...state,
//                 error: action.error,
//             };
//         case SET_SHOW_RESULTS:
//             return {
//                 ...state,
//                 showResults: action.showResults,
//             };
//         case SET_ANSWERS:
//             return {
//                 ...state,
//                 answers: action.answers,
//             };
//         case RESET_QUIZ:
//             return {
//                 ...state,
//                 answers: [],
//                 currentQuestion: 0,
//                 currentAnswer: '',
//                 showResults: false,
//                 error: '',
//             };
        default:
            return state;
    }
}

export default quizReducer