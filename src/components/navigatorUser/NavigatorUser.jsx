import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './style.css';

const NavigatorUser = () => {

    return (
        <div className='navigator'>
           <Link to = '/user/DayView'><Button> Day </Button></Link>
           <Link to = '/user'><Button> Week </Button></Link>
           <Link to = '/user/MonthView'><Button> Month</Button></Link> 
           <Link to = '/'><Button> LogOut </Button></Link>
        </div>
    )
}

export default NavigatorUser;