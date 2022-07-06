import './reset.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../Pages/login';
import UserSchedule from '../Pages/user/User';
import Registrer from '../Pages/registrer';
import  theme  from '../../theme/theme';
import	{ThemeProvider} from '@mui/material'
import Header from '../Header/Header';



function App() {
  return (
  <ThemeProvider theme={theme}>
    
	<BrowserRouter>
		
	<Header/>	        
    
	 <Routes>
			<Route path='/' element={<Login/>}/>
			
			<Route  path='/user' element={<UserSchedule/>}/>
			
			<Route  path='/registrer' element={<Registrer/>}/>
				
	</Routes>
		
    </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
