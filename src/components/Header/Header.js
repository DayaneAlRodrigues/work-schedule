import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/core/Menu'


class Header extends Component {
    state = {  } 
    render() { 
        return (
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
        );
    }
}
 
export default Header;