export const handleTest = () => {
  return (dispatch, getState, { useFirebase, getFirestore }) => {
    // const firestore = getFirestore()
    // Realtime database
    // const firebase = useFirebase()
    // firebase
    //   .ref('users/' + 1)
    //   .set({
    //     username: 'Uchan',
    //   })
    //   .then(() => {
    //     dispatch({
    //       type: 'TESTING',
    //     })
    //   })
    // Alur tambah kandidat
    // 1. Get data fakultas
    // 2. Update data fakultas.calon + 1
    // 3. Set data kandidat dgn key "Nama Fakultas"
    // Update jumlah calon
    // const calon = 2
    // firestore.update(
    //   { collection: 'fakultas', doc: 'Sains dan Teknologi' },
    //   { calon: calon }
    // )
    // Jika Kandidat 0, SET DATA
    // firestore
    //   .set(
    //     { collection: 'kandidat', doc: 'FST' },
    //     {
    //       kandidat: [
    //         {
    //           calon_1: {
    //             nama: 'Ribbialif Wiga Fathullah',
    //             nim: '11160960000008',
    //           },
    //           calon_2: {
    //             nama: 'Fadjri Maarif',
    //             nim: '11160950000006',
    //           },
    //         },
    //       ],
    //     }
    //   )
    //   .then(() => {
    //     dispatch({
    //       type: 'TESTING',
    //     })
    //   })
    // Jika Kandidat 0, UPDATE DATA
    // const ref = firestore.doc('kandidat/Sains dan Teknologi')
    // firestore
    //   .runTransaction(t => {
    //     return t.get(ref).then(doc => {
    //       const newKandidat = doc.data().kandidat
    //       newKandidat.push({
    //         calon_1: {
    //           nama: 'Muhammad Alviand Fredonovalle',
    //           nim: '11180910000062',
    //         },
    //         calon_2: {
    //           nama: 'Ibrahim Mubarok',
    //           nim: '11180910000058',
    //         },
    //       })
    //       t.update(ref, { kandidat: newKandidat })
    //     })
    //   })
    //   .then(() => {
    //     dispatch({
    //       type: 'TESTING',
    //     })
    //   })
  }
}
