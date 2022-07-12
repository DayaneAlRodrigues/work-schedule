import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './style.css';

const NavigatorUser = () => {

    return (
        <div className='navigator'>
           <Link to = '/registrer'><Button> Criar Compromisso </Button></Link> 
           <Link to = '/user/DayView'><Button> Dia </Button></Link>
           <Link to = '/user'><Button> Semana </Button></Link>
           <Link to = '/user/MonthView'><Button> Mês</Button></Link> 
           <Link to = '/'><Button> Sair </Button></Link>
        </div>
    )
}

export default NavigatorUser;