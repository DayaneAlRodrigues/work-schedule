import { Button , Grid, Container} from '@material-ui/core';
import React, { useEffect, useState, Component } from 'react';
import './style.css'
import {  db} from '../../Firebase/firebase'
import { doc , addDoc, collection, deleteDoc, getDocs , updateDoc} from 'firebase/firestore';
import NavigatorUser from '../../navigatorUser/NavigatorUser';

 const appointmentCollectionRef = collection(db, 'appointment');

 class openAppointment extends Component  {
    constructor ( startDate, endDate, local, tipo) {
        super ( startDate, endDate, local, tipo)
        this.startDate = appointmentCollectionRef.startDate;
        this.endDate = appointmentCollectionRef.endDate;
        this.local= appointmentCollectionRef.local;
        this.tipo = appointmentCollectionRef.tipo;
    }

        
   
   
    // função para criar um novo compromisso e salvar no banco de dados
    async function createAppointment () {
        const newAppointment = new type(arguments); 
         await addDoc(appointmentCollectionRef, {
            startDate, endDate, local, tipo
        })
        console.log(newAppointment)
    }

    // função para deletar compromisso assincronamente 
    async function deleteAppointment (id){
        const compromissoDoc  = doc(db, 'appointment' , id);
        await deleteDoc(compromissoDoc)
        console.log(compromissoDoc);
        
    }

    // função para criar alarme
    function alarme () {
        console.log({startDate})
    }

    //função para atualizar compromisso

    async function updateAppointment (id) {
        const compromissoDoc  = doc(db, 'appointment' , id);
        await updateDoc(compromissoDoc)
        console.log(compromissoDoc)
        
    }

    useEffect(() => {
        async function getAppointment () {
           const data = await getDocs(appointmentCollectionRef)
         setAppointment(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
       };
       getAppointment();
   }, [])  

    
    return (
        <div>
            <NavigatorUser/>
            
            <Container maxWidth='xs' >
            <Grid container justify='center'className='box' >
                
                <table>
                <tr>
                
                <td for='data' className='text-form-registrer'>
                    Data e horario inicial
                </td>
                <td for='data' required placeholder='2022-07-12T09:45' value={this.startDate} onChange={e => this.setStartDate(e.target.value)}/>

                </tr>

                <tr>

                <td for='endTime' className='text-form-registrer'>
                    Data final e horario final
                </td >
                <td for='endTime' required placeholder='2022-07-12T11:00' value={this.endDate} onChange={e => this.setEndDate(e.target.value)}/>

                </tr>
                
                <tr>
                    <td for='local' className='text-form-registrer'>
                    Local
                </td>
                <td for='local' required placeholder='escritório' value={this.local} onChange={e => this.setLocal(e.target.value)}/>
                </tr>
                
                <tr>
                <td for='tipo' className='text-form-registrer'>
                    Tipo de compromisso
                </td>
                <td for='tipo' required placeholder='reunião' value={this.tipo} onChange={e => this.setTipo(e.target.value)}/>
                </tr>

                </table>
                

                <Button variant='text' color='inherit'onClick={createAppointment}> Salvar </Button>
                <Button variant='text' color='inherit' onClick={deleteAppointment}> Deletar </Button>
                <Button variant='text' color='inherit' onClick={updateAppointment}> Atualizar </Button> 
                <Button variant='text' color='inherit'onClick={alarme}> Alarme </Button>
                
                </Grid>
            </Container>

            
            
        </div>
    )
}

export default openAppointment;