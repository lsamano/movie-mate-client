const domain = "http://localhost:3000"
const version = "/api/v1"

const addToReducer = (name, payload) => ({
  type: 'ADD_TO_REDUCER',
  name,
  payload
})

export const userPostFetch = user => {
  return dispatch => {
    return fetch(`${domain}${version}/users`, {
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

export const userLoginFetch = user => {
  return dispatch => {
    return fetch(`${domain}${version}/login`, {
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
      return fetch(`${domain}${version}/profile`, {
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
    return fetch(`${domain}${version}/movies`, {
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
          // JWT is invalid, have it removed
          localStorage.removeItem("token")
        } else {
          dispatch(addMovies(data))
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

export const movieShowFetch = id => {
  return dispatch => {
    return fetch(`${domain}${version}/movies/${id}`)
    .then(res => res.json())
    .then(data => {
      dispatch(addToReducer("movieShow", data.table))
    })
  }
}

export const loadUser = id => {
  return dispatch => {
    return fetch(`${domain}${version}/users/${id}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log("usershow", data.user);
      dispatch(addToReducer("userShow", data.user))
    })
  }
}
