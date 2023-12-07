import React, { useState } from 'react';
import { Box, Input, Typography } from '@mui/joy';
import FilmCard from './FilmCard';

export default function FilmList({ films }) {
  const [filmArray, setFilmArray] = useState(films);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    const inputText = event.target.value;
    setSearchText(inputText);
    const filteredFilms = films.filter((film) =>
      film.name.toLowerCase().startsWith(inputText.toLowerCase())
    );
    setFilmArray(filteredFilms);
  };

  return (
    <Box>
      <Input
        placeholder="Поиск по имени..."
        value={searchText}
        onChange={handleSearch}
      />
      {filmArray.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </Box>
  );
}
