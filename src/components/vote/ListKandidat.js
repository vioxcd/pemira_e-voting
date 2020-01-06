import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Box from '@material-ui/core/Box'

export default function ListKandidat() {
  const [value, setValue] = React.useState('')

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Universitas
      </Typography>
      <Grid container spacing={3}>
        <RadioGroup
          aria-label="position"
          name="position"
          value={value}
          onChange={handleChange}
          row
        >
          <Grid item xs={12} sm={6} textAlign="center">
            <Box textAlign="center">
              <img src="/img/krabs.png" alt="Kandidat 1" width="70%" />
              <FormControl component="fieldset">
                <FormControlLabel
                  value="kandidat1"
                  control={<Radio color="primary" />}
                  label="Kandidat 1"
                  labelPlacement="bottom"
                />
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} textAlign="center">
            <Box textAlign="center">
              <img src="/img/plankton.png" alt="Kandidat 1" width="70%" />
              <FormControl component="fieldset">
                <FormControlLabel
                  value="kandidat2"
                  control={<Radio color="primary" />}
                  label="Kandidat 2"
                  labelPlacement="bottom"
                />
              </FormControl>
            </Box>
          </Grid>
        </RadioGroup>
      </Grid>
    </>
  )
}
