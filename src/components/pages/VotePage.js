import React, { Component } from 'react'
// import { compose } from 'redux'
// import { connect } from 'react-redux'
// import { firestoreConnect } from 'react-redux-firebase'
// import { submitVote } from '../../store/actions/voteActions'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import ListKandidat from '../vote/ListKandidat'

const useStyles = makeStyles(theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}))

const steps = ['Universitas', 'Fakultas', 'Himpunan Jurusan']

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ListKandidat />
    case 1:
      return <ListKandidat />
    case 2:
      return <ListKandidat />
    default:
      throw new Error('Unknown step')
  }
}

function VotePage() {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Pilih Kandidat
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                {/* Bagian Sukses */}
                <Typography variant="h5" gutterBottom>
                  Sukses. Terima Kasih telah menyalurkan suara Anda
                </Typography>
                <Link to="/publik">
                  <Typography variant="subtitle1">Lihat Statistik</Typography>
                </Link>
              </>
            ) : (
              <>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Selesai' : 'Lanjutkan'}
                  </Button>
                </div>
              </>
            )}
          </>
        </Paper>
      </main>
    </>
  )
}

export default VotePage

// const mapStateToProps = state => {
//   return {
//     kandidat: state.firestore.ordered.kandidat,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     submitVote: votes => dispatch(submitVote(votes)),
//   }
// }

// export default connect(null, mapDispatchToProps)(VotePage)

// export default compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   firestoreConnect([{ collection: 'kandidat' }])
// )(VotePage)
