import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import img from './NLF-web-Logo-1.png'
import Select from './select';
import Checkboxcmp from './checkbox';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {

  const [selectStudy, setselectStudy] = React.useState('');
  const [completestatus, setcompletestatus] = React.useState('');
  const [alertConfig, setAlertConfig] = useState({
    show: false,
    message: '',
    severity: 'success',
  });

  // Callback function to receive data from child
  const handleChildData = (data) => {
    setselectStudy(data);
  };

  //get the checkbox data
  const handleChildData_Checkbox = (data) => {
    setcompletestatus(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let email = data.get('email');
    let name = data.get('name');
    let todaystudy = selectStudy;
    let status = completestatus;
    const [day, date, information] = todaystudy.split(',');

    console.log('day:', day.trim());
    console.log('date:', date.trim());
    console.log('information:', information.trim());

    let readdataobj = {
      day: day.trim(),
      date: date.trim(),
      information: information.trim()
    }
    let form_data = {
      name: name,
      email: email,
      readinformation: [readdataobj]
    }
    try {
      const response = await fetch('https://chbackend.vercel.app/api/save_form_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form_data),
      });

      if (response.ok) {

        const result = await response.json();
        console.log(result);
        if (result.status) {
          // Set success alert config
          setAlertConfig({
            show: true,
            message: result.message, // Adjust based on your API response structure
            severity: 'success',
          });
          setTimeout(() => {
            setAlertConfig({
              show: false,
              message: '',
              severity: 'success',
            });
          }, 3000);

        }
        else {
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

  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <ThemeProvider theme={defaultTheme}>

      <Container component="main" maxWidth="xs">
        <CssBaseline />


        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
           {alertConfig.show && (
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            {console.log(alertConfig.severity)}
                            <Alert severity={alertConfig.severity}>{alertConfig.message}</Alert>
                        </Stack>
                    )}
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ borderColor: "red" }}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus

                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>

                <Select sendDataToParent={handleChildData} />
              </Grid>
              <Grid item xs={12}>

              </Grid>
              <Checkboxcmp sendDataToParents={handleChildData_Checkbox} />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: 'secondary.main',
                '&:hover': {
                  bgcolor: 'secondary.main',
                },
              }}
            >
              Submit
            </Button>
            <Grid container justifyContent="flex-end">

            </Grid>
          </Box>


        </Box>

      </Container>

    </ThemeProvider>
  );
}