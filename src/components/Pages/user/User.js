import { ViewState , EditingState , IntegratedEditing } from '@devexpress/dx-react-scheduler';
import  { Scheduler , WeekView , Appointments , AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';


function UserSchedule (){
    return (
        <div id='calendar'>
            <Scheduler>
                <ViewState/>
                <EditingState />
                <WeekView/>
                <Appointments />
                <AppointmentForm />
                <IntegratedEditing />
            </Scheduler>
        </div>

    )
}
 
export default UserSchedule;