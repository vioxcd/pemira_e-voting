import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'

const columns = [
  { id: 'nomor', label: 'No', minWidth: 50 },
  { id: 'calon_1_nama', label: 'Nama Calon 1', minWidth: 170 },
  {
    id: 'calon_1_nim',
    label: 'NIM Calon 1',
    minWidth: 170,
  },
  {
    id: 'calon_2_nama',
    label: 'Nama Calon 2',
    minWidth: 170,
  },
  {
    id: 'calon_2_nim',
    label: 'NIM Calon 2',
    minWidth: 170,
  },
  {
    id: 'foto',
    label: 'Foto Kandidat',
    minWidth: 170,
  },
]

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
})

export default function TableDisplay({ listKandidat }) {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {listKandidat
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(kandidat => {
                console.log(kandidat)
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={kandidat.id}
                  >
                    <TableCell>{kandidat.id}</TableCell>
                    {columns.map(column => {
                      if (column.id === 'nomor') return

                      const value = kandidat[column.id]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={listKandidat.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
