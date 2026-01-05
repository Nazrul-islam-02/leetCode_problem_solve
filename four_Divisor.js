
/**
//  * @param {number[]} nums
//  * @return {number}
//  */
var sumFourDivisors = function(nums) {
  
    let l, c = 0, sum = 0,a, b,i,j,p;
    l = nums.length;
    // console.log(nums);

    for(i = 0; i <l; i++ ){

        p = (Math.sqrt(nums[i]));

        // console.log(p);

        for(j = 2; j<= p; j++){
            if(nums[i] % j === 0){
                
                a = j;
                b = nums[i]/j; 
                
                if( a!=b){
                    c++;
                }
            }
            if(c > 1) break;
        }

        if(c == 1){
            sum = sum + nums[i] + 1 + a + b;
        }

        // console.log(nums[i], sum, a, b);
        c = 0;
        a = 0;
        b = 0;

    }
    // console.log(sum);
    return sum;
};

// sumFourDivisors([21,2,10])