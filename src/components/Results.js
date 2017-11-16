/**
 * Created by Pooja on 08-11-2017.
 */
import React,{Component} from 'react';
import queryString from 'query-string';
import {Link as Link} from 'react-router-dom';
import api from '../utils/api.js';

class Results extends Component{
    constructor(props){
        super(props);

        this.state={
            winner:null,
            loser:null,
            loading:true,
            error:null,
        }
    }
    componentDidMount() {
        var users = queryString.parse(this.props.location.search);

        api.Battle([
            users.playerOneName,
            users.playerTwoName
        ]).then(function (results) {
            if(results===null){
                return this.setState(function(){
                    return{
                        error:'There is an error!',
                        loading:false,
                    }
                });
            }
            this.setState(function(){
                return {
                    error:null,
                    winner:results[0],
                    loser:results[1],
                    loading:false,
                }
            });
        }.bind(this));

    }
    render(){
        var error=this.state.error;
        var winner=this.state.winner;
        var loser=this.state.loser;
        var loading=this.state.loading;

        if(loading===true){
           return  <p>Loading</p>
        }

        if(error){
            return(

                <div>
                    <p>{error}</p>
                    <Link to="/battle">Reset</Link>
                </div>
            )
        }

        return(
            <div>
                {JSON.stringify(this.state,null,2)}
            </div>
        )
    }
}
export default Results;