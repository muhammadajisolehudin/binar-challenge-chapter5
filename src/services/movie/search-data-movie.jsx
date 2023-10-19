import axios from "axios";
import { API_ENDPOINTS } from "../../utils/api-endpoints";


const searchMovies = async ({queryKey}) => {
  try {
    const [_key, _params] = queryKey;
    const response = await axios.get(_key, {params: _params});
    const results = response.data.results;
    return results
    // Lakukan sesuatu dengan hasil pencarian, seperti menampilkan daftar film.
  } catch (error) {
    // Tangani kesalahan jika permintaan gagal.
  }
};



