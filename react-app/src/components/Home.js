import React, {Component, button} from 'react';
import PropTypes from 'prop-types';



export default class Home extends Component{
    constructor(props) {
        super();
        this.state = {
            //defaultHome:props.name,
            homeLink:props.name


        }
    }

    clickTochange=()=>{
     this.props.onClick(this.state.homeLink)

    }

    onChangemethod=(event)=>{
        this.setState({
            homeLink:event.target.value

        });
    }

    render(){
        return(
            <div>
                <input  type="text"  value={this.state.homeLink} onChange={(event)=>this.onChangemethod(event)}/>
                <input type={"submit"} value={"submit"}  onClick={this.clickTochange}/>

            </div>

        )

    }


};

Home.PropTypes ={
    name : PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
};
