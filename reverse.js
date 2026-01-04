
var reverse = function(x) {

    if((x<(2**32)) ||(x>-(2**32)) ){
        return 0;
    }
  
    let c = 0,str = "",l, p = 0;

    x = x+"";
    l = x.length;

    // console.log(x,l)

    if(x[0] === '-'){
        str = "-";
        p = 1;
    }

    for( let i = l-1; i>=p; i--){
        str = str+x[i];
    }

    let y = +str;
    return y;
};

console.log(reverse(153423));