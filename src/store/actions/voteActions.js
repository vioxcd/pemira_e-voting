// COBA POST UNIV
export const submitVote = (pilihan, nim) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async calls to database
    const firestore = getFirestore()

    // Mengubah Hak Pilih Mahasiswa
    firestore
      .update(
        {
          collection: 'mahasiswa',
          doc: nim,
        },
        {
          memilih: true,
        }
      )
      .then(() => {
        dispatch({
          type: 'VOTE_SUBMIT_SUCCESS',
        })
      })
      .catch(err => {
        dispatch({
          type: 'VOTE_SUBMIT_FAILED',
          err,
        })
      })

    // Menambah Perolehan Suara Sementara
    const firebase = getFirebase()
    const ref = firebase.ref(`calon/${pilihan}`)
    console.log(ref)

    // const ref = firebase.database().ref(`calon/${pilihan}`)
    // firestore
    //   .runTransaction(t => {
    //     return t.get(ref).then(doc => {
    //       const perolehanTerkini = doc.data().perolehan_suara + 1
    //       t.update(ref, { perolehan_suara: perolehanTerkini })
    //     })
    //   })
    //   .then(result => {
    //     console.log('Transaction success!')
    //     dispatch({
    //       type: 'TRANSACTION_SUCCESS',
    //     })
    //   })
    //   .catch(err => {
    //     console.log('Transaction failure:', err)
    //     dispatch({
    //       type: 'TRANSACTION_FAILURE',
    //     })
    //   })
  }
}
