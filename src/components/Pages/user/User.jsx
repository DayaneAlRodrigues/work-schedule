import { ViewState , EditingState , IntegratedEditing} from '@devexpress/dx-react-scheduler';
import  { Scheduler , WeekView , Appointments , AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';
import {Container, Grid , Button} from '@material-ui/core';
import './style.css'
import { Link } from   'react-router-dom';





const schedulerData = [
    { startDate: '2022-07-09T09:45', endDate: '2022-07-09T11:00', title:'Exemplo'},
    { startDate: '2022-07-10T12:00', endDate: '2022-07-10T13:30', title:'Exemplo 2'}
];

const saveAppointment = () => {
  
}

function UserSchedule (){

    
    return (
        <div>

        <div id='calendar'>

            <Link to = '/'><Button> LogOut </Button></Link>
           <Link to = '/user/DayView'><Button> Day </Button></Link>
           <Link to = '/user/MonthView'><Button> Month</Button></Link>


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
        </div>
        
        

    )
}
 
export default UserSchedule;