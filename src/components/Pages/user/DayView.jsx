import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui';
import {Container, Grid , Button} from '@material-ui/core';
import './style.css';
import {Link} from 'react-router-dom';

const schedulerData = [
    { startDate: '2022-07-09T09:45', endDate: '2022-07-09T11:00', title:'Exemplo'},
    { startDate: '2022-07-10T12:00', endDate: '2022-07-10T13:30', title:'Exemplo 2'}
];

function DayViewUser (){
    
    return (
        <div>
        <div id='calendar'>
        
        <Link to = '/'><Button> LogOut </Button></Link>
        <Link to = '/user'><Button> Week </Button></Link>
        <Link to = '/user/MonthView'><Button> Month</Button></Link>
            
            <Container maxWidth='md'  >
                <Grid container justify='center'>
                <Paper>
                <Scheduler
                    data={schedulerData}>
                <DayView
                    startDayHour={8}
                    endDayHour={13}
                />
                    <Appointments />
                    <AppointmentTooltip />
                </Scheduler>
                </Paper>
                </Grid>
                 
            </Container>
           
        </div>
        </div>

    )
}
 
export default DayViewUser;