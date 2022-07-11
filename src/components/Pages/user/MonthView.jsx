import { ViewState , EditingState , IntegratedEditing} from '@devexpress/dx-react-scheduler';
import  { Scheduler, Appointments , AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';
import {Container, Grid} from '@material-ui/core';
import './style.css'
import { MonthView } from '@devexpress/dx-react-scheduler-material-ui';
import NavigatorUser from '../../navigatorUser/NavigatorUser';



function MonthViewUser (){

    const schedulerData = [
        { startDate: '2022-07-12T09:45', endDate: '2022-07-12T11:00', title:'Exemplo'}
    ];
    
    const saveAppointment = (evento) => {
      // função para lidar com a confirmação de alteração de compromisso salvar evento 
      schedulerData.push()
    }
    
    const deleteAppointment = (evento) => {
        // função para deletar compromisso 
        schedulerData.props = evento.target.value.pop();

    }
    
    return (
        <div>
        <div id='calendar'>

        <NavigatorUser />
            <Container maxWidth='md'  >
                <Grid container justify='center'>
                <Scheduler data={schedulerData} >
                                    
                    <ViewState/>
                    <EditingState onCommitChanges={saveAppointment}  />
                    <IntegratedEditing  />
                    <MonthView />
                    <Appointments />
                    <AppointmentForm  onAppointmentDataChange={saveAppointment} />  
                </Scheduler>
                </Grid>
                 
            </Container>
           
        </div>
        </div>

    )
}
 
export default MonthViewUser;