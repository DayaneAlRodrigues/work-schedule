import React from 'react';
import { TextField , Container , ThemeProvider, Grid , Button } from '@material-ui/core';
import theme from '../../../../theme/theme'
import '../styles.css';
import ButtonEntrar from '../../../ButtonEntrar/ButtonEntrar';
import SignInGoogle from '../autenticacao/SignInGoogle';
import AutenticacaoFace from '../autenticacao/AutenticacaoFace';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';




const LoginSenha = () => {


        return (

            <ThemeProvider theme={theme}>
                <Container maxWidth='xs' >
                    
                    <Grid container justify='center'className='box' >
                <div className='form-login'>  
      
                     <label for='username'  className='text-form-login'> Login:  </label>
                <TextField variant='outlined' color='secondary' type='email' id='email' required placeholder="seuemail@dominio.com"/>
                    <label for='senha'  className='text-form-login'>Senha: </label>
                <TextField variant='outlined' color='secondary' type='password' id='password' required placeholder="xxxxxxxxx"/>
                </div> 
            </Grid> 
                <ButtonEntrar id='signIn'/>
                <Button variant='text' color='inherit' id='singnUp'>
                    <CheckSharpIcon fontSize='small' />
                    <p>  Cadastre-se </p>
                   </Button>
                <SignInGoogle/> 
                <AutenticacaoFace />
               
                                   
                    
                </Container>
            </ThemeProvider>
        
        );
    }

 
export default LoginSenha;