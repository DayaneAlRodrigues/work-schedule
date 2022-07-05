import React, { useState } from 'react';
import LoginSenha from './LoginSenha';
import { Grid } from '@material-ui/core';
import './styles.css';
import GoogleLogin from 'react-google-login';
import ButtonEntrar from '../../ButtonEntrar/ButtonEntrar';
import {Link} from 'react-router-dom';

function Login () {
   
    const [name , setName] = useState()
    const [email , setEmail] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const responseGoogle = (response) => {
        const {profileObj} = {name, email } = response;
        setName(name);
        setEmail(email);
        setIsLoggedIn(true);
      } 
        return (
            <div>
            <Grid container justifyContent='center'>
                <form>
                <section className='autenticacao'>
                   <div> 
                    <GoogleLogin
                    clientId='521347212984-ks1bdv1ul3hg8vl4odq4ou794bk9mkku.apps.googleusercontent.com' 
                    buttonText='Continuar com o Google'
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}/>

                    {isLoggedIn ? <div>
                        <Link to='../user'/>
                    </div> : ''}
 
                    </div>
                    <div>
                        <p> ou com : </p>
                        <a href='https://pt-br.facebook.com/'>Facebook</a>
                    </div>
                    
                </section>   
                    
                <LoginSenha/>

                <ButtonEntrar/>

                <p>Cadastre aqui: </p>
                
                <LoginSenha/>

                <ButtonEntrar/>

            </form>
            </Grid>
            
            
            </div>
        );
    
}
 

export default Login;