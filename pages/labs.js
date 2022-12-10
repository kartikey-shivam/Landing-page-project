import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import data from "./api/data"

const labs = () => {
  return (
    <TableContainer component={Paper} style={{ padding: "10px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Sl No.</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Laboratory Name</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Location</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Faculty-in-charge</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Facilities</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.labs.map((lab) => {
            return (
              <TableRow key={lab.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {lab.id}
                </TableCell>
                <TableCell>{lab.laboratory_name}</TableCell>
                <TableCell>{lab.location}</TableCell>
                <TableCell>{lab.faculty_in_charge}</TableCell>
                <TableCell>{lab.facilities}</TableCell>
              </TableRow>
            )
          })}
          {/* {rows.map((row) => (
            <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default labs
