import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Input, Button } from '@mui/joy';
import FilmCard from './FilmCard';
import Pagination from '@mui/material/Pagination';

export default function FilmList() {
  const itemsPerPage = 4;

  // Use useSelector to get films from the local component state
  const { films } = useSelector((state) => state);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedFilms = films.slice(startIndex, endIndex);

  return (
    <Box sx={{ width: '100%' }}>
      <Input
        placeholder="Поиск по имени..."
      />


      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        {paginatedFilms.map((film) => (
          <FilmCard key={film.id} film={film} sx={{ margin: '8px' }} />
        ))}
      </Box>

      <Pagination
        count={Math.ceil(films.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
      />
    </Box>
  );
}
