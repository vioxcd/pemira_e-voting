const initState = {
  perolehan_suara: 0,
}

const voteReducers = (state = initState, action) => {
  switch (action.type) {
    case 'VOTE_SUBMIT_SUCCESS':
      console.log('VOTE SUBMIT SUCCESS')
      return state
    case 'VOTE_SUBMIT_FAILED':
      console.log('VOTE SUBMIT FAILED')
      return state
    case 'TRANSACTION_SUCCESS':
      state.perolehan_suara += 1
      return state
    case 'TRANSACTION_FAILURE':
      return state
    default:
      return state
  }
}

export default voteReducers
