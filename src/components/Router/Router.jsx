import React from 'react';
import {Routes, Route} from 'react-router-dom'
import UserSchedule from '../Pages/user/User'
import RegisterSchedule from '../Pages/registrer'
import Login from '../Pages/login';
import DayViewUser from '../Pages/user/DayView';
import MonthViewUser from '../Pages/user/MonthView';


function Router (){
	
	return (

		
		<Routes>
			<Route path='/' element={<Login/>}/>
			
			<Route  path='/user' element={<UserSchedule/>}/>
			
			<Route path='/user/DayView' element={<DayViewUser/>}/>

			<Route path='/user/MonthView' element={<MonthViewUser/>}/>
			
			<Route  path='/registrer' element={<RegisterSchedule/>}/>
				
		</Routes>

		
        )
	}	

export default Router;