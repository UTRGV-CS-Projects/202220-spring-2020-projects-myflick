import axios from "axios";

const url = "https://api.themoviedb.org/3";

const API_KEY = "2f7be12fe737d23f6891fca3cdd1b33f";

export const fetchDiscovery = async (page: number) => {
  const pageNumber = page.toString();
  const { data } = await axios.get(
    url +
      `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${pageNumber}&with_genres=true&with_watch_monetization_types=flatrate`
  );
  return data;
};
export const fetchSimilarMovies = async (movieID: string) => {
  const { data } = await axios.get(
    url + `/movie/${movieID}/similar?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data;
};
export const fetchNowPlaying = async () => {
  const { data } = await axios.get(
    url + `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data;
};

export const fetchGenres = async () => {
  const { data } = await axios.get(
    url + `/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  return data;
};
