import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import {Container} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import theme from '../../../theme/theme'
import './styles.css';
import { Label } from '@material-ui/icons';

class LoginSenha extends Component {
    render() { 
        return (

            <ThemeProvider theme={theme}>
                <Container maxWidth='xs'>
                    <Grid container justify='center'>
                <div className='form-login'>    
                     <label for='username' className='text-form-login'> Login:  </label>
                <Label/><TextField variant='outlined' color='secondary' type='email' id='username' required placeholder="seuemail@dominio.com"/>
                    <label for='senha' className='text-form-login'>Senha: </label>
                <Label/><TextField variant='outlined' color='secondary' type='senha' id='senha' required placeholder="xxxxxxxxx"/>
                </div>  
                   
                    </Grid>
                </Container>
            </ThemeProvider>
        
        );
    }
}
 
export default LoginSenha;