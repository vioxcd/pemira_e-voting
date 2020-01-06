export const scanKTM = nim => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async calls to database
    const firestore = getFirestore()
    firestore
      .get({
        collection: 'mahasiswa',
        doc: nim,
      })
      .then(response => {
        const data = response.data()
        dispatch({
          type: 'SCAN_KTM_SUCCESS',
          data,
          nim,
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
