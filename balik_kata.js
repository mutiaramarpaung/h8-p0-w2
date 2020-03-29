function balikKata(kata) {
    let n = kata.length;
    let reverseString = '';
    for (let i = n - 1; i >= 0; i--) {
        reverseString += kata[i];
    }
    return reverseString;
}
