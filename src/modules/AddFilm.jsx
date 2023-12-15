import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilm } from '../redux/actions';

const AddFilm = () => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films);

  const [filmData, setFilmData] = useState({
    name: '',
    year: '',
    image: '',
    director: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilmData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddFilm = () => {
    // Dispatch the 'ADD_FILM' action to the global state
    dispatch(addFilm({ ...filmData, id: films.length + 1 }));
  
    // Clear the local state
    setFilmData({
      name: '',
      year: '',
      image: '',
      director: '',
      description: '',
    });
  };

  return (
    <div>
      <h2>Add a New Film</h2>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Name:</label>
        <input type="text" name="name" value={filmData.name} onChange={handleInputChange} />

        <label>Year:</label>
        <input type="number" name="year" value={filmData.year} onChange={handleInputChange} />

        <label>Image URL:</label>
        <input type="text" name="image" value={filmData.image} onChange={handleInputChange} />

        <label>Director:</label>
        <input type="text" name="director" value={filmData.director} onChange={handleInputChange} />

        <label>Description:</label>
        <textarea name="description" value={filmData.description} onChange={handleInputChange} />

        <button type="button" onClick={handleAddFilm}>
          Add Film
        </button>
      </form>

      <div>
        <h2>Film List</h2>
        <ul>
          {films.map((film) => (
            <li key={film.id}>{film.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddFilm;
