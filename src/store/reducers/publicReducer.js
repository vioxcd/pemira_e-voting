const initState = {
  mhs: '',
}

const publicReducers = (state = initState, action) => {
  switch (action.type) {
    case 'SCAN_KTM_SUCCESS':
      console.log('SCAN KTM SUCCESS')
      state.mhs = action.data
      state.mhs['nim'] = action.nim
      return state
    case 'SCAN_KTM_GAGAL':
      console.log('SCAN KTM GAGAL')
      console.log(action.err)
      return state
    default:
      return state
  }
}

export default publicReducers
