import React from 'react';
import {Routes, Route} from 'react-router-dom'
import UserSchedule from '../Pages/user'
import RegisterSchedule from '../Pages/registrer'
import Login from '../Pages/login';


function Router (){
	
	return (

		
			<Routes>
			<Route path='/' element={<Login/>}/>
			

			<Route  path='/user' element={<UserSchedule/>}/>
			
			
			<Route  path='/registrer' element={<RegisterSchedule/>}/>
				
			</Routes>

		
        )
	}	

export default Router;