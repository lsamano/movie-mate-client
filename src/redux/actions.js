const addToReducer = (name, payload) => ({
  type: 'ADD_TO_REDUCER',
  name,
  payload
})

export const userPostFetch = user => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          // Here you should have logic to handle invalid creation of a user.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error with creating the user, i.e. invalid username
        } else {
          console.log(data);
          localStorage.setItem("token", data.jwt);
          // dispatch(loginUser(data.user))
          dispatch(addToReducer("currentUser", data.user))
        }
      })
  }
}

// const loginUser = userObj => ({
//     type: 'LOGIN_USER',
//     payload: userObj
// })

export const userLoginFetch = user => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          // Here you should have logic to handle invalid login credentials.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error
        } else {
          localStorage.setItem("token", data.jwt);
          // dispatch(loginUser(data.user))
          dispatch(addToReducer("currentUser", data.user))
        }
      })
  }
}

export const getProfileFetch = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            // An error will occur if the JWT token is invalid.
            // If this happens, you may want to remove it.
            localStorage.removeItem("token")
          } else {
            // dispatch(loginUser(data.user))
            dispatch(addToReducer("currentUser", data.user))
          }
        })
    }
  }
}

export const moviesIndexFetch = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/movies", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          // An error will occur if the JWT token is invalid.
          // If this happens, you may want to remove it.
        } else {
          let {discover, nowPlaying, popular, topRated, upcoming} = data
          discover = discover.map(e => e.table)
          nowPlaying = nowPlaying.map(e => e.table)
          popular = popular.map(e => e.table)
          topRated = topRated.map(e => e.table)
          upcoming = upcoming.map(e => e.table)
          const movies = {discover, nowPlaying, popular, topRated, upcoming}
          dispatch(addMovies(movies))
        }
      })
  }
}

const addMovies = movies => ({
  type: 'ADD_MOVIES',
  movies
})

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})
