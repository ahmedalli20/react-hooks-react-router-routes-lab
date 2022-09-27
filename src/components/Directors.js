import React from "react";
import { directors } from "../data";

function Directors() {
  const directorLists = directors.map((director)=>(
    <div key={director.name}>
      <h1>Drirector's Name : {director.name}</h1>
    
      <ul>
      <h2>Movies</h2>
        {director.movies.map((movie)=> (
         
             <li key={movie}>{movie}</li>
        ))} 
      </ul>

    </div>
    
    ))
  return <div>
    {/*{code here}*/}
    <h1>Directors Page</h1>

    {directorLists}
    </div>;
}

export default Directors;
