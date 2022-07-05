import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import LoginSenha from './LoginSenha';
import {Link} from 'react-router-dom';
import { Grid } from '@material-ui/core';
import './styles.css';
import GoogleLogin from 'react-google-login';

class Login extends Component {
    const [name , setName] = useState()
    const [email , setEmail] = useState()
    const [profilePic, setProfilePic] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState()

    const responseGoogle = (response) => {

    }
     
    render() { 
        return (
            <>
            <Grid container justifyContent='center'>
                <form>
                <section className='autenticacao'>
                    <h1>Entre com: </h1>
                    <GoogleLogin
                    clientId='521347212984-ks1bdv1ul3hg8vl4odq4ou794bk9mkku.apps.googleusercontent.com' 
                    buttonText='Continuar com o Google'
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}/>
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