import React from "react"; 


export default function MergeSortAnimation(array) {
	let n = array.length
	if (n <= 1) {
		return []
	}
	const animation = []
	const auxArray = array.slice()
	mergeSortHelper(array, 0, n-1, auxArray, animation)
	return animation
}

const mergeSortHelper = (array, begin, end, auxArray, animation) => {
	if (begin === end) return 
	let pivotIndex = Math.floor((begin+end)/2)
	mergeSortHelper(auxArray, begin, pivotIndex, array, animation)
	mergeSortHelper(auxArray, pivotIndex +1, end, array, animation)
	mergeRoutine(array, begin, pivotIndex, end, auxArray, animation)
}

const mergeRoutine = (array, begin, pivotIndex, end, auxArray, animation) => {
	const dangerColor = 'rgba(30, 165, 251,0.95)'
	const regularColor = 'rgba(116, 208, 241,0.8)'
	let k = begin
	let l = begin
	let r = pivotIndex +1 
	while (l<=pivotIndex && r<=end){
		if (auxArray[l] <= auxArray[r]) {
			array[k] = auxArray[l]
			animation.push( ['compare', k , l, dangerColor] )
			animation.push( ['replace', k , auxArray[l]] )
			animation.push( ['compare', k , l, regularColor] )
			k++
			l++
		} else {
			array[k] = auxArray[r]
			animation.push( ['compare', k, r, dangerColor] )
			animation.push(['replace', k , auxArray[r]])
			animation.push( ['compare', k, r, regularColor] )
			k++
			r++
		}	
	}
	while (l <= pivotIndex) {
		array[k] = auxArray[l]
		animation.push( ['replace', k , auxArray[l]] )
		k++
		l++
	}
	while (r <= end) {
		array[k] = auxArray[r]
		animation.push(['replace', k , auxArray[r]])
		k++
		r++
	}
}