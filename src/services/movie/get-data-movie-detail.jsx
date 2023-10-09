import { useQuery } from "@tanstack/react-query";
//cara import file external
import {http} from "../../utils/http";
import { API_ENDPOINTS } from "../../utils/api-endpoints";



// //metode level 4 (bisa menampung lebih dari 1 parameter, lebih dinamis)
// const fetchDataMovieDetail = async ({queryKey}) => {
//     const [_key, _params] = queryKey;
//     const { data } = await http.get(_key + _params.id);
//     return data
// }


// //Level 4
// const useMovieDataQueryDetail = (options) =>{
//     return useQuery([API_ENDPOINTS.DETAIL_MOVIE, options], fetchDataMovieDetail);
// }

// export {fetchDataMovieDetail, useMovieDataQueryDetail}



const fetchDataMovieDetail = async (id) => {
    console.log(id, "ini id movie")
    const { data } = await http.get(`${API_ENDPOINTS.DETAIL_MOVIE}${id}`)
    return data
    
}


const useMovieDataDetailQuery = (id) =>{
    return useQuery(["userDataMovieDetail", id], ()=> fetchDataMovieDetail(id));
}

export {fetchDataMovieDetail, useMovieDataDetailQuery}