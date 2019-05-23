import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Header extends Component{
    render(){
        return(
            <nav className={'navbar navbar-expand  navbar-dark bg-dark'}>
                <NavLink
                    className={'navbar-brand'}>
                    {`Roopika's Book Store`}
                </NavLink>
                <div className={'row navbar'} >
                    <ul className={'navbar-nav'}>
                        <li className={'row nav-item'}>
                            <NavLink to={'/Add'} className="nav-link" href="#">
                               {'Add Books'}
                            </NavLink>
                        </li>&emsp;
                        <li className={'nav-item'}>
                            <NavLink to={'/List'} className="nav-link" href="#">
                            {'List'}
                            </NavLink>
                        </li>
                    </ul>   
                </div>                
            </nav>
        )
    }
}

export default Header;