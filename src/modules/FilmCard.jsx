// FilmCard.js
import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/joy';

export default function FilmCard({ film }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetailsToggle = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Box sx={{ border: '1px solid grey', borderRadius: '10px', padding: '10px', margin: '5px', maxWidth: '400px' }}>
      <img src={film.image} alt={film.name} style={{ maxWidth: '140px', height: '160px' }} />
      <Typography>{film.name}</Typography>
      <Typography>{film.year}</Typography>
      <Typography>{film.director}</Typography>
      <Button onClick={handleDetailsToggle}>
        {showDetails ? 'Скрыть подробности' : 'Подробнее'}
      </Button>
      {showDetails && <Typography>{film.description}</Typography>}
    </Box>
  );
}
