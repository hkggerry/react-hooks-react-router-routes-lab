import React from "react";
import { movies } from "../data";

function Movies() {
  const movieDiv = movies.map((movie)=>{
    return (
    <div>
      {movie.title} 
      {movie.time}
        <ul>
          <li>
            {movie.genres[0]}
          </li>
          <li>
            {movie.genres[1]}
          </li>
          <li>
            {movie.genres[2]}
          </li>
        </ul>
    </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
        <div>
          {movieDiv}
        </div>
    </div>
  )}

export default Movies;
