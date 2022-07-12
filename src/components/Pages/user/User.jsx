import { ViewState , EditingState , IntegratedEditing} from '@devexpress/dx-react-scheduler';
import  { Scheduler , WeekView  } from '@devexpress/dx-react-scheduler-material-ui';
import {Container, Grid } from '@material-ui/core';
import './style.css'
import NavigatorUser from '../../navigatorUser/NavigatorUser';
import {  collection, deleteDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import {  db} from '../../Firebase/firebase'
import { useEffect, useState} from 'react';
import { Button} from '@material-ui/core';




function UserSchedule (){

  // estado para guardar os compromissos
  const [compromisso, setCompromisso ]=useState([])

  //variável responsável por carregar no calendário os compromissos
  const schedulerData = [
      {compromisso}
  ];

  // variável para trazer os dados do banco de dados
  const appointmentCollectionRef = collection(db, 'appointment');
  
  // efeito para carregar o compromisso na página
  useEffect(() => {
       async function getCompromisso () {
          const data = await getDocs(appointmentCollectionRef)
          console.log(data);
          setCompromisso(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
      };
      getCompromisso();
  }, [])  

  async function deletarCompromisso (id){
    const compromissoDoc  = doc(db, 'appointment' , id);
    await deleteDoc(compromissoDoc)
    console.log(compromissoDoc);
}

async function updateCompromisso (id) {
    const compromissoDoc  = doc(db, 'appointment' , id);
    await updateDoc(compromissoDoc)
    console.log(compromissoDoc)
}

    
    return (
        <div>

        <div id='calendar'>

            <NavigatorUser/>
            
            <Container maxWidth='md'  >
                <Grid container justify='center'>
                <Scheduler data={schedulerData}>
                <Button variant='text' color='inherit' onClick={deletarCompromisso}> Deletar </Button> 
                <Button variant='text' color='inherit' onClick={updateCompromisso}> Atualizar </Button>                   
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