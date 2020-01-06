// COBA POST UNIV
export const submitVote = (pilihan, nim, vote) => {
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
    firestore
      .update(
        {
          collection: 'calon',
          doc: pilihan,
        },
        {
          perolehan_suara: vote,
        }
      )
      .then(() => {
        console.log('Transaction success!')
        dispatch({
          type: 'TRANSACTION_SUCCESS',
          pilihan,
          vote,
        })
      })
      .catch(err => {
        console.log('Transaction failure:', err)
        dispatch({
          type: 'TRANSACTION_FAILURE',
        })
      })
  }
}
