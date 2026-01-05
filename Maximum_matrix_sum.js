
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    let arr = [],i,j,c = 0 ,p, zero = 0 ,n;
    n = matrix.length;
    for(i = 0;i<n; i++){
        for(j=0; j<n; j++){
            if(matrix[i][j] == 0){
                zero = 1;
            }else if( matrix[i][j] < 0){
                c = c + 1;
            }
            p = Math.abs(matrix[i][j]);
            arr.push(p);
        }
    }

    // console.log(zero,c)

    let min = arr[i], sum = 0;
     n = n*n;

    if(c%2 === 0){
         for(i = 0;i<n; i++){
         sum = sum + arr[i];
         }
     }else { 
         for(i = 0;i<n; i++){
            if(arr[i] < min){
                min = arr[i];
            }
            sum = sum + arr[i];
         }

         sum = sum - 2*min;
     }

     return sum;

   

};

console.log(maxMatrixSum( [
  [1,2,3],
  [-1,-2,-3],
  [1,2,0]
]) )