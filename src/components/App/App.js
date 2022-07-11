import './reset.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import  theme  from '../../theme/theme';
import	{ThemeProvider} from '@mui/material'
import Header from '../Header/Header';
import Router from '../Router/Router';



function App() {
  return (
  <ThemeProvider theme={theme}>
    
	<BrowserRouter>
		
	<Header/>	        
    
	 <Router/>
		
    </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
