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
