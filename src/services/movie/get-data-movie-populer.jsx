import { useQuery } from "@tanstack/react-query";
import {http} from "../../utils/http";
import { API_ENDPOINTS } from "../../utils/api-endpoints";

//cara pertama untuk hit API
const fetchDataMoviePopular = async (page) => {
    console.log(page, "ini page")
    const { data } = await http.get(`${API_ENDPOINTS.POPULAR}?page=${page}`)
    return data
    
}


const useMovieDataPopularQuery = (page) =>{
    return useQuery(["userDataMoviePopular", page], ()=> fetchDataMoviePopular(page));
}

export {fetchDataMoviePopular, useMovieDataPopularQuery}