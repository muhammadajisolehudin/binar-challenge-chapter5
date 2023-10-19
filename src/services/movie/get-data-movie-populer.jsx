<<<<<<< HEAD
import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import { http3 } from "../../utils/http3";

const fetchDataMoviePopular = async (page) => {
    console.log(page, "ini page")
    const { data } = await http3.get(`${API_ENDPOINTS.POPULAR_MOVIE}?page=${page}`)
    return data
}

const useMovieDataPopularQuery = (page) =>{
    return useQuery(["userDataMoviePopular", page], ()=> fetchDataMoviePopular(page));
}
// const fetchDataMoviePopular = async ({queryKey}) => {
//     const [_key, _params] = queryKey;
//     const { data } = await http3.get(_key, {params: _params});
//     console.log(_key, "ini key")
//     return data  
// }

// const useMovieDataPopularQuery = (options) =>{
//     return useQuery([API_ENDPOINTS.POPULAR_MOVIE, options], fetchDataMoviePopular);
// }

export {fetchDataMoviePopular, useMovieDataPopularQuery}
=======
import { http3 } from '../../utils/http3'
import { API_ENDPOINTS } from '../../utils/api-endpoints'
import { useQuery } from '@tanstack/react-query'

const fetchDataMoviePopular = async(id) => {
    console.log(id, "ini id movie popular")
    const {data} = await http3.get(`${API_ENDPOINTS.POPULAR_MOVIE}${id}`)
    return data;
}
const useMovieDataPopularQuery = (id) =>{
    return useQuery(["useDataPopularMovie", id], () => fetchDataMoviePopular(id));
}


export {fetchDataMoviePopular, useMovieDataPopularQuery}
>>>>>>> 67833b883c663e83e4f01f9196ea5964ca6ab81a
