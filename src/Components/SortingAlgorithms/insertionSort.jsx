import React, {Component} from 'react'
import Popup from "../Pop-up/Pop-up"
import {Button} from "react-bootstrap"
import '../Bar.css'


export default function InsertionSort(currentList){

	const successColor = 'rgba(50, 230, 150,0.8)'
	const dangerColor = 'rgba(250, 128, 114,0.9)'
	const currentColor = 'rgba(30, 165, 251,0.95)'
	const regularColor = 'rgba(116, 208, 241,0.8)'
	let sizeList = currentList.length 
	const animation = []

	for (let j = 1; j<sizeList; j++){
		let i = j;
		animation.push([i, 'highlight', currentColor])
		while (i>0 && currentList[i] < currentList[i-1]){
			animation.push([i, i-1, dangerColor])
			animation.push([i, i-1, 'swap', successColor])
			animation.push([i, i-1, regularColor])
			var temp = currentList[i]
			currentList[i] = currentList[i-1]
			currentList[i-1] = temp
			i--
		}
		animation.push([j, 'highlight', regularColor])
	}

	return (animation)
}
