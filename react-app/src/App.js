import React, {Component, button} from 'react';
import './App.css';
import Home from './components/Home'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allData: [],
            action1: 0,
            index: '',
            HomeLink :'HomeData'
        }
    }

    componentDidMount() {
        this.refs.name.focus();
    }

    submitVal = (e) => {
        e.preventDefault();
        let name = this.refs.name.value;
        let email = this.refs.email.value;
        let Data = this.state.allData;

        if (this.state.action1 === 0) {
            let data = {
                name, email
            };

            Data.push(data);

        } else {
            let index = this.state.index;
            Data[index].name = name;
            Data[index].email = email;
        }


        this.setState({
            allData: Data
        });

        this.refs.myForm.reset();

    };

    editVal = (i) => {
        let editdata = this.state.allData[i];
        this.refs.name.value = editdata.name;
        this.refs.email.value = editdata.email;

        this.setState({
            action1: 1,
            index: i,


        })

    };

    deleteVal = (i) => {
        let datas = this.state.allData;

        datas.splice(i, 1);
        this.setState({
            allData: datas,

        });
        this.refs.myForm.reset();
    };

    clickchange=(data)=>{
        this.setState({
            HomeLink:data
        });
    };


    render() {
        let variavle = this.state.allData
        return (
            <div className="App">

             <p>{this.state.HomeLink}</p>
              <Home
                  name={this.state.HomeLink}
                  onClick={(data)=>this.clickchange(data)}
              />
                <form ref="myForm">
                    <input type="text" ref="name" placeholder="EnterName"/>
                    <input type="text" ref="email" placeholder="EnterEmail"/>
                    <input onClick={this.submitVal} type="submit" value="sumbit"/>
                </form>

                <ul>
                    {
                        variavle.map((data, i) => {
                            return (
                                <div>
                                    <div className="displayInline">
                                        <li key={i}> {i + 1} . {data.name} | {data.email}
                                            <button onClick={() => this.editVal(i)}> Edit</button>
                                            <button onClick={() => this.deleteVal(i)}> Delete</button>

                                        </li>

                                    </div>
                                </div>

                            )
                        })
                    }


                </ul>


            </div>
        );
    }
}

export default App;
