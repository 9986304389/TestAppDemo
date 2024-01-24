import React, { useState, useEffect } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import TextField from '@mui/material/TextField';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
// import Datepicker from './Datepicker';
import CircularProgress from '@mui/material/CircularProgress';
const generateDateOptions = () => {
  const startDate = new Date('2024-01-01');
  const endDate = new Date('2024-12-31');
  const dateOptions = [];

  for (let currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
    const day = currentDate.getDate().toString().padStart(2, '0'); // Ensure two-digit day
    const month = currentDate.toLocaleString('default', { month: 'short' }); // Short month name
    const formattedDate = `${day}-${month}`;

    dateOptions.push(
      <MenuItem key={formattedDate} value={formattedDate}>
        {formattedDate}
      </MenuItem>
    );
  }

  return dateOptions;
};

const date_formate = (selectDate) => {
  const [day, month, year] = selectDate.split('-').map(Number);

  // Create a Date object using the extracted components
  const dateObject = new Date(year, month - 1, day);

  // Format the date in the desired format
  const formattedDate = `${day}-${dateObject.toLocaleString('default', { month: 'short' })}`;
  console.log(formattedDate)
  return formattedDate;
}
export default function Orders(props) {
  const [loading, setLoading] = useState(false);

  const dateOptions = generateDateOptions();
  const [data, setData] = useState([]);
  const [admin, setadmin] = useState([]);
  //get the readinformation data 
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [alertConfig, setAlertConfig] = useState({
    show: false,
    message: '',
    severity: 'success',
  });
  const navigate = useNavigate();

  const { receivedData } = props;
  console.log(receivedData)

  let isAdmin = receivedData == 'admin@gmail.com';

  useEffect(() => {
    const fetchData = async () => {
      let email = receivedData;
      const data_json = { email: email };

      try {
        setLoading(true);
        const response = await fetch('https://chbackend.vercel.app/api/view_form_data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data_json),
        });

        if (response.ok) {
          const result = await response.json();
          console.log(result);

          if (result.status) {

          } else {
            // Set failure alert config
            setAlertConfig({
              show: true,
              message: result.message,
              severity: 'error',
            });
            setTimeout(() => {
              setAlertConfig({
                show: false,
                message: '',
                severity: 'success',
              });
            }, 3000);
          }

          // Assuming result.rows is an array of objects
          if (result.result) {
            const formattedResult = result.result.map(item => {
              const readInformationArray = item.readinformation.map(info => JSON.parse(info));
              return { ...item, readinformation: readInformationArray };
            });

            setData(formattedResult);

          } else {
            setData([]);
          }
        } else {
          console.error('Failed to fetch data');

          // Set failure alert config
          setAlertConfig({
            show: true,
            message: 'API call failed!',
            severity: 'error',
          });
          setTimeout(() => {
            setAlertConfig({
              show: false,
              message: '',
              severity: 'success',
            });
          }, 3000);
        }
      } catch (error) {
        console.error('Error:', error);

        // Set error alert config
        setAlertConfig({
          show: true,
          message: 'An error occurred!',
          severity: 'error',
        });
        setTimeout(() => {
          setAlertConfig({
            show: false,
            message: '',
            severity: 'success',
          });
        }, 3000);
      }
      finally{
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = (rowData) => {
    // Handle the click event to capture the data from the selected row
    console.log('Selected Row Data:', rowData);
    setSelectedRowData(rowData);
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [nameSearch, setNameSearch] = useState('');
  const [emailSearch, setEmailSearch] = useState('');
  const [infoSearch, setInfoSearch] = useState('');
  const [infoSearchmont, setInfoSearchmont] = useState('');
  const [selectDate, setDate] = React.useState('');
  const [selectMont, setMonth] = React.useState('');
  // Callback function to receive data from child
  // const handleChildData = (data) => {
  //   setDate(data);
   
  // };

  // console.log(selectDate);

  //   const Month = date_formate(selectDate)
  //   console.log(Month);
  const filterData = () => {
    return data.map((row) => {
      const filteredReadInformation = (row.readinformation || []).filter(
        (info) =>
          info &&
          info.day &&
          info.date &&
          info.information &&
          typeof info.day === 'string' &&
          typeof info.date === 'string' &&
          typeof info.information === 'string' &&
          info.day.toLowerCase().trim() == (infoSearch.toLowerCase().trim()) ||
          info.date.toLowerCase().trim().includes(infoSearch.toLowerCase().trim()) ||
          info.information.toLowerCase().trim().includes(infoSearch.toLowerCase().trim())
      );

      //  const filteredReadInformation_month = (row.readinformation || []).filter(
      //     (info) =>
      //       info &&

      //       info.date &&


      //       typeof info.date === 'string' &&

      //       info.date.toLowerCase().trim().includes(infoSearchmont.toLowerCase().trim())

      //   );
      // Check both conditions for filtering based on name and email
      if (
        row.name.toLowerCase().includes(nameSearch.toLowerCase()) &&
        row.email.toLowerCase().includes(emailSearch.toLowerCase())
      ) {
        return {
          ...row,
          readinformation: filteredReadInformation,

        };
      } else {
        // If the name or email does not match, return null or an empty object
        // depending on your use case
        return null; // or return {} or return undefined, based on your preference
      }
    })
      // Filter out the elements that didn't match the name and email conditions
      .filter(Boolean); // This will remove null or undefined elements from the array
  };


  const filteredData = filterData();

  const handleRefreshClick = () => {
    // Reload the page
    window.location.reload();
  };

  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {props.children}
      </Typography>
      <Typography component="h1" variant="h5" m={2} color={'#660066'}>
        {isAdmin ? 'Admin' : ''}
        {data.map((row) => (
          <React.Fragment key={row.id}>
            {isAdmin ? '' : row.name}
          </React.Fragment>
        ))}
      </Typography>

      {console.log(isAdmin)}
      {isAdmin ? (<div style={{ overflowX: 'auto' }}>

        {/* Render admin table */}
        <>
          <div>
           
            <FormControl sx={{ m: 1, minWidth: 180, mb: 4 }} size="small">
              <InputLabel id="demo-select-small-label">Search by Name</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={nameSearch}
                onChange={(e) => setNameSearch(e.target.value)}
                label="Search by Name"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {data.map((row) => (
                  <MenuItem value={row.name}>{row.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 180, mb: 4 }} size="small">
              <InputLabel id="demo-select-small-label">Search by Email</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={emailSearch}
                onChange={(e) => setEmailSearch(e.target.value)}
                label="Search by Email"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {data.map((row) => (
                  <MenuItem value={row.email}>{row.email}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 180, mb: 4 }} size="small">
              <InputLabel id="demo-select-small-label">Search by Day</InputLabel>
              <Select
                labelId="demo-select-small-label"
                label="Search in Read Information"
                variant="outlined"
                value={infoSearch}
                onChange={(e) => setInfoSearch(e.target.value)}

              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                {Array.from({ length: 366 }, (_, index) => (
                  <MenuItem key={index + 1} value={`Day ${index + 1}`}>
                    {`Day ${index + 1}`}
                  </MenuItem>
                ))}

              </Select>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              sx={{
                m: 1,
                mb: 4,
                minWidth: 180,
                bgcolor: '#660066',
                '&:hover': {
                  bgcolor: '#660066' // Replace 'hoverColor' with the color you want on hover
                }
              }}
              onClick={handleRefreshClick}
            >
              Clear
            </Button>
            {/* <Datepicker sendDataToParent={handleChildData} /> */}


            {/* <FormControl sx={{ m: 1, minWidth: 180, mb: 4 }} size="small">
              <InputLabel id="demo-select-small-label">Search by Day</InputLabel>
              <Select
                labelId="demo-select-small-label"
                label="Search in Read Information"
                variant="outlined"
                value={infoSearch}
                onChange={(e) => setInfoSearchmont(e.target.value)}

              >
                {dateOptions}

              </Select>
            </FormControl> */}
            {/* <TextField
              label="Search by Email"
              variant="outlined"

              value={emailSearch}
              onChange={(e) => setEmailSearch(e.target.value)}
              style={{ marginBottom: '16px', margin: 8 }}
            /> */}


            {/* <TextField
              label="Search in Read Information"
              variant="outlined"
              value={infoSearch}
              onChange={(e) => setInfoSearch(e.target.value)}
              style={{ marginBottom: '16px', margin: 8 }}
            /> */}
          </div>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Read Information</TableCell>
                <TableCell colSpan={3}>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((row) => (
                <React.Fragment key={row.id}>
                  <TableRow>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell colSpan={3}>
                      <Box sx={{ maxHeight: '200px', overflow: 'auto' }}>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>Day</TableCell>
                              <TableCell>Date</TableCell>
                              <TableCell>Information</TableCell>
                              <TableCell>Status</TableCell>
                              {/* <TableCell>Edit</TableCell>
                              <TableCell>Delete</TableCell> */}
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {row.readinformation.map((info, index) => (
                              <TableRow key={index}>
                                <TableCell>{info.day}</TableCell>
                                <TableCell>{info.date}</TableCell>
                                <TableCell>{info.information}</TableCell>
                                <TableCell>
                                  <span
                                    style={{
                                      color: info.status === 1 ? 'green' : 'red',
                                    }}
                                  >
                                    {info.status === 1 ? 'Done' : 'Not Done'}
                                  </span>
                                </TableCell>
                                {/* <TableCell>
                                  <Tooltip title="Edit">
                                    <IconButton
                                      color="success"
                                      aria-label="edit"
                                      onClick={() => handleButtonClick(row)}
                                    >
                                      <ModeEditIcon />
                                    </IconButton>
                                  </Tooltip>
                                </TableCell>
                                <TableCell>
                                  <Tooltip title="Delete">
                                    <IconButton
                                      color="error"
                                      aria-label="delete"
                                      onClick={() => handleButtonClick(row)}
                                    >
                                      <DeleteIcon />
                                    </IconButton>
                                  </Tooltip>
                                </TableCell> */}
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Box>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </>
      </div>) : (
        <div style={{ overflowX: 'auto' }}>
          <TextField
            label="Search by Month"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: 20, marginTop: 8 }}
          />
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: 20 }}>Read Information</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>Status</TableCell>
                {/* <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <React.Fragment key={row.id}>
                  {row.readinformation
                    .filter((info) =>
                      info.date.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((info, index) => (
                      <TableRow key={index}>
                        <TableCell>{info.day}</TableCell>
                        <TableCell>{info.date}</TableCell>
                        <TableCell>{info.information}</TableCell>
                        <TableCell>
                          <span
                            style={{
                              color: info.status === 1 ? 'green' : 'red',
                            }}
                          >
                            {info.status === 1 ? 'Done' : 'Not Done'}
                          </span>

                        </TableCell>
                        {/* <TableCell>
                          <Tooltip title="Edit">
                            <IconButton
                              color="success"
                              aria-label="edit"
                              onClick={() => handleButtonClick(row)}
                            >
                              <ModeEditIcon />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                        <TableCell>
                          <Tooltip title="Delete">
                            <IconButton
                              color="error"
                              aria-label="delete"
                              onClick={() => handleButtonClick(row)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Tooltip>
                        </TableCell> */}
                      </TableRow>
                    ))}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
      {loading && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.7)', // Adjust background color and opacity
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          <CircularProgress size={60} color="secondary" />
        </Box>
      )}
    </React.Fragment>
  );

  //   <React.Fragment>
  //     <Typography component="h2" variant="h6" color="primary" gutterBottom>
  //       {props.children}
  //     </Typography>
  //     <Typography component="h1" variant="h5" m={2}>
  //       {data.map((row) => (
  //         <React.Fragment key={row.id}>
  //           {row.name}
  //         </React.Fragment>
  //       ))}
  //     </Typography>
  //     <div style={{ overflowX: 'auto' }}>
  //     <Table  size="small">
  //       <TableHead>
  //         <TableRow>
  //           {/* <TableCell>Name</TableCell>
  //           <TableCell>Email</TableCell> */}
  //           <TableCell sx={{fontSize:20}}>Read Information</TableCell>
  //           <TableCell></TableCell>
  //           <TableCell></TableCell>
  //           <TableCell></TableCell>
  //           <TableCell></TableCell>
  //         </TableRow>
  //       </TableHead>
  //       <TableBody>
  //         {data.map((row) => (
  //           <React.Fragment key={row.id}>
  //             {/* <TableRow>
  //               <TableCell>{row.name}</TableCell>
  //               <TableCell>{row.email}</TableCell>

  //             </TableRow> */}
  //             {row.readinformation.map((info, index) => (
  //               <TableRow key={index}>
  //                 <TableCell>{info.day}</TableCell>
  //                 <TableCell>{info.date}</TableCell>
  //                 <TableCell>{info.information}</TableCell>
  //                 <TableCell>
  //                   <Tooltip title="Edit">
  //                     <IconButton color='success' aria-label="add an alarm" onClick={() => handleButtonClick(row)}>
  //                       <ModeEditIcon />
  //                     </IconButton>
  //                   </Tooltip>
  //                 </TableCell>
  //                 <TableCell>
  //                   <Tooltip title="Delete">
  //                     <IconButton color="error" aria-label="add an alarm" onClick={() => handleButtonClick(row)}>
  //                       <DeleteIcon />
  //                     </IconButton>
  //                   </Tooltip>
  //                 </TableCell>
  //               </TableRow>
  //             ))}
  //           </React.Fragment>
  //         ))}
  //       </TableBody>
  //     </Table>
  //     </div>
  //   </React.Fragment>
  // );
}