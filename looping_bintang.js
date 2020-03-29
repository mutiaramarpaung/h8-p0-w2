var bintang='*****';
/** menyusun barisan bintang */
for (var i=0; i<bintang.length; i++) {
    var temp=""
    console.log(bintang[i]);
}

/** menyusun barisan bintang dengan nested looping */
for (var i=0; i<bintang.length; i++) {
    var temp=""
    console.log(bintang[i] +'' + bintang[i]+'' + bintang[i]+'' + bintang[i]+'' + bintang[i]);
}

/** menyusun barisan tangga */
for (var i=4; i<bintang.length; i++) {
    var temp=""
    console.log(bintang[i])
    console.log(bintang[i] +'' + bintang[i])
    console.log(bintang[i] +'' + bintang[i]+'' + bintang[i])
    console.log(bintang[i] +'' + bintang[i]+'' + bintang[i]+'' + bintang[i])
    console.log(bintang[i] +'' + bintang[i]+'' + bintang[i]+'' + bintang[i]+'' + bintang[i]);
}
