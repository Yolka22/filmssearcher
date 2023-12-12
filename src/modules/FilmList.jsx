import React, { useState } from 'react';
import { Box, Input, Button } from '@mui/joy';
import FilmCard from './FilmCard';

export default function FilmList({ films }) {
  const [filmArray, setFilmArray] = useState(films);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    const inputText = event.target.value;
    setSearchText(inputText);
    const filteredFilms = films.filter((film) =>
      film.name.toLowerCase().includes(inputText.toLowerCase())
    );
    setFilmArray(filteredFilms);
  };

  const handleSort = (type) => {
    const sortedFilms = [...filmArray];
    sortedFilms.sort((a, b) => (a[type] > b[type] ? 1 : -1));
    setFilmArray(sortedFilms);
  };

  return (
    <Box>
      <Input
        placeholder="Поиск по имени..."
        value={searchText}
        onChange={handleSearch}
      />
      <Button onClick={() => handleSort('name')}>Сортировка по названию</Button>
      <Button onClick={() => handleSort('year')}>Сортировка по году</Button>
      {filmArray.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </Box>
  );
}
