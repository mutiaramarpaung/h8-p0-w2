/** xoxo /

function xo(str) {
    let n = str.length;
    let count_x = 0;
    let count_o = 0;
    for (let i = 0; i < n; i++) {
        if (str[i] === 'x') count_x++;
        if (str[i] === 'o') count_o++;
    }

    return count_x === count_o;
}

/** mencoba xoxo/
console.log(xo('xoxoxo'));
console.log(xo('oxooxo')); 
console.log(xo('oxo')); 
console.log(xo('xxxooo')); 
console.log(xo('xoxooxxo'));
