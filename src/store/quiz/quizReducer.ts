/* eslint-disable @typescript-eslint/default-param-last */

import { SET_SURVEY_ANSWER } from './actionTypes'
import { QuizActionTypes } from './types'

const initialState = {
  surveyAnswer: [],
}

export default (state = initialState, action: QuizActionTypes) => {
  switch (action.type) {
    case SET_SURVEY_ANSWER:
      return { ...state, surveyAnswer: action.value }
    default:
      return state
  }
}
