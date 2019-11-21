import publicReducer from './publicReducer'
import adminReducer from './adminReducer'
import voteReducer from './voteReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  public: publicReducer,
  admin: adminReducer,
  vote: voteReducer,
})

export default rootReducer
