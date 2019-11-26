// COBA POST UNIV
export const submitVote = voteUniv => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async calls to database
    const firestore = getFirestore()
    const kandidatData = firestore.get({
      collection: 'kandidat',
      where: ['id', '==', '82waKcSKWgOT2vJCFQZw'],
    })

    console.log(kandidatData)

    // votes.map(vote => {
    //   firestore
    //     .get({
    //       collection: 'kandidat',
    //       where: [['id', '==', vote.kandidat_id]],
    //     })
    //     .then(() => {
    //       dispatch({
    //         type: 'VOTE_SUBMIT_SUCCESS',
    //         votes,
    //       })
    //     })
    //     .catch(err => {
    //       dispatch({
    //         type: 'VOTE_SUBMIT_FAILED',
    //         err,
    //       })
    //     })
    // })
  }
}
