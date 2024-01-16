import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
// import Counter from '../components/counter/Counter'

export const Home: React.FC = () => {
  const navigate = useNavigate()

  const handleClickStart = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event) navigate('/survey')
  }

  return (
    <Fragment>
      <Typography variant="h3">Selamat Datang di Survee!</Typography>
      <br />
      <Typography>
        Silakan ikuti quiz ini untuk menguji pengetahuan Anda tentang topik
        Sumber Daya Manusia (HR).
      </Typography>
      <Typography>
        Quiz ini memiliki timer, jadi jawablah dengan cepat!
      </Typography>
      <br />
      <Typography>
        Siap untuk memulai quiz? Klik tombol 'Mulai' di bawah ini!
      </Typography>
      <Button variant="contained" onClick={handleClickStart}>
        Start Quiz Now
      </Button>
    </Fragment>
  )
}
