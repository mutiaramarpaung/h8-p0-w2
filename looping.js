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

/** 3. Angka Ganjil dan Genap */
/** problem 1 perulangan 1-100 pertambahan counter 1 */
for (let nilai=0; nilai>=0 && nilai<100; nilai++){
    console.log(nilai +1);
}


/** problem 2 perulangan, periksa ganjil dan genap */
for (let nilai=1; nilai>=0 && nilai<100; nilai++){
    if (nilai %2===0){
        console.log(nilai + ' bilangan genap ')
    }
        else {
        console.log(nilai + ' bilangan ganjil ')
        }
}


/** problem 3 dan 4 perulangan 1-100 pertambahan counter 1 */
for (let nilai=0; nilai>=0 && nilai<101; nilai++){
    if (nilai %3===0){
        console.log(nilai + ' bilangan kelipatan 3')
    }
    if (nilai %4===0){
        console.log(nilai)
    }
    if (nilai %9===0){
        console.log(nilai)
    }
}
