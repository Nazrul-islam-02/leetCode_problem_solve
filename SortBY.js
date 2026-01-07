

var sortBy = function(arr, fn) {
    return arr.sort((a,b)=> fn(a) - fn(b));
};


// // sortBy()
// console.log(sortBy([5, 4, 1, 2, 3], fn = (x) => x))

// console.log(sortBy([{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x))