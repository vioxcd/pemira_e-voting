const initState = {}

const adminReducers = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log('Admin login')
      return state
    case 'TAMBAH_KANDIDAT':
      console.log('Tambahan Kandidat', action.kandidat)
      return state
    case 'ERROR_TAMBAH_KANDIDAT':
      console.log('Error Tambah Kandidat', action.err)
      return state
    default:
      return state
  }
}

export default adminReducers
