import axios from 'axios'

export const SET_FETCH = "SET_FETCH"
export const SET_QUIZ = "SET_QUIZ"
export const SET_ERROR = "SET_ERROR"

const fetchQuiz = () => dispatch => {
    dispatch({ type: SET_FETCH})
    axios
.get("https://opentdb.com/api.php?amount=10&category=30&difficulty=medium&type=multiple")
    .then(res =>
        dispatch({
            type: SET_QUIZ,
            payload: res.data.results
        })
        )
    .catch(error => 
        dispatch({
            type: SET_ERROR, 
            payload: error.message
        })
        )
}

export default fetchQuiz
