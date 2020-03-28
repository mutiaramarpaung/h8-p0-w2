/** game proxytia */

console.log('Nama harus diisi!');
var myName = 'Danu';
console.log(`Halo ${myName}, Pilih peranmu untuk memulai game!`);

if (myName == 'Nina'){
    myPeran = 'ksatria'
    console.log(`Selamat datang di Dunia Proxytia, ${myName}`);
    console.log(`Hallo ${myPeran} ${myName}, kamu dapat menyerang dengan senjatamu!`);
} else if (myName == 'Danu') 
{
    myPeran= 'tabib'
    console.log(`Selamat datang di Dunia Proxytia, ${myName}`);
    console.log(`Hallo ${myPeran} ${myName}, kamu akan membantu temanmu yang terluka.`);
} else if (myName == 'Zero')
{
    myPeran='penyihir'
    console.log(`Selamat datang di Dunia Proxytia, ${myName}`);
    console.log(`Hallo ${myPeran} ${myName}, kamu akan membantu temanmu yang terluka.`);
} else { 
    console.log('nama tidak terdaftar');
}
    
