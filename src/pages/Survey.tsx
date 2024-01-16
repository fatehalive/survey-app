import { Model, SurveyModel } from 'survey-core'
import { Survey } from 'survey-react-ui'

import questions from '../models/survey.json'
import 'survey-core/defaultV2.min.css'

const survey: SurveyModel = new Model(questions)

export const Quiz: React.FC = () => {
  survey.focusFirstQuestionAutomatic = false

  return <Survey model={survey} />
}
