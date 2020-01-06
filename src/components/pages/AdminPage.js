import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

// import { compose } from 'redux'
import { connect, useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { tambahKandidat } from '../../store/actions/adminActions'

import TableDisplay from '../admin/TableDisplay'
import ModalTambahKandidat from '../admin/ModalTambahKandidat'

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
  const listKandidat = useSelector(state => {
    return state.firestore.ordered.calon
  })

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
          <ModalTambahKandidat />
        </section>
        <Box display="flex" justifyContent="center" mt={2}>
          {listKandidat ? (
            <TableDisplay listKandidat={listKandidat} />
          ) : (
            <CircularProgress />
          )}
        </Box>
      </Container>
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    tambahKandidat: kandidat => dispatch(tambahKandidat(kandidat)),
  }
}

export default connect(null, mapDispatchToProps)(AdminPage)
