// export const submitVote = votes => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     // Make async calls to database
//     const firestore = getFirestore()
//     firestore
//       .update({
//         collection: 'kandidat',
//         where: [
//           ['username', '==', credentials.nama],
//           ['password', '==', credentials.nim],
//         ],
//       })
//       .then(() => {
//         dispatch({
//           type: 'SCAN_KTM_SUCCESS',
//           votes,
//         })
//       })
//       .catch(err => {
//         dispatch({
//           type: 'SCAN_KTM_GAGAL',
//           err,
//         })
//       })
//   }
// }
