import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui';
import {Container, Grid } from '@material-ui/core';
import './style.css';
import NavigatorUser from '../../navigatorUser/NavigatorUser';

const schedulerData = [
    { startDate: '2022-07-12T09:45', endDate: '2022-07-12T11:00', title:'Exemplo'}
];

const saveAppointment = (evento) => {
  // função para lidar com a confirmação de alteração de compromisso salvar evento 
  schedulerData.props = evento.target.value
}

const deleteAppointment = (evento) => {
    // função para deletar compromisso 
    schedulerData.props = evento.target.value.deleted
}
function DayViewUser (){
    
    return (
        <div>
        <div id='calendar'>
        
        <NavigatorUser />
            
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