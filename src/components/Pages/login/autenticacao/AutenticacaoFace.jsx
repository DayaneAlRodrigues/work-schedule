import React from 'react';
import { Button } from '@material-ui/core';
import UserSchedule from '../../user/User';
import {auth, db , firebase} from '../../../Firebase/firebase'
import FacebookIcon from '@mui/icons-material/Facebook';
import './style.css'

const AutenticacaoFace = () => {

    const SignInWithFirebase = () => {
        
        var facebook_provider = new firebase.auth.FacebookAuthProvider();
        auth.signInWithPopup(facebook_provider)
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        })

    }

            return (
                <div>
                    <Button variant='text' color='inherit' onClick={SignInWithFirebase} id='signIn'>
                        <FacebookIcon fontSize='small' />
                       <p> Continue com o Facebook </p> </Button>
                </div>
                
            )
        
    
}
export default AutenticacaoFace;