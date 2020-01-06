import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { scanKTM } from '../../store/actions/publicActions'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import CameraAltIcon from '@material-ui/icons/CameraAlt'
import Box from '@material-ui/core/Box'
import { Link, Redirect } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  input: {
    display: 'none',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

function TatacaraPage() {
  const classes = useStyles()
  const [redirect, setRedirect] = React.useState(false)
  const state = [
    '1. Mahasiswa aktif UIN Syarif Hidayatullah Jakarta',
    '2. Memiliki Kartu Tanda Mahasiswa (KTM)',
  ]

  const testVision = data => {
    const bearer =
      'ya29.c.KmO4B16bEvvRYvFmpnN3CjeKAzqKHBJYRi5qeTA-OY-fm0XXGzUyjta1adfKWJyUGLc2H34CoffdXKZpIaL85xslVsZ5ydocHoaoOfAoDsQpBId5ctIg_H6n0VRpytvHG3obaYI'
    const url = `https://vision.googleapis.com/v1p4beta1/images:annotate`
    const requestBody = {
      requests: [
        {
          image: {
            content: data.slice(23),
          },
          features: [
            {
              type: 'TEXT_DETECTION',
            },
          ],
        },
      ],
    }

    fetch(url, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${bearer}`,
      }),
      body: JSON.stringify(requestBody),
    })
      .then(response => response.json())
      .then(json => {
        console.log(json.responses[0].fullTextAnnotation.text)
        const fullText = json.responses[0].fullTextAnnotation.text
        const data = fullText.split('\n')

        for (const x of data) {
          if (!isNaN(x)) {
            console.log(x)
          }
        }
      })
      .then(() => {
        setRedirect(true)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const encodeImageFileAsURL = e => {
    var file = e.target.files[0]
    var reader = new FileReader()
    reader.onloadend = function() {
      testVision(reader.result)
    }
    reader.readAsDataURL(file)
  }

  if (redirect) {
    return <Redirect to="/vote" />
  }

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          Tata Cara Pemilihan Umum Raya
        </Typography>
        <Typography component="h1" variant="h5" align="center">
          UIN Jakarta 2019
        </Typography>
        <Box m={4} textAlign="left" width="1">
          {state.map(i => (
            <Typography component="h1" variant="subtitle2">
              {i}
            </Typography>
          ))}
        </Box>
        <input
          type="file"
          accept="image/*"
          capture
          onChange={encodeImageFileAsURL}
          className={classes.input}
          id="upload-ktm"
        />
        <label htmlFor="upload-ktm">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <Button variant="contained" color="primary" component="span">
              Scan KTM
              <CameraAltIcon style={{ marginLeft: 10 }} />
            </Button>
          </IconButton>
        </label>
      </div>
    </Container>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    scanKTM: credentials => dispatch(scanKTM(credentials)),
  }
}

export default connect(null, mapDispatchToProps)(TatacaraPage)
