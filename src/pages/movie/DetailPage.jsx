import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { fetchDataMovieDetail, useMovieDataDetailQuery } from '../../services/movie/get-data-movie-detail';

export const DetailPage = () => {

const [movies, setMovies] = useState([]);
const { id } = useParams();

const{data:fetchUser} = useMovieDataDetailQuery(id)

const getDataMovieById = async () => {
    const data = await fetchDataMovieDetail(id)
    setMovies(data) 
    console.log(movies, "data movie");
} 

//untuk melakukan tindakan saat pertama dijalankan atau di mounting
useEffect(()=>{
    getDataMovieById()
    //console.log(movies, "ini datanya")
    console.log(fetchUser, "masa gak ada")
}, [])


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
                            <input type="text" className="bg-transparent border-2 border-red-500 w-[30rem] h-[2.5rem] py-2 px-3 rounded-full focus:outline-none" placeholder="Search for movies..."/>
                        </div>
                        <div className='gap-3'>
                            <button class="text-red-500 w-[6rem] h-[2.5rem] mr-4 w-5 rounded-full border-2 border-red-500 font-semibold bg-transparent">Login</button>
                            <button class="text-white w-[6rem] h-[2.5rem] rounded-full font-semibold bg-red-500">Register</button>
                        </div>
                    </div>
                </div>
            
                //backgroundImage isis dengan backdrop_path 
               <div alt="image 1"className="bg-cover h-full p-4 w-full rounded-xl mt-[-4.2rem]" style={{  backgroundImage: ` `}}  >
                    <div className='flex'>
                        <div className='flex text-white self-center gap-4 mt-[10rem] ms-10 flex-col w-[50%]'>
                            <h1 className='text-6xl font-bold'>nanti isi dengan title</h1>
                            <p>Synopsis : nanti isi dengan overview </p>
                            <p>Run Time : nanti isi dengan durasi film </p>
                            <p>Rating :&nbsp;
                                <StarRatings
                                rating={60/10}
                                starRatedColor="yellow"
                                numberOfStars={10}
                                starDimension="20px"
                                starSpacing="2px"
                            />
                            </p>
                            
                            <p className=''>Release Date : nanti isi dengan release date </p>
                            <button className="text-white w-[8rem] h-[2.5rem] rounded-full font-semibold bg-red-500">Watch NOW</button>
                        </div>
                        <div className='flex justify-center items-center w-[50%] mt-32 content-center'>
                            <div className=' bg-white rounded-lg shadow-lg rounded-md max-w-xs'>
                                //isi src dengan poster_patch
                                <img src={``}  className="w-[100%] h-[100%] object-cover rounded-lg" />
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

            </div>
        </div>  
    </div>
  )
}
