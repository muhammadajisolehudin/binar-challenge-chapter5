import React, { useEffect, useState } from 'react'

import { ListData } from "../asset/components/RanderList/ListData";
import { CorouselItem} from "../asset/components/corousel/CorouselItem";
import axios from 'axios';
import { fetchDataMoviePopular, useMovieDataPopularQuery } from '../services/movie/get-data-movie-populer';
import { Carousel } from "@material-tailwind/react";

export const HomePage = () => {

const [movies, setMovies] = useState([]);
const [PageNow, setPageNow] = useState(1);
const [query, setQuery] = useState('');
//  const bg_image = {
//    background-image: url('background.jpg');
//   };
const{data:fetchUser, refetch: loadUlang} = useMovieDataPopularQuery(PageNow)

const getDataMovie = async () => {
  const data = await fetchDataMoviePopular(PageNow)
  setMovies(data.results) 
  // console.log(movies, "data movie");
} 

//untuk serch movie
 

//untuk melakukan tindakan saat pertama dijalankan atau di mounting
useEffect(()=>{
  getDataMovie()
  console.log(fetchUser, "ini datanya")
}, [fetchUser])


  return (
    <div>
      <div className='font-sans'>
        <div className=" min-h-screen bg-transparent h-screen">
          <div className='relative z-40 p-4'>
            <div className='flex justify-between bg-slate-950'>
              <div>
                <h1 className='text-red-500 font-bold text-4xl'>MovieList</h1>
              </div>
              <div class="relative">
                <input type="text" className="bg-transparent border-2 text-white border-red-500 w-[30rem] h-[2.5rem] py-2 px-3 rounded-full focus:outline-none" placeholder="Search for movies..." value={query} onChange={(e) => setQuery(e.target.value)}/>
                <button onClick class="absolute right-0 top-0 text-white rounded-r px-3 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>

                </button>
              </div>
              <div className='gap-3'>
                <button class="text-red-500 w-[6rem] h-[2.5rem] mr-4 w-5 rounded-full border-2 border-red-500 font-semibold bg-transparent">Login</button>
                <button class="text-white w-[6rem] h-[2.5rem] rounded-full font-semibold bg-red-500">Register</button>
              </div>
            </div>
          </div>
          
          <Carousel
            className="rounded-xl mt-[-4.2rem]"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
           
            {console.log(movies, "data movie")}
              {movies.map(movie => (
              <CorouselItem id={movie.id} overview={movie.overview} backdrop_path={movie.backdrop_path} runtime={movie.runtime} title={movie.title} releaseDate={movie.release_date}posterPath={movie.poster_path} />
            ))}
          </Carousel>

        </div>

        <div className='p-4'>
          <div className='flex justify-between h-[2.5rem] m-0 p-0'>
            <div>
              <h1 className='text-3xl font-medium'>Popular Movie</h1>
            </div>
            <div className='flex place-items-center'>
              <h3 className='text-red-600'>see all movie</h3>
            </div>
          </div>


          <div className="mx-auto mt-10 px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
              {console.log(movies, "data movie")}
              {movies.map(movie => (
                <ListData id={movie.id} title={movie.title} releaseDate={movie.release_date}posterPath={movie.poster_path} />
              ))}
                
            </div>
                {/* <h1 className='text-3xl'>{movies.title}</h1> */}
            
              <div className='flex justify-between mt-8'>
              
              <button className='text-white w-[8rem] h-[2.5rem] rounded-full font-semibold bg-red-500' onClick={()=>{
                setPageNow(PageNow - 1)
              }}>Back Page</button>

              <h1 className=' font-bold text-2xl'>{PageNow}</h1>

              <button className='text-white w-[8rem] h-[2.5rem] rounded-full font-semibold bg-red-500' onClick={()=>{
                setPageNow(PageNow + 1)
              }}>Next Page</button>
            </div>
           
            

          </div>

          

        </div>

        
        
      </div>
     
    </div>
  )
}
