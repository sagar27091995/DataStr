var arr = [2,1,5,4,3]

//bubbleSort
// ascending

function bubbleSort(arr)
{
	var a = performance.now();
    var swapped;
    do {
        swapped = false;
		for (var i=0; i < arr.length-1; i++) 
		{
            if (arr[i] > arr[i+1]) {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
	} while (swapped);
	var b = performance.now()
	console.log('bubbleSort took ' + (b - a) + ' ms.');
	console.log(arr);
}

//  descending
// var arr = [1,3,2,4,6,5];
// var i;
// var j;
// var k;
// for(i=0;i<arr.length;i++)
// {
//     for(j=i+1;j<arr.length;j++)
//     {
//       if(arr[i]<arr[j])
//       {
//                 k=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=k;
//       }
//     }
// }
// console.log(arr);

//selectionSort
function selectionSort(arr) {
var a = performance.now();
var i,j,key,temp;
for(i=1;i<arr.length;i++){
	key=arr[i];
	j= i-1;
	while(key<arr[j]){
		temp = arr[j];
		arr[j] = arr[j+1];
		arr[j+1]=temp;
	}
}
var b = performance.now()
console.log('selectionSort took ' + (b - a) + ' ms.');
console.log(arr);
}

//Inserstion sort

function InserstionSort(arr){
var a = performance.now();
for(var i=1; i<arr.length; i++){
    for(var j=0;j < i; j++){
        if (arr[i] < arr[j]){
            var temp = arr.splice(i, 1);
            arr.splice(j,0,temp[0]);
        }
	}

}
var b = performance.now()
console.log('InserstionSort took ' + (b - a) + ' ms.');
console.log(arr);

return arr;
}

//MergeSort

function mergeSort (arr) {
	if (arr.length === 1) {
	  return arr
	}
  
	var middle = Math.floor(arr.length / 2) 
	var left = arr.slice(0, middle) 
	var right = arr.slice(middle) 
    //  console.log(arr);
	return merge(mergeSort(left), mergeSort(right))
  }
  
  function merge (left, right) {
	  
	let result = []
	let indexLeft = 0
	let indexRight = 0
  
	while (indexLeft < left.length && indexRight < right.length) {
	  if (left[indexLeft] < right[indexRight]) {
		result.push(left[indexLeft])
		indexLeft++
	  } else {
		result.push(right[indexRight])
		indexRight++
	  }
	}
  
	return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
  }
  
  var list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
  console.log( "mergeSort" + mergeSort(list) ) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]

//Quick Sort

function qSort(arr){
	var a = performance.now();

	if (arr.length === 0){
		return;
	}
	var left = [];
	var right = [];
	var pivot = arr[0];
	
	for (var i=1; i<arr.length; i++){
		if(arr[i] < pivot){
			left.push(arr[i]);
		}else {
			right.push(arr[i]);
		}
	}
	// console.log(left);
	// console.log(right);
	// return;
	var b = performance.now();
	console.log('qSort took ' + (b - a) + ' ms.');
	console.log(arr);
	return qSort(left).concat(pivot,qSort(right));
}


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








bubbleSort(arr);
selectionSort(arr);
InserstionSort(arr)
qSort(arr);
