import React from 'react';
import {Switch, Route} from 'react-router-dom'
import UserSchedule from '../Pages/user'
import RegisterSchedule from '../Pages/registrer'
import Login from '../Pages/login';


function Router (){
	
	return (
		<Switch>
			<Route exact path='../Pages/login'>
				<Login/> 
			</Route>

			<Route exact path='../Pages/user'>
				<UserSchedule/> 
			</Route>
			
			<Route exact path='../Pages/registrer'>
				<RegisterSchedule/> 
			</Route>
		</Switch>
        )
	}	
export default Router;