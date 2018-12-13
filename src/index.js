import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Components
import SignUp from './components/sign_up';
import Options from './components/options';
import Footer from './components/footer';
class App extends Component{
    state = {
        currval:"USD",
        valplan:"month"
    }
    currval = (e) =>{
        this.setState({currval:e.target.value});
    }
    valplan = (e) =>{
        var val = (e.target.checked?"year":"month");
        this.setState({valplan:val});
    }
    render(){
        return (
        <div>
            <SignUp currval={this.currval} valplan= {this.valplan}/>
            <Options currval={this.state.currval} valplan = {this.state.valplan}/>
            <Footer/>
        </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));