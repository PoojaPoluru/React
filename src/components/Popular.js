import React,{Component} from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api.js'
function SelectLanguage(props){
    var languages=['All','JavaScript','Ruby','Java','CSS','Python'];
    return(

        <ul className="languages">
            {languages.map(function(lang){
                return(
                    <li
                        style={lang===props.selectedLanguage?{color:'#d0021b'}:null}
                        onClick={props.onSelect.bind(null,lang)}
                        key={lang}
                    >
                        {lang}
                    </li>
                )})
            }
        </ul>
    )
}

SelectLanguage.propTypes={
 selectedLanguage:PropTypes.string.isRequired,
    onSelect:PropTypes.func.isRequired,

}

class Popular extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedLanguage:'All',
            repositories:null
        };
        this.updatedLanguage=this.updatedLanguage.bind(this);
    }
    componentDidMount(){
        this.updatedLanguage(this.state.selectedLanguage);

    }
    updatedLanguage(lang){
        this.setState(function(){
            return{
                selectedLanguage:lang,
                repositories:null
            }
        });
        api.fetchPopularRepos(lang)
            .then(function(repositories){
                console.log(repositories);
            })

    }
    render(){
        return(
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updatedLanguage}/>
            </div>
        )
    }

}

export default Popular;