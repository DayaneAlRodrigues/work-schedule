import { Button, FormControl, TextField, Grid, Container} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './style.css'
import {  db} from '../../Firebase/firebase'
import { collection, getDocs } from 'firebase/firestore';


const Registrer = () => {

    const [startDate, setStartDate ]=useState('')
    const [endDate, setEndDate ]=useState('')
    const [local, setLocal ]=useState('')
    const [tipo, setTipo ]=useState('')
    const [compromisso, setCompromisso ]=useState([])


    
    const appointmentCollectionRef = collection(db, 'appointment');
    useEffect(() => {
        const getAppointment = async () => {
            const data = await getDocs(appointmentCollectionRef)
            console.log(data);
            setCompromisso(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        }
    }, [])
    return (
        <div>
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

                <Button variant='text' color='inherit'> Salvar </Button>
                <Button variant='text' color='inherit'> Deletar </Button>
                <Button variant='text' color='inherit'> Alarme </Button>
                
                </FormControl>
                </Grid>
            </Container>

            <div>
                <ul>
                    {compromisso.map ((compromisso) => {
                        return (
                            <div key={compromisso.id}>
                                <li>{compromisso.startDate}</li>
                                <li>{compromisso.endDate}</li>
                                <li>{compromisso.local}</li>
                                <li>{compromisso.tipo}</li>

                            </div>
                            
                        )
                    })}
                </ul>
            </div>
            
        </div>
    )
}


 
export default Registrer;