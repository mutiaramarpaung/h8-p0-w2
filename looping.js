/** 1. Melakukan looping menggunakan while */
var word = 'I love coding';
var word2 = 'I will become fullstack';

var counter=1;
while (counter % 21) {
    console.log(counter + ' - ' + '' + word );
    counter++;
}

var counter=20;
while (counter % 21) {
    console.log(counter + ' - ' + '' + word2 );
    counter--;
}

/** 2. Melakukan looping menggunakan for */
var word = 'I love coding';
var word2 = 'I will become fullstack';

for (let counter=1; counter<21; counter++){
    console.log(counter + ' - ' + '' + word );
}

for (let counter=20; counter>0; counter--){
    console.log(counter + ' - ' + '' + word2 );
}
