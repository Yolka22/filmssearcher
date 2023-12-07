import React from 'react'

import { Box, Typography } from '@mui/joy'

export default function FilmCard({film}) {
  return (
    <Box sx={{border:"1px solid grey",borderRadius:"10px", padding:"10px", margin:"5px", maxWidth:"400px"}}>
    <img src={film.image} alt={film.name} style={{ maxWidth: '140px', height:"160px" }} />
      <Typography>{film.name}</Typography>
      <Typography>{film.year}</Typography>
      <Typography>{film.director}</Typography>
      <Typography>{film.description}</Typography>
    </Box>
  )
}
