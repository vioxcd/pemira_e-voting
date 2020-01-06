const initState = {
  nim: '',
}

const publicReducers = (state = initState, action) => {
  switch (action.type) {
    case 'SCAN_KTM_SUCCESS':
      console.log('SCAN KTM SUCCESS')
      state.nim = action.nim
      return state
    case 'SCAN_KTM_GAGAL':
      console.log('SCAN KTM GAGAL')
      return state
    default:
      return state
  }
}

export default publicReducers
