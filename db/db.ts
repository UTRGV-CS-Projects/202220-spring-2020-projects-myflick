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
