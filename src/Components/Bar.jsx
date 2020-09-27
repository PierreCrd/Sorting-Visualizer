import React,{Component} from "react";
import { Button, Dropdown, DropdownButton } from 'react-bootstrap'
import './Bar.css'
import bubbleSortAnimation from "./SortingAlgorithms/BubbleSort"
import InsertionSort from "./SortingAlgorithms/insertionSort"
import MergeSortAnimation from "./SortingAlgorithms/mergeSort"
import QuickSortAnimation from "./SortingAlgorithms/QuickSort"



var idx1 = -1
var idx2 = -1

class Bars extends Component {

	constructor(props){
		super(props)

		this.bubbleRef = React.createRef()
		this.insertionRef = React.createRef() 
		
		const myList= []
		for (let i = 0; i<6; i++){
			const newNumber = Math.floor(270*Math.random() + 270)
			myList.push(newNumber)
		}  
		this.state = {
			List: myList,
			size: 6,
			possibleSize: [6,10,30,50,100,200],
			animationSpeed: 300,
			idx1:-1,
			idx2:-1
		} 
	}

	generateArray = () => {
		this.setState({
			List:[]
		})
		setTimeout(() => {
			const newList = []
			for (let i = 0; i<this.state.size; i++){
				const newNumber = Math.floor(270*Math.random() + 270)
				newList.push(newNumber)
			}
			this.setState({
				List: newList
			})
		}, 100)

	}

	handleSizeChange = (newSize) => {
		this.setState({
			List:[]
		})
		setTimeout(() => {
			this.setState ({
				size: newSize,
				animationSpeed: 70000/newSize**2
			})
			this.generateArray()
		}, 100)
		
	}

	createBar = (height, Index) => {
		return <div 
			className = "array-bar" 
			style={{height:height}} 
			key = {Index} 
			draggable = "true" 
			onDragStart = {() => {this.handleDrag(Index)}} 
			onDragOver = {() => {this.handleDrop(Index)}}
			onDragEnd = {this.handleEndDrag}/>
	}

	handleEndDrag = () => {
		const myList = this.state.List
		const temp = myList[idx1]
		myList[idx1] = myList[idx2]
		myList[idx2] = temp
		this.setState({
			List: myList
		})

	}

	handleDrag = (index) => {
		idx1 = index
		document.addEventListener("dragenter", function(event) {
		  if ( event.target.className == "array-bar" ) {
		    event.target.style.border = "7px dotted rgba(30, 210, 130,1)";
		  }
		});
		document.addEventListener("dragleave", function(event) {
		  if ( event.target.className == "array-bar" ) {
		    event.target.style.border = "";
  }
});
	}

	handleDrop = (index) => {
		idx2 = index


	}

	bubbleSort = () => {
		const myList = this.state.List
		Animation = bubbleSortAnimation(myList);
		for (let i = 0; i<Animation.length; i++){
			const arrayBars = document.getElementsByClassName('array-bar')
			const idx1 = Animation[i][0]
			const idx2 = Animation[i][1]
			const barOneStyle = arrayBars[idx1].style
			const barTwoStyle = arrayBars[idx2].style
			if (Animation[i][2] === 'swap'){
				setTimeout(() => {	
					const temp = barOneStyle.height
					barOneStyle.height = barTwoStyle.height 
					barTwoStyle.height = temp
					barOneStyle.backgroundColor = Animation[i][3]
					barTwoStyle.backgroundColor = Animation[i][3]

				}, (i)*this.state.animationSpeed)
			} else {
				setTimeout(() => {
					barOneStyle.backgroundColor = Animation[i][2]
					barTwoStyle.backgroundColor = Animation[i][2]
				}, (i)*this.state.animationSpeed)
				 
			}
		}
	}


	insertionSort = () => {
		const myList = this.state.List
		Animation = InsertionSort(myList);
		for (let i = 0; i<Animation.length; i++){
			const arrayBars = document.getElementsByClassName('array-bar')
			if (Animation[i][1] === 'highlight'){
				const idx1 = Animation[i][0]
				const barStyle = arrayBars[idx1].style
				setTimeout(() => {
					barStyle.backgroundColor = Animation[i][2]
				}, i*this.state.animationSpeed)
			} else {
				const idx1 = Animation[i][0]
				const idx2 = Animation[i][1]
				const barOneStyle = arrayBars[idx1].style
				const barTwoStyle = arrayBars[idx2].style
				if (Animation[i][2] === 'swap'){
					setTimeout(() => {	
						const temp = barOneStyle.height
						barOneStyle.height = barTwoStyle.height 
						barTwoStyle.height = temp
						barOneStyle.backgroundColor = Animation[i][3]
						barTwoStyle.backgroundColor = Animation[i][3]

					}, i*this.state.animationSpeed)
				} 
				else {
					setTimeout(() => {
						barOneStyle.backgroundColor = Animation[i][2]
						barTwoStyle.backgroundColor = Animation[i][2]
					}, i*this.state.animationSpeed)	 
				}
			}
		}

	}


	mergeSort = () => {
		const myList = this.state.List
		const animation = MergeSortAnimation(myList)
		for (let i = 0 ; i<animation.length ; i++){
			const arrayBars = document.getElementsByClassName('array-bar')
			if (animation[i][0] === 'replace') {
				const idx = animation[i][1]
				const newHeight = animation[i][2]
				const barStyle = arrayBars[idx].style 
				setTimeout( () => {
					barStyle.height = `${newHeight}px`  
				}, (i+1)*this.state.animationSpeed*2)
			} else {
				const idx1 = animation[i][1]
				const idx2 = animation[i][2]
				const barOneStyle = arrayBars[idx1].style
				const barTwoStyle = arrayBars[idx2].style
				setTimeout(() => {
					barOneStyle.backgroundColor = animation[i][3]
					barTwoStyle.backgroundColor = animation[i][3]
				}, (i+1)*this.state.animationSpeed*2)
			}
		}
	}

	quickSort = () => {
		const myArray = this.state.List
		console.log(myArray)
		const animation = QuickSortAnimation(myArray)
		for (let i = 0; i<animation.length; i++){
			const arrayBars = document.getElementsByClassName('array-bar')
			const idx1 = animation[i][1]
			const idx2 = animation[i][2]
			const barOneStyle = arrayBars[idx1].style
			const barTwoStyle = arrayBars[idx2].style
			if (animation[i][0] == "highlight"){
				setTimeout(() => {
					barOneStyle.backgroundColor = animation[i][3]
					barTwoStyle.backgroundColor = animation[i][3]
				}, i*this.state.animationSpeed)
			} else {
				setTimeout(() => {	
					const temp = barOneStyle.height
					barOneStyle.height = barTwoStyle.height 
					barTwoStyle.height = temp
					barOneStyle.backgroundColor = animation[i][3]
					barTwoStyle.backgroundColor = animation[i][3]
				}, i*this.state.animationSpeed)
			}
		}
	}


	componentDidUpdate(prevProps, prevState) {
		if (prevState.size !== this.state.size) {
			this.generateArray()
		}
	}


	render(){

		return(
			<div>
				<div className = 'style-btn-group  btn-group'>
					<Button className = "button-generate" onClick = {this.generateArray}>
						Generate a new array! 
					</Button>
					<Button className = "button-sort" onClick = {this.bubbleSort}>
						BubbleSort !
					</Button>	
					<Button className = "button-sort" onClick = {this.insertionSort}>
						InsertionSort !
					</Button>
					<Button className = "button-sort" onClick = {this.mergeSort}>
						MergeSort !
					</Button>		
					<Button className = "button-sort" onClick = {this.quickSort}>
						QuickSort !
					</Button>
					<DropdownButton  className = "button-color-2" size = "lg" variant = "info" title=" Select the array size ">
					  {this.state.possibleSize.map( 
					  	(size, index) => (<Dropdown.Item 
					  			key = {index}
						  		onClick = {() => {this.handleSizeChange(size)}}> 
						  			{size} items 
						  		</Dropdown.Item>)) 
					  		}
					</DropdownButton>
				</div>
				<div className = 'array-container' >
					{
						this.state.List.map( (height, index) => this.createBar(height,index) )
					}
				</div>
			</div>
		)
	}
}

export default Bars

