import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import { makeStyles } from '@material-ui/core/styles'

import uniqid from 'uniqid'
import { connect } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { tambahKandidat } from '../../store/actions/adminActions'

const useStyles = makeStyles(theme => ({
  textField: {
    margin: theme.spacing(3),
  },
}))

function ModalTambahKandidat(props) {
  const firebase = useFirebase()
  const classes = useStyles()

  const nomorKandidat = props.nomorKandidat

  const [open, setOpen] = useState(false)

  const [namaCalon1, setNamaCalon1] = useState(null)
  const [namaCalon2, setNamaCalon2] = useState(null)
  const [nimCalon1, setNIMCalon1] = useState(null)
  const [nimCalon2, setNIMCalon2] = useState(null)
  const [foto, setFoto] = useState(null)

  const handleTambahKandidat = e => {
    e.preventDefault()
    handleClose()

    console.log(`c1: ${namaCalon1} ${nimCalon1}`)
    console.log(`c2: ${namaCalon2} ${nimCalon2}`)
    console.log(`foto: ${foto}`)

    const tambahKandidatCallback = namaFile => {
      const kandidat = {
        calon_1_nama: namaCalon1,
        calon_1_nim: nimCalon1,
        calon_2_nama: namaCalon2,
        calon_2_nim: nimCalon2,
        nomor_urut: nomorKandidat,
        foto_kampanye: namaFile,
      }

      props.tambahKandidat(kandidat)
    }

    handleFileUpload(foto, tambahKandidatCallback)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = foto => {
    setOpen(false)
  }

  const handleFileUpload = (foto, cb) => {
    // Create the file metadata
    const metadata = {
      contentType: foto.type,
    }

    const storageRef = firebase.storage().ref()

    const uploadTask = storageRef
      .child('images/' + uniqid())
      .put(foto, metadata)

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      function(snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log('Upload is ' + progress + '% done')
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused')
            break
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running')
            break
          default:
            console.log('Default')
            break
        }
      },
      function(error) {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break
          case 'storage/canceled':
            // User canceled the upload
            break
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break
          default:
            console.log('Uploaded')
            break
        }
      },
      function() {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log('File available at', downloadURL)
          cb(downloadURL)
        })
      }
    )
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Tambah Kandidat
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Tambah Kandidat</DialogTitle>
        <DialogContent>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <TextField
                className={classes.textField}
                autoFocus
                margin="dense"
                id="nama_calon_1"
                label="Nama Calon 1"
                type="text"
                onChange={e => setNamaCalon1(e.target.value)}
              />
              <TextField
                className={classes.textField}
                margin="dense"
                id="nim_calon_1"
                label="NIM Calon 1"
                type="text"
                onChange={e => setNIMCalon1(e.target.value)}
              />
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <TextField
                className={classes.textField}
                margin="dense"
                id="nama_calon_2"
                label="Nama Calon 2"
                type="text"
                onChange={e => setNamaCalon2(e.target.value)}
              />
              <TextField
                className={classes.textField}
                margin="dense"
                id="nim_calon_2"
                label="NIM Calon 2"
                type="text"
                onChange={e => setNIMCalon2(e.target.value)}
              />
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <input
                id="upload-foto"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={e => setFoto(e.target.files[0])}
              />
              <label htmlFor="upload-foto" className={classes.textField}>
                <Button variant="contained" color="primary" component="span">
                  Upload Foto Kandidat{' '}
                  <PhotoCamera style={{ marginLeft: '0.5rem' }} />
                </Button>
              </label>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleTambahKandidat} color="primary">
            Tambah
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    tambahKandidat: kandidat => dispatch(tambahKandidat(kandidat)),
  }
}

export default connect(null, mapDispatchToProps)(ModalTambahKandidat)
