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

interface MyProfileType {
  title: string;
  horizontal: boolean;
  data: ImageType[];
}

interface ImageType {
  key: string;
  uri: string;
}
export const MyProfileSections: MyProfileType[] = [
  {
    title: "Favorites",
    horizontal: true,
    data: [
      {
        key: "1",
        uri: "https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/baby-driver-rory-hi-res.jpg",
      },
      {
        key: "2",
        uri: "https://images.squarespace-cdn.com/content/v1/5702ab9d746fb9634796c9f9/1570206011880-G7G59JFOV23504NCZMIA/MIDSTHD-04_PayoffKATrimmed_RGB-FIN_R13.jpg",
      },
      {
        key: "3",
        uri: "https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217",
      },
      {
        key: "4",
        uri: "https://www.joblo.com/wp-content/uploads/2021/04/luca-disney-pixar-trailer-poster-2021-1.jpg",
      },
      {
        key: "5",
        uri: "https://penji.co/wp-content/uploads/2019/09/The_Godfather-iconic-movie-posters.jpg",
      },
      {
        key: "6",
        uri: "https://www.filmjabber.com/movie-poster-thumbs/clifford-the-big-read-dog-movie-poster-6695.jpg",
      },
      {
        key: "7",
        uri: "https://i5.walmartimages.com/asr/149d1fd0-2254-421f-89d8-fe8d0f879b2d.45ce4ae056c8c0b3b1fce677f437a252.jpeg",
      },
      {
        key: "8",
        uri: "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/ant_man_ver5.jpg",
      },
      {
        key: "9",
        uri: "https://static01.nyt.com/images/2017/09/15/arts/24movie-posters8/24movie-posters8-superJumbo.jpg",
      },
    ],
  },
  {
    title: "My Photos",
    horizontal: true,
    data: [
      {
        key: "1",
        uri: "https://images.unsplash.com/photo-1600377202759-e783ff47dff7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
      },
      {
        key: "2",
        uri: "https://images.unsplash.com/photo-1598962995982-5f5c824652e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
      },
      {
        key: "3",
        uri: "https://images.unsplash.com/photo-1595326995002-3c708e5caed7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
      },
      {
        key: "4",
        uri: "https://images.unsplash.com/photo-1513757271804-385fb022e70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        key: "5",
        uri: "https://images.unsplash.com/photo-1637527032130-3ee8b11d0cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        key: "6",
        uri: "https://images.unsplash.com/photo-1515052945961-bbb80118b74b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
      },
      {
        key: "7",
        uri: "https://images.unsplash.com/photo-1513065200622-9a226a3c7adc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        key: "8",
        uri: "https://images.unsplash.com/photo-1509623994763-75a811aa5eac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1193&q=80",
      },
      {
        key: "9",
        uri: "https://images.unsplash.com/photo-1490093536267-c400cc82aeb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      },
    ],
  },
];
