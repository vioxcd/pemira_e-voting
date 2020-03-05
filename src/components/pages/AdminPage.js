import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

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
    return state.firestore.ordered.calon || null
  })

  const nomorKandidat = listKandidat ? listKandidat.length + 1 : 1

  const handleLogout = () => {
    props.history.push('/login')
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Dashboard Admin
          </Typography>
          <Button onClick={handleLogout} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xl">
        <CssBaseline />
        <section>
          <h1>Kandidat Terdaftar</h1>
          <ModalTambahKandidat nomorKandidat={nomorKandidat} />
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

export default AdminPage
