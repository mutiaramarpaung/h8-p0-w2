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
