//bubbleSort
// ascending
 function bubbleSort(array){
	var a = performance.now();
     var swap;
     do{
         swap=false;
         for(var i=0; i<array.length; i++){
             if(array[i]>array[i+1]){
                 var temp = array[i];
                 array[i] = array[i+1];
                 array[i+1] = temp;
                 swap = true;
             }
         }
	 }while(swap);
	 var b = performance.now();
     console.log('bubble sort took ' + (b - a) + ' ms.');
 }

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
function selectionSort(array){
	//this loop shifs tht max data to last loop
	var a = performance.now();
	for (var i = array.length - 1; i > 0; i--) {
		var num = 0;
		//this loop finds the max data  
		for (var j = 1; j <= i; j++) {
			if (array[j] > array[num])
				num = j;
		}
		//swap
		array[i] = b;
		array[num] = a;
	}
	var b = performance.now();
	console.log('selection sort took ' + (b - a) + ' ms.');
	}


//Inserstion sort

function InserstionSort(array){
var a = performance.now();
for(var i=1; i<array.length; i++){
    for(var j=0;j < i; j++){
        if (array[i] < array[j]){
            var temp = array.splice(i, 1);
            array.splice(j,0,temp[0]);
        }
	}

}
var b = performance.now()
console.log('InserstionSort took ' + (b - a) + ' ms.');
return array;
}


//MergeSort

function MergeSort(left_side,right_side){
var a = performance.now();
    var i = 0;
    var j = 0;
    var result = [];

    while (i < left_side.length || j < right_side.length){
        if (i === left_side.length){
            result.push(right_side[j]);
            j++;
        }else if (j === right_side.length || left_side[i] <= right_side[j]){
            result.push(left_side[i]);
            i++;   
        }else{
            result.push(left_side[j]);
            j++;
        }
	}
	var b = performance.now();
	console.log('MergeSort took ' + (b - a) + ' ms.');
	return result;
}

//Quick Sort

function quick_Sort(MyArray) {
	var n1 = new Date().getTime();
	console.log(n1);
	var left = [];
	var right = [];
	var newArray = [];
	var pivot = MyArray.pop();
	var output;
	if (MyArray.length <= 1) { 
		output = MyArray;
	} else {

		for (var i = 0; i < MyArray. length; i++) {
			if (MyArray[i] <= pivot) {
				left.push(MyArray[i]);
			} else {
				right.push(MyArray[i]);
			}
		}
		output = newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
	var n2 = new Date().getTime();
	console.log(n2);
    var output = n2 - n1;
	return output;
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








bubbleSort([1,0,4,4,1,0,6,4,6,3,4,3,12,46,45,234,09,67]);
selectionSort([4,6,0,1,3,5,56,643,3,1]);
MergeSort([1,3,4], [5,3,2]);
InserstionSort([4,6,0,1,3,5,56,643,3,1])
quick_Sort([4,2,7,1,9,4,2,7,1,9,4,2,7,1,9])