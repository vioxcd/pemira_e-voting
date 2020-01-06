const initState = {}

const voteReducers = (state = initState, action) => {
  switch (action.type) {
    case 'VOTE_SUBMIT_SUCCESS':
      console.log('VOTE SUBMIT SUCCESS')
      return state
    case 'VOTE_SUBMIT_FAILED':
      console.log('VOTE SUBMIT FAILED')
      return state
    case 'TRANSACTION_SUCCESS':
      state[action.pilihan] = action.vote
      return state
    case 'TRANSACTION_FAILURE':
      return state
    default:
      return state
  }
}

export default voteReducers
