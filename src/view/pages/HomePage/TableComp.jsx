import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function TableComp() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead sx={{ height: "37px", borderRadius: "650px" }}>
          <TableRow>
            <StyledTableCell className="disable-head"></StyledTableCell>
            <StyledTableCell className="disable-head"></StyledTableCell>
            <StyledTableCell
              className="first-header visible-head"
              align="right"
            >
              Fat
            </StyledTableCell>
            <StyledTableCell className="visible-head" align="right">
              Carbs
            </StyledTableCell>
            <StyledTableCell className="visible-head" align="right">
              Protein
            </StyledTableCell>
            <StyledTableCell className="visible-head" align="right">
              Fat
            </StyledTableCell>
            <StyledTableCell className="visible-head" align="right">
              Carbs
            </StyledTableCell>
            <StyledTableCell className="visible-head" align="right">
              Protein
            </StyledTableCell>
            <StyledTableCell className="visible-head" align="right">
              Fat
            </StyledTableCell>
            <StyledTableCell className="last-header visible-head" align="right">
              Carbs
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell
                className="table-data-row"
                component="th"
                scope="row"
              >
                {row.name}
              </StyledTableCell>
              <StyledTableCell className="table-data-row" align="right">
                {row.calories}
              </StyledTableCell>
              <StyledTableCell className="table-data-row" align="right">
                {row.fat}
              </StyledTableCell>
              <StyledTableCell className="table-data-row" align="right">
                {row.carbs}
              </StyledTableCell>
              <StyledTableCell className="table-data-row" align="right">
                {row.protein}
              </StyledTableCell>
              <StyledTableCell className="table-data-row" align="right">
                {row.calories}
              </StyledTableCell>
              <StyledTableCell className="table-data-row" align="right">
                {row.fat}
              </StyledTableCell>
              <StyledTableCell className="table-data-row" align="right">
                {row.carbs}
              </StyledTableCell>
              <StyledTableCell className="table-data-row" align="right">
                {row.protein}
              </StyledTableCell>
              <StyledTableCell className="table-data-row" align="right">
                {row.protein}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
