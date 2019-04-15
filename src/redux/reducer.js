const initialState = {
  currentUser: {},
  movies: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TO_REDUCER':
        return {...state, [action.name]: action.payload}
      case 'LOGOUT_USER':
        return {...state, currentUser: {} }
      default:
        return state;
    }
  }
