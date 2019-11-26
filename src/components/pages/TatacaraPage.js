import React from 'react'
// import { connect } from 'react-redux'
// import { compose } from 'redux'
// import { firestoreConnect } from 'react-redux-firebase'
// import { scanKTM } from '../../store/actions/publicActions'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

function TatacaraPage() {
  const classes = useStyles()
  const state = [
    '1. Mahasiswa aktif UIN Syarif Hidayatullah Jakarta',
    '2. Memiliki Kartu Tanda Mahasiswa (KTM)',
    '3. etc etc etc',
  ]
  // state = {
  //   nama: '',
  //   nim: '',
  // }

  // handleChange = e => {
  //   this.setState({
  //     [e.target.id]: e.target.value,
  //   })
  // }

  // handleSubmit = e => {
  //   e.preventDefault()

  //   this.props.scanKTM(this.state)
  // }

  // const { tatacara } = this.props
  // {tatacara &&
  //   tatacara.map(baris => (
  //     <p key={baris.id}>
  //       {baris.id} - {baris.teks}
  //     </p>
  //   ))}
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Tata Cara Pemilihan Umum Raya
        </Typography>
        <Typography component="h1" variant="h5">
          UIN Jakarta 2019
        </Typography>
        <Box m={4} textAlign="left" width="1">
          {state.map(i => (
            <Typography component="h1" variant="subtitle2">
              {i}
            </Typography>
          ))}
        </Box>
        <Link to="/tatacara">
          <Button
            className={classes.submit}
            variant="contained"
            color="primary"
          >
            Scan KTM
          </Button>
        </Link>
      </div>
    </Container>
  )
}

export default TatacaraPage

// const mapStateToProps = state => {
//   return {
//     tatacara: state.firestore.ordered.tatacara,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     scanKTM: credentials => dispatch(scanKTM(credentials)),
//   }
// }

// export default compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   firestoreConnect([{ collection: 'tatacara' }])
// )(TatacaraPage)
