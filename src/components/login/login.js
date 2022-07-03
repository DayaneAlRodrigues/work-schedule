import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import LoginSenha from './LoginSenha';
import SaveIcon from '@material-ui/icons/Save';



class Login extends Component {
    
    state = {  } 
    render() { 
        return (
            <>
            <form>
                <h1>Entre com: </h1>
                <a href='https://www.google.com/intl/pt-BR/account/about/'> Google</a>
                <p> ou com : </p>
                <a href='https://pt-br.facebook.com/'>Facebook</a>
                <p>Ou entre por:</p>
                <LoginSenha/>

                <Button 
                startIcon={<SaveIcon/>}
                size='large' onClick= {()=> alert ('hello')} variant='contained' color='primary'> Entre </Button>


                <p>Cadastre aqui: </p>
                
                <LoginSenha/>

                <Button size='large' variant='contained' color='primary'> Entre </Button>

            </form>
            
            </>
        );
    }
}
 

export default Login;