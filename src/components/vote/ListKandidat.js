import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

export default class ListKandidat extends Component {
  render() {
    const { listKandidat, pilihan, setPilihan } = this.props
    const pilihanAnda =
      pilihan && listKandidat.filter(kandidat => kandidat.id === pilihan)

    const kandidat = listKandidat && (
      <Grid container spacing={3}>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="kandidat"
            name="kandidat"
            value={pilihan}
            onChange={e => setPilihan(e.target.value)}
            row
          >
            {listKandidat.map(kandidat => (
              <Grid item xs={12} sm={6} key={kandidat.id}>
                <Box textAlign="center">
                  <img
                    src={kandidat.foto_kampanye}
                    alt={`${kandidat.calon_1_nama} - ${kandidat.calon_2_nama}`}
                    width="70%"
                  />
                  <FormControlLabel
                    value={kandidat.id}
                    control={<Radio color="primary" />}
                    label={`(${kandidat.nomor_urut}) ${kandidat.calon_1_nama} - ${kandidat.calon_2_nama}`}
                    labelPlacement="bottom"
                  />
                </Box>
              </Grid>
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
    )
    return (
      <>
        <Typography variant="h5" gutterBottom>
          Universitas
        </Typography>
        <Typography variant="h6" style={{ marginBottom: '2rem' }}>
          Pilihan Anda:{' '}
          {pilihanAnda
            ? `${pilihanAnda[0].calon_1_nama} - ${pilihanAnda[0].calon_2_nama}`
            : '-'}
        </Typography>
        {kandidat}
        {!listKandidat && (
          <Container component="main" maxWidth="xl">
            <Box display="flex" justifyContent="center" mt={2}>
              <CircularProgress />
            </Box>
          </Container>
        )}
      </>
    )
  }
}
