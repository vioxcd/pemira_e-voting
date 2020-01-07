const initState = {
  mhs: '',
  err_code: null,
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
    case 'ERR_SUDAH_MEMILIH':
      console.log('ERR_SUDAH_MEMILIH')
      state.err_code = 'ERR_SUDAH_MEMILIH'
      return state
    default:
      return state
  }
}

export default publicReducers
