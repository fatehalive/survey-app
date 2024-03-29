import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'

export const About: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Fragment>
      <Typography>Survee 0.1.0</Typography>
      <Button
        type="button"
        cy-data="go-back-button"
        onClick={() => navigate('/')}
      >
        Back
      </Button>
    </Fragment>
  )
}
