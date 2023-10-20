// import axios from "axios";
// import { API_ENDPOINTS } from "../../utils/api-endpoints";


// const searchMovies = async ({queryKey}) => {
//   try {
//     const [_key, _params] = queryKey;
//     const response = await axios.get(_key, {params: _params});
//     const results = response.data.results;
//     return results
//     // Lakukan sesuatu dengan hasil pencarian, seperti menampilkan daftar film.
//   } catch (error) {
//     // Tangani kesalahan jika permintaan gagal.
//   }
// };

import axios from "axios";
import { http3 } from "../../utils/http3";
import { API_ENDPOINTS } from "../../utils/api-endpoints";

// const apiKey = process.env.REACT_APP_KEY
// const mainUrl = process.env.REACT_APP_SERVER.SEARCH_MOVIE

// export const getDataMovie = async () => {
//     const movie = await axios.get(`${mainUrl}/movie/popular?page=1&query=S`);
//     return movie.data.results
// }


export const searchMovie = async (q, PageNow) => {
  const search = await http3.get(`${API_ENDPOINTS.SEARCH_MOVIE}?page=${PageNow}&query=${q}`);
  return search.data
};


