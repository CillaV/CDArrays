



// Reverse
// Given a numerical array, reverse the order of values, in-place. 
// The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. 
// Working 'in-place' means that you cannot use a second array – move values within the array that you are given. 
// As always, do not use built-in array functions such as splice().


// create function name and parameters where arguements will be passed
// the arguement is an array
// grab first element in array and set to variable
// grab last element in array and set to variable
// set first element = last element
// loop through array until meet in middle. 



// Recursive functions are procedures or subroutines implemented in a programming language, whose implementation references itself. 
// Non Recursive Function are procedures or subroutines implemented in a programming language, whose implementation does not references itself


const reverseArr= (arr) =>{

    start = arr.length // or 0 to reference begining of array
    end = arr.length - 1

}

myArr[ 3, 4, 6, 1, 24]
reverseArr(myArr)
console.log(myArr)




// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 
// 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. 
// Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.

// accepts arguements -- arry and offset
// able to shift in either direction
// no new arry
// minimize touches of each element??

const rotateArr = (arr, offSet) =>{

}





// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. 
// Given arr and values min and max, retain only the array values between min and max. 
// Work in-place: return the array you are given, with values in original order. No built-in array functions.


// parameters -- an array, min value and max value
// returns array with values between min and max value in original order

const filterRange = (arr, min, max) =>{


    // for loop through array
    // if statement for min && (and)
    // if statement for max
    // maybe skip or break after finding everything but min and max
    // save to new array and console.log

}

myArr = [1, 13, 57, 3, 9, 35, 72, 4]




// Concat
// Replicate JavaScript's concat(). 
// Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. 
// Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].


const concatArr = (arr1, arr2) =>{
    myArr = arr1 + arr2;
    // for loop arr1 then add
    console.log(myArr)
}

oneArr = ["a", "b"]
twoArr = [1, 2]
concatArr(oneArr, twoArr)

// output: a, b1, 2 --- why?
