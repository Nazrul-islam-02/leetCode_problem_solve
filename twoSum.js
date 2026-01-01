


// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum(nums,target){
let i,j,sum,l;

let p = -1,q=-1;
l = nums.length;
// console.log(l);

for (i = 0;i<l;i++){
    for( j=i+1;j<l;j++){
        if((nums[i] + nums[j]) == target){
            p = i;
            q= j;
            break;
        }
    }
    if(p>=0)break;
}
console.log(p, q);
 }


twoSum([2,7,12,15],9);