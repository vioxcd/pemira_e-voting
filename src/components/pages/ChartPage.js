import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'

import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

class ChartPage extends Component {
  render() {
    const { hasil } = this.props
    const data =
      hasil &&
      hasil.map(calon => {
        const pasangan = `${calon.calon_1_nama} - ${calon.calon_2_nama}`
        const perolehan_suara = calon.perolehan_suara
        return { pasangan, perolehan_suara }
      })

    console.log(data)
    /**
     * Render Chart
     */
    const renderBarChart = (
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="pasangan" />
        <YAxis />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar
          type="monotone"
          dataKey="perolehan_suara"
          barSize={30}
          fill="#8884d8"
        />
      </BarChart>
    )

    return (
      <Container component="main" maxWidth="md" style={{ marginTop: '100px' }}>
        <CssBaseline />
        <Typography component="h1" variant="h4" align="center">
          Hasil Quick Count Pemilihan Umum Raya
        </Typography>
        <Typography component="h1" variant="h5" align="center">
          UIN Jakarta 2019
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
          {data ? renderBarChart : <CircularProgress />}
        </Box>
      </Container>
    )
  }
}

const mapStateToprops = state => {
  return {
    hasil: state.firestore.ordered.calon,
  }
}

export default compose(
  connect(mapStateToprops),
  firestoreConnect([{ collection: 'calon' }])
)(ChartPage)
