import './App.css';
import FilmList from './modules/FilmList';
import films from './storage/films';
function App() {
  return (
    <div className="App">
      <FilmList films={films}></FilmList>
    </div>
  );
}

export default App;
