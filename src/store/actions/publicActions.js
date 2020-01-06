export const scanKTM = nim => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log(typeof(nim));
    
    // Make async calls to database
    const firestore = getFirestore()
    firestore
      .get({
        collection: 'mahasiswa',
        where: ['nim', '==', nim]
      })
      .then(() => {
        dispatch({
          type: 'SCAN_KTM_SUCCESS',
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
