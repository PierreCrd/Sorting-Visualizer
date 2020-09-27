import React, {Component} from 'react'
import Popup from "../Pop-up/Pop-up"
import {Button} from "react-bootstrap"
import '../Bar.css'


export default function bubbleSortAnimation(currentList) {

		const successColor = 'rgba(50, 230, 150,0.8)'
		const dangerColor = 'rgba(255,60,60,0.8)'
		const currentColor = 'rgba(0,240,205,0.8)'
		let sizeList = currentList.length
		let j = 0 
		let notSorted = true
		const animation = []
		while (notSorted){
			notSorted = false
			for (let i = 1; i<sizeList-j; i++ ){
				if (currentList[i]<currentList[i-1]){
					notSorted = true
					var temp = currentList[i]
					currentList[i] = currentList[i-1]
					currentList[i-1] = temp
					animation.push([i,i-1, dangerColor])
					animation.push( [i,i-1,'swap' , successColor] )
					animation.push([i,i-1, 'rgba(116, 208, 241,0.8)'])
				} else {
					
					animation.push([i,i-1, successColor])
					animation.push([i,i-1,'rgba(116, 208, 241,0.8)'])
				}
			}
			j++
		} 
		return (animation)
	}

	


	
