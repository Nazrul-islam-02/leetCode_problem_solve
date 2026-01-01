var createCounter = function(n) {
    let current = n;

    return {
        add: function () {
            return current = current+1;
        },
        reset: function(){
            return current = n;
        },
        decrement: function(){
            return current = current - 1;
        }
    };
};

let counter = createCounter(10);

console.log(counter.add()); // 10
// console.log(counter.add()); // 11

console.log(counter.reset());
console.log(counter.decrement());
