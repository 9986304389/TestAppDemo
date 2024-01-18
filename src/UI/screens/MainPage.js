

import * as React from 'react';
import '../../App.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import { red } from '@mui/material/colors';
import Card from '../card'
import img from '../NLF-web-Logo-1.png'
import Personavatar from '../avatar';
import Mainpagecontent from '../mainpagecontent'

const MainPage = () => {
    return (
        <div className='mainpage'>

            <div className="header">
                <div className="left">
                    <Personavatar />
                </div>
                <div className="center">
                    <h1> Leap year bible study form</h1>
                </div>
                <div className="right">
                    <img className="NLF_logo" src={img} alt="Avatar" />
                </div>
            </div>
            <Mainpagecontent />
        </div>

    )
}

export default MainPage
