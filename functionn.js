/** tugas 1 */
function shoutOut() {
    console.log('Halo Function!');
  }
  shoutOut();

/** tugas 2 */

function calculateMultiply(num1, num2) {
    return num1 * num2;
  }
const hasil_perkalian=calculateMultiply(5,6);
console.log(hasil_perkalian);

/** tugas 3 */

function processSentence (name,age,address,hobby) {
    console.log( ' Nama saya ' + name  + ', umur saya ' + age  + ', alamat saya di ' + address  + ', dan saya punya hobby yaitu ' + hobby + '!');
}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";
processSentence(name, age, address, hobby)
