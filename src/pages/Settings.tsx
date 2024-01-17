import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import Counter from '../components/counter'

export const Settings: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Fragment>
      <Counter />
      <button
        type="button"
        className="btn btn-small"
        cy-data="go-back-button"
        onClick={() => navigate('/')}
      >
        back
      </button>
    </Fragment>
  )
}
