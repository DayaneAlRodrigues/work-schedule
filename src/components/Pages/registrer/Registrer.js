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
                    Data e horario inicial
                </label>
                <TextField for='data' required placeholder='2022-07-12T09:45'/>

                <label for='endTime' className='text-form-registrer'>
                    Data final e horario final
                </label >
                <TextField for='endTime' required placeholder='2022-07-12T11:00'/>

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