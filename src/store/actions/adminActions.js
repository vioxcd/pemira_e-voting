export const login = credentials => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async calls to database
    dispatch({
      type: 'LOGIN',
      credentials,
    })
  }
}

export const tambahKandidat = kandidat => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async calls to database
    const firestore = getFirestore()
    firestore
      .collection('kandidat')
      .add({
        ...kandidat,
        no: 1,
        perolehan_suara: 0,
        tanggal_pendaftaran: new Date(),
        foto_kampanye: 'https://picsum.photos/id/237/200/300',
      })
      .then(() => {
        dispatch({
          type: 'TAMBAH_KANDIDAT',
          kandidat,
        })
      })
      .catch(err => {
        dispatch({
          type: 'ERROR_TAMBAH_KANDIDAT',
          err,
        })
      })
  }
}
