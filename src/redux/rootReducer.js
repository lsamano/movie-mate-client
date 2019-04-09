import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import reducer from './reducer'

export default (history) => combineReducers({
  reducer: reducer,
  router: connectRouter(history)
})
