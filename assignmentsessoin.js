// //1.
// function findPairs(arr,target){
//     let pairs=[];
//     let left=0;
//     let right=arr.length-1;
//     while(left<right){
//         let currentSum=arr[left]+arr[right];
//         if(currentSum===target){
//             pairs.push([arr[left],arr[right]]);
//             left++;
//             right--;
//         }
//         else if(currentSum<target){
//             left++;
//         }
//         else{
//             right--;
//         }
//     }
//     return pairs;
// }
// let nums=[2,4,5,7,8,9];
// let targetSum=9;
// let result=findPairs(nums,targetSum);
// console.log(result);

// //2.
// function reverseArrayInPlace(arr){
//     let left=0;
//     let right=arr.length-1;
//     while(left,right){
//         let temp=arr[left];
//         arr[left]=arr[right];
//         arr[right]=temp;
//         left++;
//         right--;
//     }
// }
// let nums=[1,2,3,4,5];
// reverseArrayInPlace(nums);
// console.log(nums);

//3.
function areStringRotations(str1,str2){
    if(str1.length!==str2.length){
        return false;
    }
    let combinnedStr=str1+str1;
    if(combinnedStr.includes(str2)){
        return true;
    }
    else{
        return false;
    }
}
let string1="hello";
let string2="llohe";
let result=areStringRotations(string1,string2);;
console.log(result);