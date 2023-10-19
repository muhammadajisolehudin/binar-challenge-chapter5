import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ListData = (props) => {
 

  

  return (
    
    <div className="bg-white rounded-lg shadow-lg rounded-md h-[full] w-[full]">
      <Link className="text-xl font-semibold mb-2" to={`/detail/${props.id}`}>
        <img src={`https://image.tmdb.org/t/p/w500${props.posterPath}`}  className="w-[100%] h-[90%] object-cover rounded-t-lg" />
        <div className="flex justify-center" onClick={()=>{}}>
          <div className="text-xl font-semibold mb-2" to={`/detail/${props.id}`}>{props.title}</div>
        </div>
      </Link>
    </div>
  );
};