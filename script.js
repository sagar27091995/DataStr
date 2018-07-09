//bubbleSort
// ascending
// var array = [1,3,2,4,6,5];
//  function bubbleSort(array){
//      var swap;
//      do{
//          swap=false;
//          for(var i=0; i<array.length; i++){
//              if(array[i]>array[i+1]){
//                  var temp = array[i];
//                  array[i] = array[i+1];
//                  array[i+1] = temp;
//                  swap = true;
//              }
//          }
//      }while(swap);
//  }
//  bubbleSort(array);
//  console.log(array)

//  descending
// var array = [1,3,2,4,6,5];
// var i;
// var j;
// var k;
// for(i=0;i<array.length;i++)
// {
//     for(j=i+1;j<array.length;j++)
//     {
//       if(array[i]<array[j])
//       {
//                 k=array[i];
//                 array[i]=array[j];
//                 array[j]=k;
//       }
//     }
// }
// console.log(array);

//selectionSort
// var array = [72, 54, 59, 30, 31, 78, 2, 77, 82, 72];

// function swap(a, b) {
//     array[i] = b;
//     array[num] = a;
// }
// //this loop shifs tht max data to last loop
// for (var i = array.length - 1; i > 0; i--) {
//     var num = 0;
//     //this loop finds the max data  
//     for (var j = 1; j <= i; j++) {
//         if (array[j] > array[num])
//             num = j;
//     }
//     swap(array[i], array[num])
// }
// console.log(array);

//Inserstion sort
// var array = [1,5,10,2,4,6,8,3,7];

// function InserstionSort(){
// for(var i=1; i<array.length; i++){
//     for(var j=0;j < i; j++){
//         if (array[i] < array[j]){
//             var temp = array.splice(i, 1);
//             array.splice(j,0,temp[0]);
//         }
//     }
// }
// return array;
// }
// InserstionSort();
// console.log(array);

//-------------------------Searching Algorithms------------------------

// Sequential Search
// function seqSearch(arr, result) {
//     for (var i = 0; i < names.length; ++i) {
//     if (names[i] == result) {
//     return true;
//     }
//     }
//     return false;
//     }
// var names = ["sagar","harish","ankit","rag"]
// var result = seqSearch(names, "oops");
// console.log(result);


//binary search

// var arr = [10,12,2,3,11,16,45,83]
// function binarySearch (arr, val) {
//     let start = 0;
//     let end = arr.length - 1;

//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);

//         if (arr[mid] === val) {
//             return mid;
//         }
//         if (val < arr[mid]) {
//             end = mid - 1;
//         } else {
//             start = mid + 1;
//         }
//     }
//     return -1;
// }
// console.log(binarySearch(arr, 11));

//MergeSort

// function MergeSort(left_side,right_side){
//     var i = 0;
//     var j = 0;
//     var result = [];

//     while (i < left_side.length || j < right_side.length){
//         if (i === left_side.length){
//             result.push(right_side[j]);
//             j++;
//         }else if (j === right_side.length || left_side[i] <= right_side[j]){
//             result.push(left_side[i]);
//             i++;   
//         }else{
//             result.push(left_side[j]);
//             j++;
//         }
//     }
//     return result;
// }
// console.log(MergeSort([1,3,4], [5,3,2]));


//Quick Sort

var myArray = [3, 0, 2, 5, -1, 4, 1 ];

function quick_Sort(myArray) {
	if (myArray.length <= 1) { 
		return myArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = myArrays;
		var length = myArray.length;

		for (var i = 0; i < length; i++) {
			if (myArray[i] <= pivot) {
				left.push(myArray[i]);
			} else {
				right.push(myArray[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

console.log(quick_Sort(myArray));
