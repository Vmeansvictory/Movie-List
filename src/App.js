import './App.css';
import { MovieList } from './MovieList';
import image from "./vector.jpg";
import imageTwo from "./todo.jpg";

function App() {
  return (
    <div className="app" >
      <div className='container'>
      <img src={image} width="200px" alt="shopping"/>
      </div>
      <div className='container'>
      <h1>Movies to Watch</h1>
      </div>
      <MovieList/>
      <div className='container'>
      <img src={imageTwo} width="200px" alt="man"/>
      </div>
    </div>
  );
}

export default App;
