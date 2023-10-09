import React from 'react'

export const CorouselItem = (props) => {
  return (
    
     <div alt="image 1"className="bg-cover h-full p-4 w-full rounded-xl" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${props.backdrop_path}')` }}  >
        <div className='flex'>
            <div className='flex text-white self-center gap-4 mt-[18rem] ms-10 flex-col'>
                <h1 className='text-6xl font-bold'>{props.title}</h1>
                <p>Synopsis &nbsp; &nbsp;: {props.overview} </p>
                <p>Run Time &nbsp; &nbsp;: {props.runtime} min</p>
                            
                <p className=''>Release Date : {props.releaseDate}</p>
                <button className="text-white w-[8rem] h-[2.5rem] rounded-full font-semibold bg-red-500">Watch NOW</button>
            </div>
        </div>
                    
    </div>
                 
  )
}
