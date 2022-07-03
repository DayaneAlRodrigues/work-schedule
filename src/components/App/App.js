import './reset.css';
import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Login from '../Pages/login';
import UserSchedule from '../Pages/user/User';
import Registrer from '../Pages/registrer';
import MenuIcon from '@material-ui/core/Menu'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';



function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
    
    
  );
}

export default App;
