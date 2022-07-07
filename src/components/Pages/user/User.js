import { ViewState , EditingState , IntegratedEditing } from '@devexpress/dx-react-scheduler';
import  { Scheduler , WeekView , Appointments , AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';
import Grid from '@material-ui/core/Grid';
import {Container} from '@material-ui/core';
import './style.css'

const schedulerData = [
    { startDate: '2022-07-09T09:45', endDate: '2022-07-09T11:00', title:'Exemplo'},
    { startDate: '2022-07-10T12:00', endDate: '2022-07-10T13:30', title:'Exemplo 2'}
];

const saveAppointment = (data) => {
    const elemento = document.getElementsByClassName('MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium Cell-cell css-1c1phb6-MuiTableCell-root')
     elemento.innerHtml = schedulerData.data;
}
function UserSchedule (){
    return (
        <div id='calendar'>
            <Container maxWidth='md'  >
                <Grid container justify='center'>
                <Scheduler data={schedulerData} >
                    <ViewState/>
                    <EditingState onCommitChanges={saveAppointment} />
                    <IntegratedEditing />
                    <WeekView startDayHour={8} endDayHour={19}/>
                    <Appointments />
                    <AppointmentForm />  
                </Scheduler>
                </Grid>
                 
            </Container>
           
        </div>

    )
}
 
export default UserSchedule;