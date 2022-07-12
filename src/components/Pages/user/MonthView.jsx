import { ViewState , EditingState , IntegratedEditing} from '@devexpress/dx-react-scheduler';
import  { Scheduler, Appointments , AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';
import {Container, Grid} from '@material-ui/core';
import './style.css'
import { MonthView } from '@devexpress/dx-react-scheduler-material-ui';
import NavigatorUser from '../../navigatorUser/NavigatorUser';
import { doc , addDoc, collection, deleteDoc, getDocs, updateDoc } from 'firebase/firestore';
import {  db} from '../../Firebase/firebase'
import { useEffect, useState} from 'react';
import { Button} from '@material-ui/core';




function MonthViewUser (){

  // estado para guardar os compromissos
  const [appointment, setAppointment ]=useState([])

  const schedulerData = [
    { startDate: '2022-07-13T09:45', endDate: '2022-07-13T11:00', title:'Exemplo'}
];


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

        <NavigatorUser />
            <Container maxWidth='md'  >
                <Grid container justify='center'>
                <Scheduler data={schedulerData} >  
               
                    <ViewState/>
                    <EditingState />
                    <IntegratedEditing  />
                    <MonthView />
                      
                </Scheduler>
                </Grid>
                 
            </Container>
           
        </div>
        </div>

    )
}
 
export default MonthViewUser;