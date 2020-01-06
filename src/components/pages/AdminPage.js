import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

// import { compose } from 'redux'
import { connect, useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { tambahKandidat } from '../../store/actions/adminActions'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const AdminPage = props => {
  const classes = useStyles()

  useFirestoreConnect([{ collection: 'calon' }])
  const calon = useSelector(state => {
    return state.firestore.ordered.calon
  })

  const [namaCalon1, setNamaCalon1] = useState(null)
  const [namaCalon2, setNamaCalon2] = useState(null)
  const [nimCalon1, setNimCalon1] = useState(null)
  const [nimCalon2, setNimCalon2] = useState(null)
  const [foto, setFoto] = useState(null)

  const handleTambahKandidat = e => {
    e.preventDefault()
    console.log(`c1: ${namaCalon1} ${nimCalon1}`)
    console.log(`c2: ${namaCalon2} ${nimCalon2}`)
    // props.tambahKandidat(kandidat)
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Dashboard Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xl">
        <CssBaseline />
        <section>
          <h1>Kandidat Terdaftar</h1>
          <form onSubmit={handleTambahKandidat}>
            <div>
              <input
                type="text"
                id="nama_calon_1"
                onChange={e => setNamaCalon1(e.target.value)}
              />
              <label htmlFor="nama_calon_1">Nama Calon 1</label>
            </div>
            <div>
              <input
                type="text"
                id="nim_calon_1"
                onChange={e => setNimCalon1(e.target.value)}
              />
              <label htmlFor="nim_calon_1">NIM Calon 1</label>
            </div>
            <div>
              <input
                type="text"
                id="nama_calon_2"
                onChange={e => setNamaCalon2(e.target.value)}
              />
              <label htmlFor="nama_calon_2">Nama Calon 2</label>
            </div>
            <div>
              <input
                type="text"
                id="nim_calon_2"
                onChange={e => setNimCalon2(e.target.value)}
              />
              <label htmlFor="nim_calon_2">NIM Calon 2</label>
            </div>
            <div>
              <button>Create</button>
            </div>
          </form>
        </section>
        <section>
          {calon &&
            calon.map(c => (
              <div key={c.id}>
                <h4>{c.id}</h4>
                <p>
                  {c.calon_1.nama}, {c.calon_1.nim}
                </p>
                <p>
                  {c.calon_2.nama}, {c.calon_2.nim}
                </p>
              </div>
            ))}
        </section>
      </Container>
    </>
  )
}

// export default AdminPage

// const mapStateToProps = state => {
//   return {
//     kandidat: state.firestore.ordered.calon,
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    tambahKandidat: kandidat => dispatch(tambahKandidat(kandidat)),
  }
}

export default connect(null, mapDispatchToProps)(AdminPage)

// export default compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   firestoreConnect([{ collection: 'calon' }])
// )(AdminPage)
