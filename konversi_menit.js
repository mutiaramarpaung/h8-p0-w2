function konversi_jam(num1){
    return (((num1)-(num1-60))/60);
}
var hasil_jam1=konversi_jam(65);
var hasil_jam=console.log(hasil_jam1+' jam');

function konversi_menit(num1) {
    return (num1 - 60);
  }

var hasil_menit1=konversi_menit(65);
var hasil_menit=console.log(hasil_menit1 +' menit');
