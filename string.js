/** 1. Let's Form a Sentence */
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';
console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh);

/**2. Index Accesing -1 by 1 */
var word2 = 'wow JavaScript is so cool';
var firstword = word2[0] + word2[1] + word2[2];
var secondword = word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9] + word2[10] + word2[11] + word2[12] + word2[13] + word2[14];
var thirdword = word2[15] + word2[16];
var fourthword = word2[18] + word2[19];
var fifthword = word2[21] + word2[22] + word2[23] + word2[24];;;

console.log('First Word: ' + firstword) ;
console.log('Second Word: ' + secondword) ;
console.log('Third Word: ' + thirdword) ;
console.log('Fourth Word: ' + fourthword) ;
console.log('Fifth Word: ' + fifthword) ;

/** breaking sentence (again) using substring */
var word3 = 'wow JavaScript is so cool';
var firstword = word3.substring(0,3);
var secondword = word3.substring(4,14);
var thirdword = word3.substring(14,17);
var fourthword = word3.substring(18,20);
var fifthword = word3.substring(21,25);

console.log('First Word: ' + firstword) ;
console.log('Second Word: ' + secondword) ;
console.log('Third Word: ' + thirdword) ;
console.log('Fourth Word: ' + fourthword) ;
console.log('Fifth Word: ' + fifthword) ;

/** breaking sentence (yet again) and count each length */
var word4 = 'wow JavaScript is so cool';
var firstword = word4.substring(0,3);
var secondword = word4.substring(4,14);
var thirdword = word4.substring(14,17);
var fourthword = word4.substring(18,20);
var fifthword = word4.substring(21,25);

var firstwordlength = firstword.length;
var secondwordlength = secondword.length;
var thirdwordlength = thirdword.length;
var fourthwordlength = fourthword.length;
var fifthwordlength = fifthword.length;

console.log('First Word: ' + firstword + ',with length: ' + firstwordlength ) ;
console.log('Second Word: ' + secondword + ',with length: ' + secondwordlength ) ;
console.log('Third Word: ' + thirdword + ',with length: ' + thirdwordlength ) ;
console.log('Fourth Word: ' + fourthword + ',with length: ' + fourthwordlength ) ;
console.log('Fifth Word: ' + fifthword + ',with length: ' + fifthwordlength ) ;