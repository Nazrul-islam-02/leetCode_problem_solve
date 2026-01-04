/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    // // let p = reverse(n);
    // console.log("pp");

    n = n+"";
    let y = "";
    let l = n.length;
    for( let i = 0; i<l; i++){
        y = n[i] + y;
    }

    y = +y;
    n = +n;
    return (Math.abs(n-y));
};

console.log(mirrorDistance(12300))