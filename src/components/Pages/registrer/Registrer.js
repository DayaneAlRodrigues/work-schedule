import { Button, FormControl, TextField, Grid, Container} from '@material-ui/core';
import React from 'react';
import './style.css'

const Registrer = () => {
    return (
        <div>
            <Container maxWidth='xs' >
            <Grid container justify='center'className='box' >
                <FormControl>
                <label for='data' className='text-form-registrer'>
                    Data
                </label>
                <TextField for='data' required placeholder='dd/mm/aaaa'/>

                <label for='startTime' className='text-form-registrer'>
                    Horario inicial
                </label>
                <TextField for='startTime' required placeholder='00:00 AM/PM'/>

                <label for='endTime' className='text-form-registrer'>
                    Duração
                </label >
                <TextField for='endTime' required placeholder='00:00 AM/PM'/>

                <label for='local' className='text-form-registrer'>
                    Local
                </label>
                <TextField for='local' required placeholder='escritório'/>

                <label for='tipo' className='text-form-registrer'>
                    Tipo de compromisso
                </label>
                <TextField for='tipo' required placeholder='reunião'/>

                <Button variant='text' color='inherit'> Salvar </Button>
                <Button variant='text' color='inherit'> Deletar </Button>
                <Button variant='text' color='inherit'> Alarme </Button>
                

                
                </FormControl>
                </Grid>
            </Container>
            
        </div>
    )
}


 
export default Registrer;