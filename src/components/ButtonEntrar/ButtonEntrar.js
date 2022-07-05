import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

class ButtonEntrar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
            <Button size='large' variant='contained' color='primary'>
                <Link to='../user'>
                   Entre 
                </Link>
            </Button>
            </>

            
         );
    }
}
 
export default ButtonEntrar;