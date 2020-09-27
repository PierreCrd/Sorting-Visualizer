import React,{Component} from 'react';
import './SwitchButton.css'

class Switch extends Component {

    constructor ( props ) {
        super( props );
		
		this.state = {
			isChecked: false
		}
    }
	

    render () {

        return(
            <div className="switch-container">
                <label>
                    <input checked={ this.state.isChecked } onChange={ this.handleChange } className="switch" type="checkbox" />
                    <div>
              
                        <div></div>
                    </div>
                </label>
            </div>
        );
    }


    handleChange =  () => {
    	this.props.modeFunction()
		this.setState( { isChecked: !this.state.isChecked } );
    }

}

export default Switch