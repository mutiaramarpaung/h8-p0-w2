var tanggal=21;
var bulan=1;
var tahun=1945;

if (tanggal < 0) {
    console.log('input ulang tanggal');
}
else if (tanggal > 0 && tanggal < 31){
    console.log(tanggal);  
}
else {
    console.log('input angka');
}

if (tahun < 0) {
    console.log('input ulang tahun');
}
else if (tahun > 1900 && tahun <= 2200){
    console.log(tahun);
}
else {
    console.log('input angka');
}

switch(bulan){
    case 1 :
        console.log('Januari');
        console.log(tanggal + ' ' + 'Januari' + ' ' + tahun);
      break;
    case 2:
        console.log('Februari');
        console.log(tanggal + ' ' + 'Februari' + ' ' + tahun);
      break;
    case 3:
        console.log('Maret');
        console.log(tanggal + ' ' + 'Maret' + ' ' + tahun);
      break;
    case 4 :
        console.log('April');
        console.log(tanggal + ' ' + 'April' + ' ' + tahun);
        break;
    case 5:
        console.log('Mei');
        console.log(tanggal + ' ' + 'Mei' + ' ' + tahun);
        break;
    case 6:
        console.log('Juni');
        console.log(tanggal + ' ' + 'Juni' + ' ' + tahun);
        break;
    case 7 :
        console.log('Juli');
        console.log(tanggal + ' ' + 'Juli' + ' ' + tahun);
        break;
    case 8:
        console.log('Agustus');
        console.log(tanggal + ' ' + 'Agustus' + ' ' + tahun);
        break;
    case 9:
        console.log('September');
        console.log(tanggal + ' ' + 'September' + ' ' + tahun);
        break;
    case 10 :
        console.log('Oktober');
        console.log(tanggal + ' ' + 'Oktober' + ' ' + tahun);
        break;
    case 11:
        console.log('November');
        console.log(tanggal + ' ' + 'November' + ' ' + tahun);
        break;
    case 12:
        console.log('Desember');
        console.log(tanggal + ' ' + 'Desember' + ' ' + tahun);
        break;
    default:
      console.log('tidak ada bulan');
      break;
  }
    