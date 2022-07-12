import { Button, FormControl, TextField, Grid, Container} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './style.css'
import {  db} from '../../Firebase/firebase'
import { doc , addDoc, collection, deleteDoc, getDocs } from 'firebase/firestore';
import NavigatorUser from '../../navigatorUser/NavigatorUser';


const Registrer = () => {

    const [startDate, setStartDate ]=useState('')
    const [endDate, setEndDate ]=useState('')
    const [local, setLocal ]=useState('')
    const [tipo, setTipo ]=useState('')
    const [compromisso, setCompromisso ]=useState([])


    
    const appointmentCollectionRef = collection(db, 'appointment');
   
    async function criarCompromisso () {
        const novoCompromisso = await addDoc(appointmentCollectionRef, {
            startDate, endDate, local, tipo
        })
        console.log(novoCompromisso)
    }

    async function deletarCompromisso (id){
        const compromissoDoc  = doc(db, 'appointment' , id);
        await deleteDoc(compromissoDoc)
        console.log(compromissoDoc);
    }

    function alarme () {
        console.log({startDate})
    }

    
    return (
        <div>
            <NavigatorUser/>
            <Container maxWidth='xs' >
            <Grid container justify='center'className='box' >
                
                <FormControl>
                <label for='data' className='text-form-registrer'>
                    Data e horario inicial
                </label>
                <TextField for='data' required placeholder='2022-07-12T09:45' value={startDate} onChange={e => setStartDate(e.target.value)}/>

                <label for='endTime' className='text-form-registrer'>
                    Data final e horario final
                </label >
                <TextField for='endTime' required placeholder='2022-07-12T11:00' value={endDate} onChange={e => setEndDate(e.target.value)}/>

                <label for='local' className='text-form-registrer'>
                    Local
                </label>
                <TextField for='local' required placeholder='escritório' value={local} onChange={e => setLocal(e.target.value)}/>

                <label for='tipo' className='text-form-registrer'>
                    Tipo de compromisso
                </label>
                <TextField for='tipo' required placeholder='reunião' value={tipo} onChange={e => setTipo(e.target.value)}/>

                <Button variant='text' color='inherit'onClick={criarCompromisso}> Salvar </Button>
                <Button variant='text' color='inherit' onClick={deletarCompromisso}> Deletar </Button>
                <Button variant='text' color='inherit'onClick={alarme}> Alarme </Button>
                
                </FormControl>
                </Grid>
            </Container>

            
            
        </div>
    )
}


export default Registrer;