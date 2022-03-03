import React from "react";
import { movies } from "../data";

function Movies({movies}) {
  return (
    <div>
      <h1>Movies Page</h1>
        <div>
          {movies}
          <ul>
            <li></li>
          </ul>
        </div>
        <div>
          {movies}
          <ul>
            <li></li>
          </ul>
        </div>
        <div>
          {movies}
          <ul>
            <li></li>
          </ul>
        </div>
    </div>
  )}

export default Movies;
