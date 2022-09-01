import {Comment} from '../types/comment';

type Comments = {
  [propertyName: number]: Comment[] | [],
}

export const comments: Comments = {
  1: [],
  2: [{
    id: 1,
    user: {
      id: 15,
      name: 'Kendall'
    },
    rating: 5.1,
    comment: 'Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.',
    date: '2022-06-09T10:02:05.085Z'
  },
  {
    id: 2,
    user: {
      id: 12,
      name: 'Isaac'
    },
    rating: 1.7,
    comment: 'Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.',
    date: '2022-06-03T10:02:05.085Z'
  }],
  3: [{
    id: 1,
    user: {
      id: 12,
      name: 'Isaac'
    },
    rating: 9.9,
    comment: 'I personally found this movie to be boring. Definitely one of the most boring movies I\'ve ever seen.',
    date: '2022-06-10T10:02:05.085Z'
  },{
    id: 2,
    user: {
      id: 14,
      name: 'Corey'
    },
    rating: 7.7,
    comment: 'I personally found this movie to be boring. Definitely one of the most boring movies I\'ve ever seen.',
    date: '2022-06-06T10:02:05.085Z'
  }],
  4: [{
    id: 1,
    user: {
      id: 17,
      name: 'Emely'
    },
    rating: 9.9,
    comment: 'Unfortunately we don\'t have a reliable way to tell the true ratings of a movie.',
    date: '2022-06-10T10:02:05.085Z'
  },{
    id: 2,
    user: {
      id: 16,
      name: 'Mollie'
    },
    rating: 9.3,
    comment: 'The editing is a mess, and the transitions of the plot or characters are rather strange. There is no narrative focus and the storytelling is unbalanced. I cannot really understand why such a bad movie received an overwhelming approval from the critics. ',
    date: '2022-06-05T10:02:05.085Z'
  },{
    id: 3,
    user: {
      id: 15,
      name: 'Kendall'
    },
    rating: 2.5,
    comment: 'This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.',
    date: '2022-06-16T10:02:05.085Z'
  }],
  5: [],
  6: [{
    id: 1,
    user: {
      id: 15,
      name: 'Kendall'
    },
    rating: 2.8,
    comment: 'A movie that will take you to another world full of emotions.',
    date: '2022-06-21T10:02:05.085Z'
  }],
  7: [{
    id: 1,
    user: {
      id: 15,
      name: 'Kendall'
    },
    rating: 8.8,
    comment: 'This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.',
    date: '2022-06-01T10:02:05.085Z'
  }],
};
