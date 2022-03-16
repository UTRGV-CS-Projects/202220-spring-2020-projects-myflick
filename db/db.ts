export interface MoviesType {
  id: string;
  title: string;
  year: number;
  image: string;
  actors: string[];
  directors: string[];
  genres: string[];
  plot: string;
  rating: number;
}
export interface MovieCardType {
  poster_path: string;
  overview: string;
  genres: string[];
  id: string;
  release_date: number;
  original_title: string;
  title: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  image: string[];
}

export interface MyProfileType {
  title: string;
  horizontal: boolean;
  data: string[];
}

interface ImageType {
  key: string;
  uri: string;
}
