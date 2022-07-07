import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import './style.css'
import theme from '../../theme/theme';
import { ThemeProvider } from '@mui/private-theming';
import UserSchedule from '../Pages/user/User'
import { Redirect } from 'react-router'

class ButtonEntrar extends Component {

    constructor(props) {
        super(props);
    }
    state = {  }

    render() { 
        return ( 
            <>
            <ThemeProvider theme={theme}>
                <Link  to='../user/User'>
                <Button fullWidth='300vh'  size='large' variant='contained' color='primary'>
                
                  <p className='nome-button'> Entre </p>
                
                </Button>
                </Link>
            </ThemeProvider>
            
            </>

            
         );
    }
}
 
export default ButtonEntrar;