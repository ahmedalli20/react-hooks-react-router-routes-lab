import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsLists = actors.map((actor)=>(
    <div key={actor.name}>
      <h1>Actor's Name : {actor.name}</h1>
    
      <ul>
      <h2>Movies</h2>
        {actor.movies.map((movie)=> (
         
             <li key={movie}>{movie}</li>
        ))} 
      </ul>

    </div>
    
    ))

  return <div>
    {/*{code here}*/}
    <h1>Actors Page</h1>

    {actorsLists}
    </div>;
}

export default Actors;
