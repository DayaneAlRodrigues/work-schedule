import React, { Component } from 'react';
import { AppBar,  IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/core/Menu'
import theme from '../../theme/theme'
import { ThemeProvider } from '@material-ui/core';


class Header extends Component {
    state = {  } 
    render() { 
        return (
			<ThemeProvider theme={theme}>
			  <AppBar color='transparent'>
				<Toolbar>
					<IconButton>
					<MenuIcon/>
					</IconButton>
					
                    <Typography variant='h6'>
						SCHEDULE 
					</Typography>				
							
				</Toolbar>
			</AppBar>
			</ThemeProvider>
            
        );
    }
}
 
export default Header;