import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import {Container} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

class LoginSenha extends Component {

   
    state = {  } 
    render() { 
        return (
            <>
            <ThemeProvider >
                <Container maxWidth='xs'>
                    <Grid container justify='center'>
                         <label for='username'> Login:  </label>
                <TextField variant='outlined' color='secondary' type='email' id='username' required placeholder="seuemail@dominio.com"/>
                    <label for='senha'>Senha: </label>
                    <TextField variant='outlined' color='secondary' type='senha' id='senha' required placeholder="xxxxxxxxx"/>
                    
                    </Grid>

                   
                </Container>
            </ThemeProvider>
            
            </>
        
        );
    }
}
 
export default LoginSenha;