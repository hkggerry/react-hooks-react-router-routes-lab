import React from "react";
import { directors } from "../data";

function Directors() {
  console.log(directors)
  const directorsDiv = directors.map((director)=>{
    return (
    <div>
      {director.name}
      <ul>
        {director.movies}
      </ul>
    </div>
    )  
})
  
  
  return (
  <div>
    <div>
    <h1>Directors Page</h1>
    </div>
      {directorsDiv}
  </div> 
  )}

export default Directors;
