const initState = {}

const adminReducers = (state = initState, action) => {
  switch (action.type) {
    case 'TAMBAH_KANDIDAT':
      console.log('Tambahan Kandidat', action.kandidat)
      return state
    case 'ERROR_TAMBAH_KANDIDAT':
      console.log('Error Tambah Kandidat', action.err)
      return state
    case 'ADMIN_LOGIN_SUCCESSFUL':
      console.log('Admin login', action.credentials)
      return state
    case 'ADMIN_LOGIN_FAILED':
      console.log('Error login admin', action.err)
      return state
    default:
      return state
  }
}

export default adminReducers
