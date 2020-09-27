import React,{Component} from 'react';
import './App.css';
import Bars from './Components/Bar.jsx'
import Switch from "./Components/SwitchButton"



const DARK_COLOR = 'rgba(40,40,50,0.95)'
const LIGHT_COLOR = 'rgba(240,240,240,0.95)'

class App extends Component {

	state = {backgroundColor: LIGHT_COLOR}

	getDarkMode = () => {
		if (this.state.backgroundColor === LIGHT_COLOR){
			this.setState({
				backgroundColor: DARK_COLOR
			})
		} else {
			this.setState({
				backgroundColor: LIGHT_COLOR
			})			
		}

	}

	render(){
	  return (
	    <div className = "App" style = {{backgroundColor: this.state.backgroundColor}}>
		    <div className = "tool mb-0">
		    	<h1 className = "myFont"> Sorting Visualizer </h1>
		    	<Switch modeFunction = {this.getDarkMode}/>
		    </div>
		    <Bars/>
	      	
	    </div>
	  );
	}


}

export default App;
