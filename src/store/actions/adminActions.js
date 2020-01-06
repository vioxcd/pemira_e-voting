export const loginAdmin = (credentials, ownProps) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async calls to database
    const firestore = getFirestore()

    firestore
      .get({
        collection: 'admin',
        doc: 'admin',
      })
      .then(response => {
        const { username, password } = response.data()

        if (
          username !== credentials.username ||
          password !== credentials.password
        ) {
          throw new Error('Credentials didnt match')
        }

        dispatch({
          type: 'ADMIN_LOGIN_SUCCESSFUL',
          credentials,
        })

        ownProps.history.push('/admin')
      })
      .catch(err => {
        dispatch({
          type: 'ADMIN_LOGIN_FAILED',
          err,
        })
      })
  }
}

export const tambahKandidat = (nomorKandidat, kandidat) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async calls to database
    const firestore = getFirestore()
    firestore
      .set(
        { collection: 'calon', doc: `${nomorKandidat}` },
        {
          ...kandidat,
          perolehan_suara: 0,
          tanggal_pendaftaran: new Date(),
          foto_kampanye: 'https://picsum.photos/id/237/200/300',
        }
      )
      .then(() => {
        dispatch({
          type: 'SUCCESS_TAMBAH_KANDIDAT',
          kandidat,
        })
      })
      .catch(err => {
        dispatch({
          type: 'ERROR_TAMBAH_KANDIDAT',
          err,
        })
      })

    // firestore
    //   .collection('kandidat')
    //   .add({
    //     ...kandidat,
    //     no: 1,
    //     perolehan_suara: 0,
    //     tanggal_pendaftaran: new Date(),
    //     foto_kampanye: 'https://picsum.photos/id/237/200/300',
    //   })
    //   .then(() => {
    //     dispatch({
    //       type: 'TAMBAH_KANDIDAT',
    //       kandidat,
    //     })
    //   })
    //   .catch(err => {
    //     dispatch({
    //       type: 'ERROR_TAMBAH_KANDIDAT',
    //       err,
    //     })
    //   })
  }
}
