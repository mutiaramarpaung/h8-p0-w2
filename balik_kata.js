function balikKata(kata) {
    let n = kata.length;
    let reverseString = '';
    for (let i = n - 1; i >= 0; i--) {
        reverseString += kata[i];
    }
    return reverseString;
}

/** mencoba /
console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm')); 
console.log(balikKata('Coding is my hobby')); 
console.log(balikKata('Super'));
