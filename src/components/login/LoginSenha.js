import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

class LoginSenha extends Component {
    state = {  } 
    render() { 
        return (
            <>
               <label for='username'> Login:  </label>
               <TextField variant='outlined' color='secondary' type='email' id='username' required placeholder="seuemail@dominio.com"/>
                <label for='senha'>Senha: </label>
                <TextField variant='outlined' color='secondary' type='senha' id='senha' required placeholder="xxxxxxxxx"/>
                
            </>
        
        );
    }
}
 
export default LoginSenha;