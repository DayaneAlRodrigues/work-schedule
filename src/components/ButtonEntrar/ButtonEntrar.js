import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import './style.css'
import theme from '../../theme/theme';
import { ThemeProvider } from '@mui/private-theming';
import UserSchedule from '../Pages/user/User'

class ButtonEntrar extends Component {

    [login , setLogin] = useState();
   // document.event.click.ButtonEntrar = <UserSchedule/>
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
            <ThemeProvider theme={theme}>

                <Button fullWidth='300vh'  size='large' variant='contained' color='primary'>
                <Link to='../user/User'>
                  <p className='nome-button'> Entre </p>
                </Link>
                </Button>

            </ThemeProvider>
            
            </>

            
         );
    }
}
 
export default ButtonEntrar;