// actions.js
export const ADD_FILM = 'ADD_FILM';

export const addFilm = (film) => ({
  type: ADD_FILM,
  payload: film,
});
