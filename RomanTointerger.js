
var romanToInt = function(s) {

    function value(ch) {
        if (ch === 'I') return 1;
        if (ch === 'V') return 5;
        if (ch === 'X') return 10;
        if (ch === 'L') return 50;
        if (ch === 'C') return 100;
        if (ch === 'D') return 500;
        if (ch === 'M') return 1000;
        return 0;
    }

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        let curr = value(s[i]);
        let next = value(s[i + 1]);

        if (curr < next) {
            total -= curr;
        } else {
            total += curr;
        }

        console.log(curr)
    }

    return total;
};

console.log(romanToInt("IIXIXIV"));