import { Button } from '@material-ui/core';
import React from 'react';
import {auth, db , firebase} from '../../../Firebase/firebase'
import GoogleIcon from '@mui/icons-material/Google';
import './style.css'
import { useNavigate } from 'react-router-dom';

const SignInGoogle = () => {
    
    
    const SignInWithFirebase = () => {
        
        var google_provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(google_provider)
        .then((result) => {
          //  console.log(result);
          //  result.useNavigate() = () => { useNavigate(+1)}
        })
        .catch((err) => {
            console.log(err);
        })

    }

    return (
        <div>
            
            <Button variant='text' color='inherit' onClick={SignInWithFirebase} id='signIn' >
                
            <GoogleIcon fontSize='small'/>
           <p>Continue com o Google </p> </Button>

        </div>
        
    )
}
export default SignInGoogle;