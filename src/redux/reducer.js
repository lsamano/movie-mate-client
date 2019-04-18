const initialState = {
  currentUser: {},
  movieShow: {},
  userShow: {},
  discover: [],
  nowPlaying: [],
  popular: [],
  topRated: [],
  upcoming: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TO_REDUCER':
        return {...state, [action.name]: action.payload}
      case 'ADD_MOVIES':
        const {discover, nowPlaying, popular, topRated, upcoming} = action.movies
        return {...state, discover, nowPlaying, popular, topRated, upcoming}
      case 'LOGOUT_USER':
        return {...state, currentUser: {} }
      default:
        return state;
    }
  }
