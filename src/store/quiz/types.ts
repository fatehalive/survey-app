import { SET_SURVEY_ANSWER } from './actionTypes'


interface SetSurveyAction {
  type: typeof SET_SURVEY_ANSWER
  value: string
}

export type QuizActionTypes = SetSurveyAction

export interface SystemState {
  quiz: {
    value: string
  }
}
