import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { fetchDataMovieDetail, useMovieDataDetailQuery } from '../../services/movie/get-data-movie-detail';
import { useGetDataUser } from '../../services/auth/get_user';

export const DetailPage = () => {

const [movies, setMovies] = useState([]);
const { id } = useParams();

const{data:fetchUser} = useMovieDataDetailQuery(id)
const { data: Paijo, isError, status } = useGetDataUser({});

const getDataMovieById = async () => {
    const data = await fetchDataMovieDetail(id)
    setMovies(data.data) 
    console.log(movies, "data movie");
} 

//untuk melakukan tindakan saat pertama dijalankan atau di mounting
useEffect(()=>{
    getDataMovieById()
    //console.log(movies, "ini datanya")
    console.log(fetchUser, "masa gak ada")
}, [Paijo])


  return (
    <div>
        <div className='font-sans'>
            <div className=" min-h-screen bg-transparent h-screen">
                <div className='relative z-40 p-4'>
                    <div className='flex justify-between bg-slate-950'>
                        <div>
                            <h1 className='text-red-500 font-bold text-4xl'>MovieList</h1>
                        </div>
                        <div>
                            <input type="text" className="bg-transparent border-2 border-red-500 placeholder-white w-[30rem] h-[2.5rem] py-2 px-3 rounded-full focus:outline-none" placeholder="Search for movies..."/>
                        </div>
                        <div className='gap-3'>
                            <button class="text-white w-[6rem] h-[2.5rem] rounded-full font-semibold bg-red-500">Logout</button>
                        </div>
                    </div>
                </div>
        
               <div alt="image 1"className="bg-cover h-full p-4 w-full rounded-xl mt-[-4.2rem]" style={{  backgroundImage: `url('https://image.tmdb.org/t/p/original${movies.backdrop_path}')`}}  >
                    <div className='flex'>
                        <div className='flex text-white self-center gap-4 mt-[10rem] ms-10 flex-col w-[50%]'>
                            <h1 className='text-6xl font-bold'>{movies.title}</h1>
                            <p>Synopsis : {movies.overview}</p>
                            <p>Run Time : { movies.runtime } &nbsp; minute </p>
                            <p>Rating :&nbsp;
                                <StarRatings
                                rating={60/10}
                                starRatedColor="yellow"
                                numberOfStars={10}
                                starDimension="20px"
                                starSpacing="2px"
                            />
                            </p>
                            
                            <p className=''>Release Date : { movies.release_date } </p>
                            <button className="text-white w-[8rem] h-[2.5rem] rounded-full font-semibold bg-red-500">Watch NOW</button>
                        </div>
                        <div className='flex justify-center items-center w-[50%] mt-32 content-center'>
                            <div className=' bg-white rounded-lg shadow-lg rounded-md max-w-xs'>
                                <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}  className="w-[100%] h-[100%] object-cover rounded-lg" />
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

            </div>
        </div>  
    </div>
  )
}
