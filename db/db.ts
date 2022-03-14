export interface PeopleDetailsType {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  profileImage: string;
  lastMessage: string;
  opened: boolean;
  bio?: string;
  city?: string;
  state?: string;
  interests?: string[];
  images?: string[];
  isLoggedIn?: boolean;
}

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

export const People: PeopleDetailsType[] = [
  {
    id: "1",
    firstName: "Selena",
    lastName: "Gomez",
    age: 22,
    bio: "I like to play video games and go to the gym and go to the movies and eat and watch TV and stuff.",
    profileImage:
      "https://api.time.com/wp-content/uploads/2020/09/time-100-Selena-Gomez.jpg",
    images: [
      "https://ar.vogue.me/image_provider/?w=750&h=&zc=1&q=90&cc=ffffff&src=https://en.vogue.me/wp-content/uploads/2021/05/171702773_462064728208538_3012039913661281230_n.jpg",
      "https://media1.popsugar-assets.com/files/thumbor/dsCqdEx6NSqODU0ihVHSUCDwztk/562x135:2177x1750/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2019/09/09/020/n/1922398/3794d5c55d76e058296c92.97678413_/i/Selena-Gomez.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/191125_Selena_Gomez_at_the_2019_American_Music_Awards.png",
      "https://www.usmagazine.com/wp-content/uploads/2021/04/Whoa-Selena-Gomez-Looks-Like-A-Totally-Different-Person-With-Platinum-Blonde-Hair-Promo.jpg?w=1600&quality=86&strip=all",
    ],
    lastMessage: "Hey, how are you I miss you",
    interests: ["music", "art", "sports"],
    city: "New York",
    state: "NY",
    opened: false,
  },
  {
    id: "2",
    firstName: "Ashley",
    lastName: "Frangipane",
    age: 23,
    bio: "I like to sing silly little songs",
    profileImage:
      "https://i.pinimg.com/originals/9b/65/89/9b6589897ea022400280d26dcfd3efce.jpg",
    lastMessage: "How was the movie?",
    opened: false,
    city: "New Jersey",
    state: "NY",
    images: [
      "https://64.media.tumblr.com/2675130e6f0df00804462102eeb42e27/ca42ddac93c86096-44/s1280x1920/c896c3033f0696440e6207a711701322c6471b79.jpg",
      "https://i.pinimg.com/originals/9b/65/89/9b6589897ea022400280d26dcfd3efce.jpg",
      "https://i.pinimg.com/originals/5b/30/fa/5b30fa84ae34fbdf311a638d1445ccd5.jpg",
    ],
    interests: ["music", "cinema", "art"],
  },
  {
    id: "3",
    firstName: "Timmy",
    lastName: "Rodriguez",
    age: 24,
    bio: "I like to eat cake",
    profileImage:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    lastMessage: "We had a good time",
    opened: true,
    images: [
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    ],
  },
  {
    id: "4",
    firstName: "Tom",
    lastName: "Rachel",
    age: 25,
    bio: "I like to eat peanuts",
    profileImage:
      "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2230&q=80",
    lastMessage: "I hope to see you again!",
    opened: false,
    images: [
      "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2230&q=80",
    ],
  },
  {
    id: "5",
    firstName: "Jessica",
    lastName: "Nigri",
    age: 26,
    profileImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    lastMessage: "I'm so excited to see you!",
    opened: true,
    images: [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    ],
  },
  {
    id: "6",
    firstName: "Sam",
    lastName: "Pepper",
    age: 27,
    profileImage:
      "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    lastMessage: "I'm here",
    opened: true,
    images: [
      "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    ],
  },
  {
    id: "7",
    firstName: "Sam2",
    lastName: "Houston",
    age: 27,
    profileImage:
      "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    lastMessage: "I'm here",
    opened: true,
  },
  {
    id: "8",
    firstName: "Sam3",
    lastName: "Rachel",

    age: 27,
    profileImage:
      "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    lastMessage: "I'm here",
    opened: true,
  },
  {
    id: "9",
    firstName: "Sam4",
    lastName: "Rachel",

    age: 28,
    profileImage:
      "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    lastMessage: "I'm here",
    opened: true,
  },
  {
    id: "10",
    firstName: "Sam5",
    lastName: "Rachel",

    age: 29,
    profileImage:
      "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    lastMessage: "I'm here",
    opened: true,
  },
  {
    id: "11",
    firstName: "Sam6",
    lastName: "Rachel",

    age: 30,
    profileImage:
      "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    lastMessage: "I'm here",
    opened: true,
  },
];

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
