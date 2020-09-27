import React from "react";


const successColor = 'rgba(166, 255, 241, 0.8)'
const dangerColor = 'rgba(250, 128, 114, 0.9)'
const currentColor = 'rgba(116, 208, 241, 1)'
const regularColor = 'rgba(116, 208, 241,0.8)'

export default function QuickSortAnimation(array) {
	let n = array.length
	const animation = Array()
	QuickSortHelper(array, 0 , n-1, animation)
	return animation
}


function QuickSortHelper(array, begin, end, animation){ 
	if (end - begin <= 0){
		return (null)
	}
	let randomIndex = Math.floor((end +1 - begin)*Math.random() + begin)  // end is included in the random choice
	let newPivotIndex = partitioningSubRoutine(array, randomIndex, begin, end, animation)
	if (newPivotIndex > begin) {
		QuickSortHelper(array, begin, newPivotIndex - 1 , animation)
	}
	if (newPivotIndex < end) {
		QuickSortHelper (array, newPivotIndex +1, end, animation)
	}
}


function partitioningSubRoutine (array, pivotIndex, begin, end, animation){
	let i = begin -1 
	swap(array, pivotIndex, end)
	animation.push (["highlight", pivotIndex , end, dangerColor])
	animation.push(["swap", pivotIndex, end, successColor])
	animation.push (["highlight", pivotIndex , end, regularColor])
	let pivot = array[end]
	for (let j = begin; j<end; j++){
		if (array[j] < pivot){
			i++
			swap(array, i, j)
			animation.push (["highlight", i , j, dangerColor])
			animation.push(["swap", i, j, successColor])
			animation.push (["highlight", i , j, regularColor])
		}
	}
	swap (array, i+1, end)
	animation.push (["highlight", i+1 , end, dangerColor])
	animation.push(["swap", i+1, end, successColor])
	animation.push (["highlight", i+1 , end, regularColor])
	return i+1
}

function swap(array, i, j){
	let temp = array[i]
	array[i] = array[j]
	array[j] = temp
}













