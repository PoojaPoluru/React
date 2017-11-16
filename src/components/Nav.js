/**
 * Created by Pooja on 26-10-2017.
 */
import React from 'react';
import {NavLink as NavLink} from'react-router-dom';

function Nav(){
    return(
        <ul className="nav">
            <li className="home-nav">
                <NavLink exact activeClassName="active" to="/">Home
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/battle">Battle
                </NavLink>
            </li>

            <li>
                <NavLink activeClassName="active" to="/popular">Popular
                </NavLink>
            </li>


        </ul>
    )

}
export default Nav;
