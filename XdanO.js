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
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false 
