import React,{Component} from "react";
import {Modal, Button, Accordion, Card} from "react-bootstrap"
import './Pop-up.css'



export default class Popup extends Component {

	render(){
		return(
			<Modal aria-labelledby="contained-modal-title-vcenter" size = "lg" centered show = {true}>
			  <Modal.Header >
			    <Modal.Title>Quick explanation</Modal.Title>
			  </Modal.Header>

			  <Modal.Body>
			  	<h2> Algorithm description </h2>
			    <p> {this.props.text.algoExplanation} </p>
			  </Modal.Body>

			  <Accordion defaultActiveKey="0">
				  <Card>
				    <Card.Header>
				      <Accordion.Toggle as = {Card.Header} eventKey="0">
				        <h2> Time complexity analysis </h2>
				      </Accordion.Toggle>
				    </Card.Header>
				    <Accordion.Collapse eventKey="0">
				      <Card.Body> <p> {this.props.text.complexity} <font className = 'MathFont'> O(n<sup>2</sup>) </font> in terms of time complexity! </p></Card.Body>
				    </Accordion.Collapse>
				  </Card>
				  <Card>
				    <Card.Header>
				      <Accordion.Toggle as = {Card.Header} eventKey="1">
				        <h2> Still unclear ?</h2>
				      </Accordion.Toggle>
				    </Card.Header>
				    <Accordion.Collapse eventKey="1">
				      <Card.Body>{this.props.text.link}</Card.Body>
				    </Accordion.Collapse>
				  </Card>
				</Accordion>

			  <Modal.Footer>
			    <Button variant="primary" onClick = {this.props.sortFunction}> Got it! </Button>
			  </Modal.Footer>
			</Modal>
		)
	}
} 



