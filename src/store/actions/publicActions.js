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

        if (!data.memilih) {
          console.log('Belum Memilih')
          dispatch({
            type: 'SCAN_KTM_SUCCESS',
            data,
            nim,
          })
        } else {
          console.log('Sudah Memilih')
          dispatch({
            type: 'ERR_SUDAH_MEMILIH',
            err_code: 'ERR_SUDAH_MEMILIH',
          })
        }
      })
      .catch(err => {
        console.log(err)
        dispatch({
          type: 'SCAN_KTM_GAGAL',
          err,
        })
      })
  }
}
