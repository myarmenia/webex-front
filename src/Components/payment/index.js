// import React from 'react';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles, useTheme } from '@material-ui/core/styles';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';

// import Tooltip from '@material-ui/core/Tooltip';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
// import DeleteIcon from '@material-ui/icons/Delete';
// import FilterListIcon from '@material-ui/icons/FilterList';
// import FirstPageIcon from '@material-ui/icons/FirstPage';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import LastPageIcon from '@material-ui/icons/LastPage';
import TableFooter from '@material-ui/core/TableFooter';




// ______verevi table_________________________________________

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions2(props2) {
  const classes1 = useStyles1();
  const theme = useTheme();
  const { count2, page2, rowsPerPage2, onChangePage2 } = props2;

  const handleFirstPageButtonClick2 = event => {
    onChangePage2(event, 0);
  };

  const handleBackButtonClick2 = event => {
    onChangePage2(event, page2 - 1);
  };

  const handleNextButtonClick2 = event => {
    onChangePage2(event, page2 + 1);
  };

  const handleLastPageButtonClick2 = event => {
    onChangePage2(event, Math.max(0, Math.ceil(count2 / rowsPerPage2) - 1));
  };

  return (
    <div className={classes1.root}>
      <IconButton
        onClick={handleFirstPageButtonClick2}
        disabled={page2 === 0}
        aria-label="first page"
      >
        {/* {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />} */}
      </IconButton>
      <IconButton onClick={handleBackButtonClick2} disabled={page2 === 0} aria-label="previous page">
        {/* {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />} */}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick2}
        disabled={page2 >= Math.ceil(count2 / rowsPerPage2) - 1}
        aria-label="next page"
      >
        {/* {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />} */}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick2}
        disabled={page2 >= Math.ceil(count2 / rowsPerPage2) - 1}
        aria-label="last page"
      >
        {/* {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />} */}
      </IconButton>
    </div>
  );
}

TablePaginationActions2.propTypes = {
  count2: PropTypes.number.isRequired,
  onChangePage2: PropTypes.func.isRequired,
  page2: PropTypes.number.isRequired,
  rowsPerPage2: PropTypes.number.isRequired,
};

function createData2(name, calories, fat) {
  return { name, calories, fat };
}

const rows2 = [
  createData2('Cupcake', 305, 3.7),
  createData2('Donut', 452, 25.0),
  createData2('Eclair', 262, 16.0),
  createData2('Frozen yoghurt', 159, 6.0),
  createData2('Gingerbread', 356, 16.0),
  createData2('Honeycomb', 408, 3.2),
  createData2('Ice cream sandwich', 237, 9.0),
  createData2('Jelly Bean', 375, 0.0),
  createData2('KitKat', 518, 26.0),
  createData2('Lollipop', 392, 0.2),
  createData2('Marshmallow', 318, 0),
  createData2('Nougat', 360, 19.0),
  createData2('Oreo', 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const useStyles2 = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
}));

// __________verj verevi table___________________________________


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
  
}
const rows = [
  createData("name", 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),

];

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    

    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1]
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Language' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Duretion' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Price' },

  { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={order}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle">
          Nutrition
        </Typography>
      )}

      
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function Payment1() {
  
  // _______verevi table________________________________
  const classes1 = useStyles2();
  const [page2, setPage2] = React.useState(0);
  const [rowsPerPage2, setRowsPerPage2] = React.useState(5);

  const emptyRows2 = rowsPerPage2 - Math.min(rowsPerPage2, rows2.length - page2 * rowsPerPage2);

  const handleChangePage2 = (event, newPage2) => {
    setPage2(newPage2);
  };

  const handleChangeRowsPerPage2 = event => {
    setRowsPerPage2(parseInt(event.target.value, 10));
    setPage2(0);
  };
  // _______verj verevi table____________________________________


  const classes = useStyles();
  const [course, setCourse] = React.useState([]);  
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [languageid, setLanguageid] = React.useState('');
//   const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // useEffect(()=>{ 
    const selectLanguage=(event)=>{
  fetch('http://web.webex.am/api/courses')
      .then(response => response.json())
      .then(data1 => { 
        console.log(data1,"dataaaaaaa")
        setCourse({ course: data1}) }); 
        console.log(course,"stateeeeeeee")

        event.preventDefault();
        // for(let i = 0; i<arr.children.length; i++){
        // }
        const btnId=event.target.getAttribute('id')
        console.log(btnId)
        setLanguageid(btnId)
        console.log(languageid)
        
    }
    // selectLanguage()
      // })


  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

//   const handleChangeDense = event => {
//     setDense(event.target.checked);
//   };

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
<div>
  {/* __________________verevi table_________________________________ */}
  <section className="ls s-pt-55 s-pb-30 s-pt-lg-95 s-pb-lg-70" id="courses">
    <div className="container">
    <div className="row">
    <div className="col-lg-12">
  <Paper className={classes1.root}>
      <div className={classes1.tableWrapper}>
        <Table className={classes1.table} aria-label="custom pagination table">
          <TableBody>
            {rows2.slice(page2 * rowsPerPage2, page2 * rowsPerPage2 + rowsPerPage2).map(row2 => (
              <TableRow key={row2.name}>
                <TableCell component="th" scope="row">
                  {row2.name}
                </TableCell>
                <TableCell align="right">{row2.calories}</TableCell>
                <TableCell align="right">{row2.fat}</TableCell>
              </TableRow>
            ))}

            {emptyRows2 > 0 && (
              <TableRow style={{ height: 53 * emptyRows2 }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions2={[5, 10, 25]}
                colSpan2={3}
                count2={rows2.length}
                rowsPerPage2={rowsPerPage2}
                page2={page2}
                SelectProps2={{
                  inputProps2: { 'aria-label': 'rows per page' },
                  native2: true,
                }}
                onChangePage2={handleChangePage2}
                onChangeRowsPerPage2={handleChangeRowsPerPage2}
                ActionsComponent2={TablePaginationActions2}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </Paper>
    </div></div></div>
    </section>

    {/* __________________verj verevi table____________________________ */}



<section className="ls s-pt-55 s-pb-30 s-pt-lg-95 s-pb-lg-70" id="courses" style={{'text-align':'center'}}>
        <div className="container">
        <div className="row">
        <div className="col-lg-12">
    <div className="row isotope-wrapper c-mb-30"  >
       
    <div className='col col-12 col-md-6 col-lg-4' >
      <div className="course-front rounded bordered">
                      <div className=" vertical-item content-padding">
                        <div className="item-media rounded-top">
                        </div>
                        <div className="item-content">
                          <h6 className="course-title">
                            Front End
                             </h6>
                        <a href="#" className="btn btn-maincolor" id="1" onClick={selectLanguage}>Start now</a>
                        </div>
                      </div>
                    </div>
    </div>
      
      <div className='col col-12 col-md-6 col-lg-4' >
      <div className="course-front rounded bordered">
                      <div className=" vertical-item content-padding">
                        <div className="item-media rounded-top">
                        </div>
                        <div className="item-content">
                          <h6 className="course-title">
                            Full Stack
                             </h6>
                        <a href="#" className="btn btn-maincolor" id="3" onClick={selectLanguage}>Start now</a>
                        </div>
                      </div>
                    </div>
    </div>
    <div className='col col-12 col-md-6 col-lg-4' >
      <div className="course-front rounded bordered">
                      <div className=" vertical-item content-padding">
                        <div className="item-media rounded-top">
                        </div>
                        <div className="item-content">
                          <h6 className="course-title">
                           Back End
                             </h6>
                        <a href="#" className="btn btn-maincolor" id="2" onClick={selectLanguage}>Start now</a>
                        </div>
                      </div>
                    </div>
    </div>
      </div>
    </div>
    </div>
    </div>
    
    </section>

    <section className="ls s-pt-55 s-pb-30 s-pt-lg-95 s-pb-lg-70" id="courses">
    <div className="container">
    <div className="row">
    <div className="col-lg-12">
      {/* _______________________________________________________________ */}
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            // size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  );
                })}
              {/* {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </div>
    {/* ______________________________________----- */}


    </div>
    </div>
    </div>
    </section>
    </div>
  );
}

