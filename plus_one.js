var plusOne = function(digits) {
    // let digits = digits;
    let l = digits.length;

    
    let c = 0;
        for(let i = l-1; i>=0; i--){
            if(digits[i] == 9){
                digits[i] = 0;
                c = 1;
            }else{
             digits[i] = digits[i] + 1;
             c = 0;
             break;
            }
        }

        if(c == 1){
            digits = [1,...digits];
            return digits;
        }else{
            return digits;
        }

    

};

// console.log(plusOne([0]))

// console.log(typeof(9+""))