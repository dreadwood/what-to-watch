import {Film} from '../types/films';

export const films: Film[] = [
  {
    id: '1',
    name: 'Macbeth',
    poster: '/img/Macbeth-poster.jpg',
    smallPoster: '/img/macbeth.jpg',
    backgroundPoster: '/img/Macbeth-bg.jpg',
    colorPoster: '#9e9a99',
    video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    previewVideo: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    director: 'Justin Kurzel',
    cast: [
      'Michael Fassbender',
      'Marion Cotillard',
      'Jack Madigan',
      'Frank Madigan',
      'Paddy Considine',
      'Lochlann Harris',
      'Kayla Fallon',
      'Lynn Kennedy',
    ],
    released: 2015,
    duration: 113,
    genre: 'drama',
    // genre: ['drama', 'history', 'war'],
    description: '',
    rating: 8.8,
    reviewsount: 240,
    isFavorite: false,
  },
  {
    id: '2',
    name: 'Aviator',
    poster: '/img/aviator-poster.jpg',
    smallPoster: '/img/aviator.jpg',
    backgroundPoster: '/img/aviator-bg.jpg',
    colorPoster: '#e7e7e2',
    video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    previewVideo: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    director: 'Martin Scorsese',
    cast: [
      'Leonardo DiCaprio',
      'Cate Blanchett',
      'Kate Beckinsale',
      'John C. Reilly',
      'Alec Baldwin',
      'Alan Alda',
      'Ian Holm',
      'Danny Huston',
      'Gwen Stefani',
      'Jude Law',
    ],
    released: 2004,
    duration: 170,
    genre: 'drama',
    // genre: ['drama', 'biography'],
    description: '',
    rating: 8.8,
    reviewsount: 240,
    isFavorite: false,
  },
  {
    id: '3',
    name: 'What We Do in the Shadows',
    poster: '/img/what-we-do-in-the-shadows-poster.jpg',
    smallPoster: '/img/what-we-do-in-the-shadows.jpg',
    backgroundPoster: '/img/what-we-do-in-the-shadows-bg.jpg',
    colorPoster: '#ae967e',
    video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    previewVideo: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    director: 'Taika Waititi',
    cast: [
      'Jemaine Clement',
      'Taika Waititi',
      'Cori Gonzalez-Macuer',
      'Jonny Brugh',
      'Stu Rutherford',
      'Ben Fransham',
      'Jackie van Beek',
    ],
    released: 2014,
    duration: 85,
    genre: 'comedy',
    // genre: ['comedy', 'horror'],
    description: '',
    rating: 8.8,
    reviewsount: 240,
    isFavorite: false,
  },
  {
    id: '4',
    name: 'Revenant',
    poster: 'https://via.placeholder.com/273x410.png?text=Movie+Poster',
    smallPoster: '/img/revenant.jpg',
    backgroundPoster: 'https://via.placeholder.com/1300x552.png?text=Movie+background',
    colorPoster: '#a2bcc8',
    video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    previewVideo: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    director: '',
    cast: [
      '',
    ],
    released: 2015,
    duration: 156,
    genre: 'drama',
    // genre: ['drama', 'action'],
    description: '',
    rating: 8.8,
    reviewsount: 240,
    isFavorite: true,
  },
  {
    id: '5',
    name: 'Pulp Fiction',
    poster: '/img/pulp-fiction-poster.jpg',
    smallPoster: '/img/pulp-fiction.jpg',
    backgroundPoster: '/img/pulp-fiction-bg.jpg',
    colorPoster: '#96856c',
    video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    previewVideo: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    director: 'Quentin Tarantino',
    cast: [
      'John Travolta',
      'Uma Thurman',
      'Samuel L. Jackson',
      'Bruce Willis',
      'Tim Roth',
      'Amanda Plummer',
      'Laura Lovelace',
      'Phil LaMarr',
      'Frank Whaley',
      'Burr Steers',
    ],
    released: 1994,
    duration: 154,
    genre: 'drama',
    // genre: ['drama', 'comedy', 'crime'],
    description: '',
    rating: 8.8,
    reviewsount: 240,
    isFavorite: true,
  },
  {
    id: '6',
    name: 'Bohemian Rhapsody',
    poster: 'https://via.placeholder.com/273x410.png?text=Movie+Poster',
    smallPoster: '/img/bohemian-rhapsody.jpg',
    backgroundPoster: 'https://via.placeholder.com/1300x552.png?text=Movie+background',
    colorPoster: '#a2bcc8',
    video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    previewVideo: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    director: '',
    cast: [
      '',
    ],
    released: 2018,
    duration: 134,
    genre: 'drama',
    // genre: ['drama', 'biography', 'music'],
    description: '',
    rating: 8.8,
    reviewsount: 240,
    isFavorite: true,
  },
  {
    id: '7',
    name: 'The Grand Budapest Hotel',
    poster: '/img/the-grand-budapest-hotel-poster.jpg',
    smallPoster: '/img/the-grand-budapest-hotel.jpg',
    backgroundPoster: '/img/bg-the-grand-budapest-hotel.jpg',
    colorPoster: '#e1b0b2',
    video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    previewVideo: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    director: 'Wes Andreson',
    cast: [
      'Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan',
      'Tony Revoloru',
      'Tilda Swinton',
      'Tom Wilkinson',
      'Owen Wilkinson',
      'Adrien Brody',
      'Ralph Fiennes',
      'Jeff Goldblum',
    ],
    released: 2014,
    duration: 99,
    genre: 'adventure',
    // genre: ['adventure', 'comedy', 'crime'],
    description: '',
    rating: 8.8,
    reviewsount: 240,
    isFavorite: true,
  },
  {
    id: '8',
    name: 'Seven Years in Tibet',
    poster: '/img/seven-years-in-tibet-poster.jpg',
    smallPoster: '/img/seven-years-in-tibet.jpg',
    backgroundPoster: '/img/seven-years-in-tibet-bg.jpg',
    colorPoster: '#9f8072',
    video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    previewVideo: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    director: 'Jean-Jacques Annaud',
    cast: [
      'Brad Pitt',
      'David Thewlis',
      'BD Wong',
      'Mako',
      'Danny Denzongpa',
      'Victor Wong',
      'Ingeborga Dapkunaite',
      'Jamyang Jamtsho Wangchuk',
    ],
    released: 1997,
    duration: 136,
    genre: 'drama',
    // genre: ['drama', 'biography', 'music'],
    description: '',
    rating: 8.8,
    reviewsount: 240,
    isFavorite: true,
  },
];