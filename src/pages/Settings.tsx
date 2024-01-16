import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

export const Settings: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Fragment>
      <p>Survee 0.1.0</p>
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
