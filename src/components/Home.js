/**
 * Created by Pooja on 26-10-2017.
 */
import React,{Component} from 'react';
import {Link as Link} from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div className="home-container">
                <h1>GitHub Battle:Battle with your friends!!!</h1>
                <Link className="button" to="/battle">
                    Battle
                </Link>

            </div>

        )
    }
}
export default Home;