import React from "react";
import { movies } from "../data";

function Movies() {
  const movieLists = movies.map((list)=>(
    <div key={list.title}>
    <h2>Movie Title:{list.title}</h2>
    <p>Time:{list.time} minutes</p>
      <ul>
      <h3>Genre</h3>
        {list.genres.map((genre)=> (
         
             <li key={genre}>{genre}</li>
        ))} 
      </ul>
    </div>


  ))
  return <div>
    {/*{code here}*/}
    <h1>Movies Page</h1>
    
    {movieLists}
    </div>;
}

export default Movies;
