import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import LoginSenha from './LoginSenha';
import {Link} from 'react-router-dom';
import { Grid } from '@material-ui/core';
import './styles.css'



class Login extends Component {
     
    render() { 
        return (
            <>
            <Grid container justifyContent='center'>
                <form>
                <section className='autenticacao'>
                    <h1>Entre com: </h1>
                    <a href='https://www.google.com/intl/pt-BR/account/about/'> Google</a>
                    <p> ou com : </p>
                    <a href='https://pt-br.facebook.com/'>Facebook</a>
                </section>
                
                <p>Ou entre por:</p>
                <LoginSenha/>

                <Button 
                size='large' variant='contained' color='primary'>
                    <Link to='../user'>
                       Entre 
                    </Link>
                      </Button>


                <p>Cadastre aqui: </p>
                
                <LoginSenha/>

                <Button size='large' variant='contained' color='primary'>
                <Link to='../user'>
                       Entre 
                    </Link></Button>

            </form>
            </Grid>
            
            
            </>
        );
    }
}
 

export default Login;