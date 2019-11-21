export const scanKTM = credentials => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async calls to database
    const firestore = getFirestore()
    firestore
      .get({
        collection: 'mahasiswa',
        where: [
          ['username', '==', credentials.nama],
          ['password', '==', credentials.nim],
        ],
      })
      .then(() => {
        dispatch({
          type: 'SCAN_KTM_SUCCESS',
          credentials,
        })
      })
      .catch(err => {
        dispatch({
          type: 'SCAN_KTM_GAGAL',
          err,
        })
      })
  }
}
