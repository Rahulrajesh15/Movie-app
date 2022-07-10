import {useState, useEffect} from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";





function App() {

//   771be39

const API_URL = "http://www.omdbapi.com/?apikey=771be39";

const [inputText, setInputText] = useState("");

const [movies, setMovies] = useState([]);


useEffect(() => {
   searchMovies("movies");
   setInputText("");
}, []);

const searchMovies = async (title) => {

    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json(); 
    
    setMovies(data.Search);

}

return (
    <div className="app">
    <h1>MovieLand</h1>
       <div className="search">
           <input 
               placeholder="search for movies"
               onChange={(event) => {setInputText(event.target.value)}}
               value={inputText}
           />
           <img 
               src={SearchIcon}
               alt="search"
               onClick={() => {
                   searchMovies(inputText);
                   }}
           />
       </div>
       <div className="container">
          
          { movies?.length > 0 ? (
              movies.map((movie) => {
                return(
                   <MovieCard 
                      movie={movie}
                   />
                );
          })
          ) : (
              <div className="empty">
                <h2>No movie found</h2>
              </div>
              )
          }
         
       </div>
</div>
)

}

export default App;