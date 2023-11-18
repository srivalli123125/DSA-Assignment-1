//1.
function findPairs(arr,target){
    let pairs=[];
    let left=0;
    let right=arr.length-1;
    while(left<right){
        let currentSum=arr[left]+arr[right];
        if(currentSum===target){
            pairs.push([arr[left],arr[right]]);
            left++;
            right--;
        }
        else if(currentSum<target){
            left++;
        }
        else{
            right--;
        }
    }
    return pairs;
}
let nums=[2,4,5,7,8,9];
let targetSum=9;
let result=findPairs(nums,targetSum);
console.log(result);

