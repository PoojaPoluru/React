import React,{Component} from 'react';
import PropTypes from 'prop-types';
function SelectLanguage(props){
    var languages=['All','JavaScript','Ruby','Java','CSS','Python'];
    return(

        <ul className="languages">
            {languages.map(function(lang){
                return(
                    <li
                        style={lang===props.selectedLanguage?{color:'#d0021b'}:null}
                        onClick={props.onSelect.bind(null,lang)}
                        key={lang}>
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
            selectedLanguage:'All'
        };
        this.updatedLanguage=this.updatedLanguage.bind(this);
    }
    updatedLanguage(lang){
        this.setState(function(){
            return{
                selectedLanguage:lang
            }
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