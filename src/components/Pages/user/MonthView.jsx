import { ViewState , EditingState , IntegratedEditing} from '@devexpress/dx-react-scheduler';
import  { Scheduler, Appointments , AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';
import {Container, Grid , Button} from '@material-ui/core';
import './style.css'
import { MonthView } from '@devexpress/dx-react-scheduler-material-ui';
import { Link } from 'react-router-dom';
import { useState } from 'react';



function MonthViewUser (){

    const [schedulerData, setSchedulerData ] = useState({startDate: " ", endDate: " ", title: " "}) ;

    const save = () => {
       const setSaveAppoiment = setSchedulerData.value;
        
    }

    
    return (
        <div>
        <div id='calendar'>

        <Link to = '/'><Button> LogOut </Button></Link>
        <Link to = '/user'><Button> Week </Button></Link>
        <Link to = '/user/MonthView'><Button> Month</Button></Link>

            <Container maxWidth='md'  >
                <Grid container justify='center'>
                <Scheduler data={schedulerData} >
                                    
                    <ViewState/>
                    <EditingState onCommitChanges={save} />
                    <IntegratedEditing />
                    <MonthView />
                    <Appointments />
                    <AppointmentForm />  
                </Scheduler>
                </Grid>
                 
            </Container>
           
        </div>
        </div>

    )
}
 
export default MonthViewUser;