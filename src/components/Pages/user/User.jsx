import { ViewState , EditingState , IntegratedEditing} from '@devexpress/dx-react-scheduler';
import  { Scheduler , WeekView  } from '@devexpress/dx-react-scheduler-material-ui';
import {Container, Grid } from '@material-ui/core';
import './style.css'
import NavigatorUser from '../../navigatorUser/NavigatorUser';
import {  collection, deleteDoc, getDocs, updateDoc, doc, Timestamp } from 'firebase/firestore';
import {  db} from '../../Firebase/firebase'
import { useEffect, useState} from 'react';
import openAppointment from '../registrer/openAppointment';



function UserSchedule (props){


    const schedulerData = [
        { startDate: '2022-07-13T09:45', endDate: '2022-07-13T11:00', title:'Exemplo'}
    ];
   
  // estado para guardar os compromissos
  const [appointment, setAppointment ]=useState([])


  // variável para trazer os dados do banco de dados
  const appointmentCollectionRef = collection(db, 'appointment');
  
  // efeito para carregar o compromisso na página
  useEffect(() => {
       async function getAppointment () {
          const data = await getDocs(appointmentCollectionRef)
        setAppointment(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
      };
      getAppointment();
  }, [])  



const openAppointment = () => {

    return (
        <div>
    

    <openAppointment/>

        </div>
   
    )
}

    
    return (
        <div>

        <div id='calendar'>

            <NavigatorUser/>
            
            <Container maxWidth='md'  >
                <Grid container justify='center'>
                <Scheduler data={schedulerData} onClick={openAppointment}>
                             
                    <ViewState/>
                    <EditingState  />
                    <IntegratedEditing />
                    <WeekView startDayHour={8} endDayHour={19}/>
                    
                </Scheduler>
                </Grid>
                 
            </Container>
           
        
        </div>
        </div>
        
        

    )
}
 
export default UserSchedule;