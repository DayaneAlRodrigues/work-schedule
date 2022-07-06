import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import {Container} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import theme from '../../../theme/theme'
import './styles.css';
import Autenticacao from  '../login/autenticacao/autenticacao'
import ButtonEntrar from '../../ButtonEntrar/ButtonEntrar';
import {Link} from 'react-router-dom';


class LoginSenha extends Component {
    render() { 
        return (

            <ThemeProvider theme={theme}>
                <Container maxWidth='xs' >
                    
                    <Grid container justify='center'className='box' >
                <div className='form-login'>    
                     <label for='username' className='text-form-login'> Login:  </label>
                <TextField variant='outlined' color='secondary' type='email' id='username' required placeholder="seuemail@dominio.com"/>
                    <label for='senha' className='text-form-login'>Senha: </label>
                <TextField variant='outlined' color='secondary' type='senha' id='senha' required placeholder="xxxxxxxxx"/>
                </div> 
            </Grid> 
                <ButtonEntrar/>
                <p className='cadastre-se'><Link to='../Cadastre/Cadastre'> Cadastre aqui!</Link> </p>
                <Autenticacao/> 
                                   
                    
                </Container>
            </ThemeProvider>
        
        );
    }
}
 
export default LoginSenha;