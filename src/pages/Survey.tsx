import { Model, SurveyModel } from 'survey-core'
import { Survey } from 'survey-react-ui'

import questions from '../models/survey.json'
import 'survey-core/defaultV2.min.css'

const survey: SurveyModel = new Model(questions)

const storageItemKey = 'quiz'

function saveSurveyData(s: any) {
  const data = s.data
  data.pageNo = s.currentPageNo
  localStorage.setItem(storageItemKey, JSON.stringify(data))
}

// Save complete
survey.onComplete.add((sender) => {
  sender.setCookie()
})

// Save survey results to the local storage
survey.onValueChanged.add(saveSurveyData)
survey.onCurrentPageChanged.add(saveSurveyData)

// Restore survey results
const prevData = localStorage.getItem(storageItemKey) || null
if (prevData) {
  const data = JSON.parse(prevData)
  survey.data = data
  if (data.pageNo) {
    survey.currentPageNo = data.pageNo
  }
}

survey.onTimer.add((sender) => {
  if (sender.timeSpent == questions.maxTimeToFinish) {
    survey.stopTimer()

    survey.getAllQuestions().forEach((question: any) => {
      if (!question.isAnswered) {
        question.value = null
      }
    })

    survey.completeLastPage()
  }
})

export const Quiz: React.FC = () => {
  const handleComplete = (event: any) => {
    console.log(event)
  }

  return <Survey model={survey} onComplete={handleComplete} />
}
