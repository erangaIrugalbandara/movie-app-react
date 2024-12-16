import './App.css'
import MovieCard from './components/MovieCard';

function App() {
  return (
    <>
      <MovieCard  movie={{url: "https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Time Trap", release_date: "2015"}} />
    </>
  )
}

export default App;
