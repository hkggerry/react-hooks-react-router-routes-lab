import React from "react";
import { actors } from "../data";

function Actors() {
  console.log(actors)
  const actorsDiv = actors.map((actor) => {
    return (
    <div>
      {actor.name}
      <ul>
        {actor.movies}
      </ul>
    </div>
    )
  })
  
return (
  <div>
    <h1>Actors Page</h1>
      <div>
        {actorsDiv}
      </div>
  </div>
      
  )}

export default Actors;
