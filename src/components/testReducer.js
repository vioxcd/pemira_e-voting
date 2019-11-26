const initState = {}

const testReducers = (state = initState, action) => {
  switch (action.type) {
    case 'TESTING':
      console.log('Dispatch Received')
      return state
    default:
      return state
  }
}
