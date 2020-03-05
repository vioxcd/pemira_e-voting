import publicReducer from './publicReducer'
import adminReducer from './adminReducer'
import voteReducer from './voteReducer'
import testReducer from '../../components/testReducer'
import { firestoreReducer } from 'redux-firestore'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  public: publicReducer,
  admin: adminReducer,
  vote: voteReducer,
  test: testReducer,
})

export default rootReducer
