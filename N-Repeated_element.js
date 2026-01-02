var repeatedNTimes = function(nums) {
    nums.sort((a,b)=> a - b);
    let l = nums.length;

    let temp = nums[0], count = 0;

    for( i=0; i<l; i++){
        if(nums[i] == temp){
            count++;
            // console.log(count);
        }else {
            temp = nums[i];
            count=1;
        }
        if(count == l/2){
            return temp;
        }
    }
};

// console.log(repeatedNTimes([5,1,5,2,5,3,5,4]))