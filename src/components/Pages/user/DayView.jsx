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
import { doc , addDoc, collection, deleteDoc, getDocs, updateDoc } from 'firebase/firestore';
import {  db} from '../../Firebase/firebase'
import { useEffect, useState} from 'react';
import { Button} from '@material-ui/core';



function DayViewUser (){


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
        appointment (data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
      };
      getAppointment();
  }, [])  

  async function deleteAppointment (id){
    const compromissoDoc  = doc(db, 'appointment' , id);
    await deleteDoc(compromissoDoc)
    console.log(compromissoDoc);
    setAppointment(<Button variant='text' color='inherit' 
                onClick={deleteAppointment}> Deletar 
                </Button> )
}

async function updateAppointment (id) {
    const compromissoDoc  = doc(db, 'appointment' , id);
    await updateDoc(compromissoDoc)
    console.log(compromissoDoc)
    setAppointment(<Button variant='text' color='inherit' onClick={updateAppointment}> Atualizar </Button> )
}

    
    return (
        <div>
        <div id='calendar'>
        
        <NavigatorUser/>
            
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