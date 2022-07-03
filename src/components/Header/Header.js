import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Header extends Component {
    state = {  } 
    render() { 
        return (
            <nav>
						<ul>
							<li><Link to='../Pages/login'>Login</Link></li>
							<li><Link to='../Pages/user'>User</Link></li>
						</ul>
					</nav>
        );
    }
}
 
export default Header;