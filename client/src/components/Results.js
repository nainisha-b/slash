import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Table from "@mui/material/Table";
import TablePagination from "@mui/material/TablePagination";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";

import { useLocation } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  pos: {
    marginBottom: 12
  }
});

/**
 * Function to compare two operators a and b
 * @param {*} a dict of items
 * @param {*} b dict of items
 * @param {*} orderBy key to order by
 * @returns
 */
function descendingComparator(a, b, orderBy) {
  if (a[orderBy] == "") a[orderBy] = "$0";
  if (b[orderBy] == "") b[orderBy] = "$0";
  let a_price = a[orderBy].split("$");
  let b_price = b[orderBy].split("$");

  if (parseFloat(b_price[1].replace(/ /g, "")) < parseFloat(a_price[1].replace(/ /g, ""))) {
    return -1;
  }
  if (parseFloat(b_price[1].replace(/ /g, "")) > parseFloat(a_price[1].replace(/ /g, ""))) {
    return 1;
  }
  return 0;
}

/**
 * Function to determine ascending or descending order
 * @param {*} order ascending / descending
 * @param {*} orderBy key to order by
 * @returns
 */
function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {
    id: "image",
    numeric: false,
    disablePadding: false,
    label: "Image"
  },
  {
    id: "timestamp",
    numeric: false,
    disablePadding: false,
    label: "Timestamp"
  },
  {
    id: "title",
    numeric: false,
    disablePadding: false,
    label: "Title"
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Price"
  },
  {
    id: "website",
    numeric: false,
    disablePadding: false,
    label: "Website"
  },
  {
    id: "link",
    numeric: false,
    disablePadding: false,
    label: "Link"
  },
  {
    rating: "rating",
    numeric: false,
    disablePadding: false,
    label: "Rating"
  }
];

/**
 * Builds the table header
 * @param {*} props props passed from the parent component
 * @returns
 */
const EnhancedTableHead = (props) => {
  const { order, orderBy, rowCount, onRequestSort, minRating, setMinRating } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <div>
      <div>
        <label htmlFor="minRating">Minimum Rating:</label>
        <input
          type="number"
          id="minRating"
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
        />
      </div>
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"center"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  </div>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  minRating: PropTypes.number.isRequired, 
  setMinRating: PropTypes.func.isRequired,
};

const EnhancedTableToolbar = () => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...{
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)
        }
      }}
    >
      <Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">
        Results
      </Typography>
    </Toolbar>
  );
};

/**
 * Genrates the results table
 * @returns
 */
export default function Results() {
  const location = useLocation();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("price");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [minRating, setMinRating] = React.useState(0);

  let rows = null;
  

  if (location.state == null) {
    return (
      <div>
        <h2>{"Search for what you want in the menu page so I can find related information for you!"}</h2>
      </div>
    );
  } else {
    rows = JSON.parse(location.state.response);
    console.log(rows);
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getClickableLink = (link) => {
    if (link == null) {
      return "";
    } else {
      return link.startsWith("http://") || link.startsWith("https://") ? link : `//${link}`;
    }
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  // const classes = useStyles();

  console.log(rows);
  if (rows == null) {
    return (
      <div>
        <h2>{"Oops I couldn't find what you are looking for! :/"}</h2>
      </div>
    );
  } else {
    return (
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <EnhancedTableToolbar />
          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={"medium"}>
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
                minRating={minRating}
                setMinRating={setMinRating}
              />
              <TableBody>
                {rows
                  .slice()
                  .sort(getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .filter((row) => parseFloat(row.rating) >= minRating)
                  .map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;
                  if (parseFloat(row.rating) >= minRating) {
                  return (
                    <TableRow key={index}>
                      <TableCell align="center"><img src={row.image} width="400px" height="400px" /></TableCell>
                      <TableCell component="th" id={labelId} scope="row" align="center" padding="none">
                        {row.timestamp}
                      </TableCell>
                      <TableCell align="center">{row.title}</TableCell>
                      <TableCell align="center">{row.price}</TableCell>
                      <TableCell align="center">{row.website}</TableCell>
                      <TableCell align="center">
                        {row.link == null ? (
                          "No link"
                        ) : (
                          <Link href={getClickableLink(row.link)} target="_blank" rel="noopener">
                            Link
                          </Link>
                        )}
                      </TableCell>
                      <TableCell align="center">{row.rating}</TableCell>
                    </TableRow>
                  );
                  }
                  else {
                    return null; 
                  }
                }
                  )}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    );
  }
 
}
