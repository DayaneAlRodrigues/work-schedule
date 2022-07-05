import './reset.css';
import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Login from '../Pages/login';
import UserSchedule from '../Pages/user/User';
import Registrer from '../Pages/registrer';
import MenuIcon from '@material-ui/core/Menu'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import  theme  from '../../theme/theme';
import	{ThemeProvider} from '@mui/material/styles'



function App() {
  return (
    <BrowserRouter>
		<ThemeProvider theme={theme}>
			<header>
			<AppBar color='transparent'>
				<Toolbar>
					<IconButton>
						<MenuIcon/>
					</IconButton>
					<Typography variant='h6'>
						Schedule Login
					</Typography>
				
							<Button >
								<Link to='/'>Login</Link>
								</Button>
								<Button>
									<Link to='../Pages/user'>User</Link>
								</Button>
							
				</Toolbar>
			</AppBar>
		</header>
          
        

      <Routes>
			<Route path='/' element={<Login/>}/>
			

			<Route  path='/user' element={<UserSchedule/>}/>
			
			
			<Route  path='/registrer' element={<Registrer/>}/>
				
			</Routes>
		</ThemeProvider>
		
    </BrowserRouter>
    
    
  );
}

export default App;
