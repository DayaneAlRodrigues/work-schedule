import React from 'react';
import LoginSenha from './LoginSenha';
import { Grid } from '@material-ui/core';
import './styles.css';



function Login () {

      
        return (
            <div>
            <Grid container justifyContent='center' >
              <form>
                <div className='login'>
                    <LoginSenha/>
                </div> 

                </form> 
              
            </Grid>
            
            
            </div>
        );
    
}
 

export default Login;