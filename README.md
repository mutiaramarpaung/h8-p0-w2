# HACKTIV8 - PHASE 0 - WEEK 2
# Hacktiv8 Phase 0 Week 2: The World of JavaScript

# Header

Selamat sudah melalui kegiatan pekan pertama! Pekan kedua ini kita akan berkenalan dengan JavaScript, dan melatih kemampuan logika dan pengolahan data dalam programming. Di pekan ini, kamu akan bertemu dengan sangat banyak kode dan istilah yang digunakan dalam pemrograman atau khususnya pada JavaScript.

Let's start!
# Metode Pengumpulan Tugas

Untuk seluruh tugas week 2, buatlah sebuah repository baru di github dengan nama h8-p0-w2. Untuk setiap satu tugas, buatlah file .js (untuk tugas javascript), file .txt (untuk tugas pseudocode), atau file .png (untuk tugas screenshot codecademy) untuk masing-masing tugas. Contoh, untuk tugas pertama, buatlah file .js dengan nama exercise-1.js dan push ke github. Kirimkan link yang merujuk ke file .js tersebut ke dalam foxhub. Jangan kirimkan link ke repository, tapi ke direct file di dalam repository-nya.

# Senin
# Pengenalan Programming, Algoritma, dan Pseudocode

Hari pertama di Week 2! Mulailah pekan baru dengan semangat baru! Hari ini, kamu akan bertemu dengan banyak kode yang mungkin belum pernah kamu lihat sebelumnya. Bersiaplah, dan jangan lupa bertanya apabila kamu menemukan kesulitan. Selamat belajar! emoji-smile

# Materi & Referensi :

#    emoji-notebook_with_decorative_cover Mempelajari struktur alur program dengan algoritma dan pseudocode
# Learn Algorithm and Pseudocode
# Objectives

    ▢ Memahami struktur alur program dengan algoritma dan pseudocode

# Learnings
# Mengenal Algoritma

Belajar pemrograman tentu saja memerlukan banyak berpikir secara logika, sehingga kita bisa memecahkan masalah atau melakukan kegiatan yang kita targetkan. Agar kita bisa menjelaskan alur logika kita, perlu digunakan algoritma.

Namun apa itu algoritma? Mari kita ilustrasikan terlebih dahulu.

Bagaimana cara kamu menggunakan komputer sehari-hari? Mulai dari menekan tombol on/off, menunggu proses booting, memasukkan password, membuka aplikasi yang dibutuhkan, kemudian bekerja sesuai aplikasi tersebut. Atau lain lagi, bagaimana cara menggunakan smartphone? Cukup unlock dari posisi standby, lalu pilih dan buka aplikasi yang dibutuhkan, dan seterusnya.

Nah itulah algoritma, kumpulan proses ataupun aturan untuk melakukan atau menyelesaikan sesuatu. Sesuatu ini biasanya berupa masalah atau kegiatan yang langkah-langkahnya pasti terbatas (tidak terus-menerus).

Dalam menggunakan bahasa pemrograman, kita bisa menggunakan atau bahkan tidak perlu menggunakan algoritma. Tapi hampir 99% pastinya perlu algoritma. Misalnya saja kita sudah tahu algoritma dasar dari perulangan dan perkondisian.

Algoritma bisa sesederhana kita jabarkan langkah-langkahnya seperti tadi, atau kita visualisasikan dalam bentuk flowchart seperti berikut.

# Algorithm Illustration

    ▢ Tonton video ini jika perlu: What is an algorithm and why should you care? - Intro to algorithms on Khan Academy

# Basic Simbol / Notasi Flowchart

Flowchart merupakan diagram yang menggambarkan algoritma, atau proses-proses, yang digunakan untuk memecahkan suatu masalah. Intinya, flowchart bisa dipakai sebelum menulis kode karena syntax lebih mudah digambar. Syntax basic flowchart seperti berikut:
Start/End

Rounded rectangle, like a pill
Input/Output

Parallelogram
Process

Rectangle
Conditional (IF)

# Diamond

Banyak tools software yang dapat kamu gunakan untuk menggambar flowchart. salah satunya tools online editor draw.io

Bagi kalian yang nanti akan membuat sebuah sistem yang complex, menggambar flowchart bisa jadi hal pertama yang kalian lakukan sebelum coding. Kenapa ?

Karena untuk membuat sebuah sistem yang complex kalian harus punya gambaran yang jelas dari proses atau prosedur dari awal hingga ahkir sistem yang kalian buat. Kalau tidak ada flowchart kadang di tengah pengerjaan project kita lupa alur dari sistem yang kita buat. Tentu hal ini akan mempengaruhi codingan kalian.
Mengenal Pseudocode

Atau agar lebih rapi, kita gunakan pseudocode. Psedudocode adalah konvensi terstruktur atau cara menyajikan penjelasan algoritma dengan bahasa yang deskriptif seperti kita menulis kalimat biasa sehingga mudah kita baca. Umumnya digunakan bahasa Inggris atau bahasa perantara yang mirip bahasa pemrograman. Lihatlah contoh algoritma penambahan angka sederhana dengan pseudocode berikut.

Bahasa Inggris

READ and SAVE "first number"
READ and SAVE "second number"
COMPUTE "first number" added by "second number"
SAVE previous computation result
SHOW the computation result

Bahasa inggris diatas nantinya akan diubah menjadi bahasa pemrograman yang kita mau. Dibawah ini adalah contoh hasil konversi pseudocode diatas menjadi kode di bahasa lain. Saat ini kamu hanya cukup melihat hasil konversinya sekilas saja, tidak harus dipelajari, karena kita akan fokus pada pseudocode terlebih dahulu.

# JavaScript

var a,b,c;
a = prompt("First Number?");
b = prompt("Second Number?");
c = Number(a) + Number(b);
console.log(c);
alert("Result = " + c);

Dengan begini, kita bisa menjelaskan proses atau alur logika tanpa bahasa pemrograman tertentu. Sehingga juga logika yang sama bisa ditransfer atau diterapkan ke bahasa pemrograman lain. Misalnya...

# Python

a = input("First Number? ")
b = input("Second Number? ")
c = int(a) + int(b)
print("Result", c)

# Ruby

puts "First Number?"
a = gets.chomp
puts "Second Number?"
b = gets.chomp
c = a.to_i + b.to_i
puts c

Lebih dalam tentang Pseudocode

Berikut adalah contoh yang perlu kamu tahu saat membuat pseudocode. Jangan Terpaku 100% dengan contoh, karena dalam pseudocode tidak terpaku pada penggunakan kata tertentu. Selama pseudocode dapat dimengerti sesama pembaca, maka sudah cukup bisa digunakan. Kita bisa menggunakan huruf kapital untuk keyword yang ditekankan dari sebuah step. Misal: CALCULATE 5 plus 2, atau DISPLAY "hello".
# Storing Values

Biasanya, pada saat kita belajar matematika atau fisika, kita akan bertemu dengan rumus. Paling sederhana adalah rumus luas persegi, yaitu width dikalikan height.

Kita sebagai manusia dengan natural dapat langsung mengkalkulasi nilai panjang dan lebar untuk mendapatkan luas. Tapi, komputer tidak semudah itu. Komputer harus menyimpan nilai panjang dan nilai lebar di dalam memori. Memori komputer, bayangkan saja seperti otak kita yang bisa menyimpan berbagai informasi. Sebetulnya, saat kita menghitung panjang dan lebar secara tidak sadar kita pun menampung nilai tersebut di kepala kita.

# Contoh Pseudocode

STORE "width" with any value
STORE "height" with any value
STORE "area" without any value

CALCULATE "width" times "height"
SET "area" value with calculation result

DISPLAY "area"

Bisa dilihat dari pseudocode diatas, ada beberapa step yang kita jalankan. Mari kita bahas tiap step ke bahasa yang lebih "manusiawi" :)

    Simpan "width" dengan nilai berapapun
    Simpan "height" dengan nilai berapapun
    Simpan "area" tanpa diberikan nilai. Ini akan kita isi nanti.
    Hitung hasil perkalian "width" dengan "height"
    Setelah mendapatkan hasil perhitungan, isikan hasilnya ke dalam "area"
    Tampilkan nilai dari "area"

# Conditional

Saat komputer menjalankan program, seringkali komputer harus melakukan sebuah tindakan jika suatu kondisi terpenuhi. Mudahnya, di kehidupan sehari-hari misalnya, jika kita lapar, kita akan makan. "Jika kita lapar" adalah sebuah kondisi, dan "kita akan makan" adalah step yang hanya akan dijalankan apabila kondisi tersebut terpenuhi.

# Contoh Pseudocode

IF "hungry"
  DO "eat"
DISPLAY "i am happy"

Jika kita lihat pseudocode diatas, bisa dijabarkan sebagai step berikut

    Jika lapar, maka masuk ke step 2. Jika tidak, abaikan step 2 dan langsung ke step 3.
    lakukan proses "eat"
    Tampilkan "i am happy"

Yang terjadi disini ada dua kemungkinan. Jika lapar, step 2 akan diabaikan. Kita bisa lihat dari pseudocode dimana "eat" kita buat menjorok ke dalam (ingat dengan identasi di HTML? ya betul! :D) untuk menunjukkan semua proses yang menjorok ke dalam setelah sebuah kondisi merupakan proses yang dijalankan hanya jika kondisi terpenuhi.

Tidak hanya sampai disana, kondisional bisa juga melakukan proses yang hanya dijalankan jika kondisi tidak terpenuhi. Misal, saat nilai ujian dibawah 70, saya harus berlajar lebih giat. Tapi jika tidak, maka saya layak memberi reward untuk diri sendiri.

# Contoh Pseudocode

STORE "score" to any number

IF "score" < 70
  DO "learn more"
ELSE
  DO "reward myself"
DO "continue with life..."

Nah disini terjadi yang biasa dinamakan percabangan. Jika score dibawah 70, maka kita akan "learn more", dan jika tidak, maka kita harus "reward myself".

Namun apapun kondisinya, kita pasti akan masuk ke step "continue with life..."

Pseudocode diatas bisa digambarkan ke step berikut:

    Jika "score" dibawah 70, masuk ke step 2a. Jika tidak, masuk ke step 2b. 2a. Lakukan "learn more" 2b. Lakukan "reward myself"
    Lakukan "continue with life..."

Saat program berjalan, berarti hanya ada dua kemungkinan. Antara menjalankan step 1 -> 2a -> 3, atau step 1 -> 2b -> 3.
Looping

Nah sekarang kita akan masuk ke bagian terakhir yang dibutuhkan hari ini dan sekaligus yang sedikit lebih sulit dibandingkan bagian sebelumnya, yaitu perulangan.

Komputer seringkali dibutuhkan untuk melakukan sebuah proses yang sama berulang-ulang. Hal ini sering disebut sebagai looping. Tentunya, saat komputer melakukan looping, pasti ada kalanya proses tersebut akan berhenti. Sama hal nya saat kita sebagai manusia melakukan berbagai hal yang berulang, pasti ada kalanya kegiatan itu kita hentikan. Nah, looping sebetulnya melibatkan yang sudah kita pelajari sebelumnya, yaitu conditional. Looping akan terus dilakukan sampai sebuah kondisi terpenuhi. Contoh mudahnya adalah, kita akan makan hingga kenyang bukan?

# Contoh Pseucodode

WHILE "hungry"
  DO "eat"

Nah, pseudocode di atas cukup simple dan mencontohkan kita proses paling sederhana dalam looping. WHILE adalah standard keyword untuk menjunukkan kondisi "selama kita masih lapar", lakukan proses makan.

Biasanya, saat kita membuat looping, ada sebuah proses yang dilakukan untuk mencapai kondisi tersebut. Kita coba perbaiki contoh pseudocode diatas, dengan asumsi kemampuan makan kita dalam sekali makan adalah 5 sendok nasi. Kita coba umpakan kemampuan makan ini sebagai "hungry level".

STORE "full level" with 0

WHILE "full level" < 5
  ADD "full level" by 1

DISPLAY "I'm full!"

Nah, looping kali ini sudah lebih mendekati coding sebenarnya. Saat terjadi looping, harus ada proses apapun yang akan membuat kondisi perulangan lambat laun akan terpenuhi. Pseudocode di atas menggambarkan kita mulai dari level kenyang kita dari 0, berarti kita saat ini sangat lapar. Setiap kali kita melakukan proses makan, tingkat kenyang kita akan bertambah 1. Karena kita hanya kuat makan hingga 5 kali, maka kondisinya adalah "full level" < 5.

Kita coba ilustrasikan step pseudocode diatas:

    Simpan nilai "full level" dengan angka 0
    Ulangi step 3 selama "full level" masih dibawah 5. Jika "full level" sudah 5, lanjut ke step 4.
    Tambah "full level" dengan 1, agar semakin mendekati batas perulangan. Kembali ke step 2.
    Tampilkan "I'm full", berarti saya sudah sangat kenyang!

Ternyata, setelah dijabarkan, looping tidak begitu sulit, bukan? Nah, sebuah komputer tentu saja dapat memiliki program yang sangat memungkinkan menggabungkan penyimpanan nilai, kondisi, dan perulangan dengan sekaligus. Disini, kita sebagai calon programmer diwajibkan untuk mampu menggabungkan berbagai konsep ke dalam satu kesatuan.

Kita akan coba membuat pseudocode yang menggunakan looping dan conditional sekaligus, berangkat dari kasus berikut:

Seorang anak SD sedang belajar angka genap dan ganjil. Dia ditugaskan oleh ibu guru untuk menghitung angka dari 1 sampai 10 dengan menyebut angka tersebut dan untuk setiap angka ganjil, ia harus menyebut "ODD!" dan sebaliknya jika genap, ia harus menyebut "EVEN!".

Tunggu! Angka disebut genap jika habis dibagi dua. Tapi bagaimana saya menyebutnya di pseudocode? Mudah, caranya adalah menggunakan yang namanya mod, atau kepanjangannya modulo. Modulo, adalah sebuah proses matematika untuk mendapatkan remainder atau sisa bagi dari sebuah proses pembagian. Misal, angka 3 jika dibagi 2 sisanya adalah 1. Nah berarti kita bisa menyebutkan proses ini sebagai 3 mod 2.

# Contoh Pseudocode

STORE "count" to 1

WHILE "count" < 11
  DISPLAY "count"
  CALCULATE "count" mod 2
  STORE "remainder" to the result of calculation
  IF "remainder" equals to 0
    DISPLAY "EVEN!"
  ELSE
    DISPLAY "ODD!"

# References

    What is a computer algorithm? on HowStuffWorks
    Algorithm, on Wikipedia
    Algorithms Course on Khan Academy
    Sorting Algorithm Animations
    VisuAlgo: Visualising data structures and algorithms through animation
    Notes on Algorithms, Pseudocode, and Flowcharts - Dr. Burford J. Furman
    Pseudocode Standard - Dr. John Dalbey


# Tugas :

#    emoji-anchor [Exercises 1] Berlatih dengan Pseudocode
Soal ini terdiri dari 4 nomor!
1. Newton Second Law

Bunyi hukum II Newton adalah:

Percepatan sebuah benda akan sebanding dengan gaya yang diberikan pada benda dan berbanding terbalik dengan massa benda. Arah percepatan benda sama dengan arah gaya total yang diberikan pada benda.

Secara matematis hukum II Newton dirumuskan sebagai berikut: ΣF = m x a

ΣF = resultan gaya (Newton)

m = massa benda (kg)

a = percepatan benda (m/s2)

Berdasarkan keterangan di atas, buatlah sebuah algoritma / pseudocode untuk menghitung resultan gaya pada sebuah mobil yang memiliki massa benda 600 kg dan ketika didorong oleh tiga orang percepatannya adalah 2 m/s2!
2. Tahun Kabisat

Apa yang kamu ketahui tentang tanggal 29 Februari? Kamu pasti tahu jika suatu tahun memiliki tanggal 29 Februari berarti tahun tersebut merupakan tahun kabisat.

Dalam kalender Gregorian, tahun kabisat memiliki beberapa kriteria yaitu antara lain:

    Jika tahun habis di bagi 4 dan tidak habis di bagi 100, atau
    Jika tahun habis di bagi 4, habis di bagi 100 dan habis di bagi 400

Buatlah algoritma & pseudocode untuk menentukan apakah suatu tahun merupakan tahun kabisat atau bukan!
3. Laundry Day

Foxie akan mencuci pakaiannya menggunakan mesin cuci. Pakaian yang akan dicuci oleh Foxie sebanyak 20 dan akan dimasukkan ke mesin cuci. Mesin cuci akan dinyalakan jika semua pakaian Foxie sudah masuk ke mesin cuci.

Bantulah Foxie untuk menghitung jumlah pakaian yang akan dimasukkan ke mesin cuci menggunakan algoritma & pseudocode perulangan!
4. Periksa Kuku

Seorang guru akan memeriksa kuku siswa-siswinya yang sebanyak 40 orang dengan cara berkeliling kelas. Jika guru menemukan siswa/siswi yang memiliki kuku yang panjang maka guru akan menghukum siswa/siswi tersebut, jika tidak guru akan memuji siswa/siswi tersebut.

Buatlah algoritma & pseudocode untuk permasalahan diatas.

# Selasa
# Dunia JavaScript

Hari ini masuklah kita ke bahasa pemrograman JavaScript. Yuk kenalan dengan JavaScript dan langsung coba keseruannya!

# Materi & Referensi :

#    emoji-wrench Repl, tools online untuk menjalankan JavaScript
#    emoji-notebook_with_decorative_cover Memahami dan menggunakan dasar pemrograman dengan JavaScript
# Halo JavaScript!
# Pengenalan

Mari kita sambut salah satu bahasa pemrograman universal di dunia: JavaScript! Untuk kamu yang belum tahu JavaScript (kadang disebut JS saja); ia adalah bahasa native untuk web yang ringan, interpreted, dan salah satu bahasa pemrograman paling populer yang digunakan oleh developer di seluruh dunia, untuk browser dan web. Bahkan beberapa aplikasi non-browser juga menggunakannya seperti Node.js, MongoDB, dan Apache CouchDB. Lebih lagi, JS adalah bahasa yang dinamis, berbasis prototype, multi-paradigm (mendukung gaya pemrograman berbasis objek, imperatif, dan deklaratif/fungsional). Mungkin kamu sudah tahu, bahwa JavaScript tidak sama dengan Java; namanya mirip tapi aslinya dibuat oleh pihak yang berbeda sehingga juga aturannya, ekosistem, sintaks, semantiknya berbeda. JavaScript pada dasarnya memberi interaksi (seperti, klik, input, animasi) pada halaman HTML (yang biasanya juga menggunakan CSS). Zaman sekarang JavaScript sudah dapat berdiri sendiri, yang dahulunya harus mengandalkan HTML dan CSS agar dapat bekerja dengan semestinya.
Stuktur Bahasa Program

Pada dasarnya, setiap bahasa pemrograman modern memiliki hal-hal yang tertulis berikut. Hal-hal ini memungkinkan programmer untuk menulis code (computer code) untuk membuat/membangun program yang dapat menyelesaikan masalah seperti menghitung angka, memproses data, membuat aplikasi web, dan banyak lainnya.

    sintaks (syntax) dan pernyataan (statement): terkait bagaimana cara menulis code-nya
    tipe data (data types) dan/atau struktur data (data structure)
    variabel dan operator
    kondisional (conditional) atau percabangan (branching)
    kumpulan/koleksi data (collections) serta perulangan/iterasi (loop/iteration)
    fungsi/metode (function/method)

# Menjalankan Script JavaScript

Spesial untuk JavaScript, kita bisa menggunakan editor code biasa (code editor) untuk mengetikkan JavaScript bersamaan dengan HTML dan CSS; atau kita bisa langsung mengetikkan code ke dalam dev tools (terdapat di Chromium/Chrome dan Firefox) dengan membuka tab console (Ctrl+Shift+J atau Cmd+Opt+J di Chrome, Ctrl+Shift+K atau Cmd+Opt+K di Firefox). Artinya JavaScript bisa langsung digunakan dan ditulis di dalam browser ataupun editor code.

Kamu juga bisa gunakan extension browser untuk editor JavaScript yang lebih dari sekadar console di dev tools seperti Chrome Scratch JS, https://repl.it/languages/javascript, ataupun CodePen. Apapun tools yang dipakai, yang terpenting adalah kita dapat mengakses editor atau console yang akan menjalankan sintaks JavaScript.

Untuk saat ini, mari kita gunakan Repl.it.
Sintaks (Syntax) dan Pernyataan (Statement)

Sintaks itu seperti kosa kata (vocabulary) dan tata cara (grammar) pada bahasa pemrograman. Merupakan kata-kata dan perintah (command) pada bahasa yang juga merupakan instruksi untuk disusun menjadi sebuah program yang dibuat atau dikembangkan. Kita gunakan sintaks tertentu untuk membuat statement program, instruksi untuk dijalankan/dieksekusi oleh web browser, compiler, ataupun interpreter. Dalam JavaScript, ada berbagai sintaks yang polanya seperti alert();, console.log();, document.write();, dan masih banyak lagi. Kesimpulannya, sintaks dan statement adalah ekspresi (expression) apapun yang biasanya diikuti dengan titik koma (semicolon ;) ataupun hal-hal yang bisa dieksekusi oleh penjalan code (executor).
Menjalankan JavaScript dengan script JavaScript dan menampilkannya pada console

> "Hello!";
> document.write("Hello you too!");
> console.log("Hello, computer!");
> alert("Hello, human!");
> prompt("What is your name?");
> console.log("Multiline\n text!");

Bukalah Repl, dan cobalah kode di atas pada tab console
Data Type

Data Type, atau dalam bahasa Indonesia kita sebut sebagai Tipe Data, adalah sekumpulan data dengan nilai yang memiliki karakteristik berbeda. Beberapa contoh dari tipe data adalah:

    Number: tipe data dengan nilai berupa angka
    String: tipe data dengan nilai berupa kumpulan atau set dari beberapa karakter
    Boolean: tipe data dengan nilai berupa true atau false.

# Variable

Variable, atau dalam bahasa Indonesia kita sebut variabel, bisa memegang atau berisi hampir semua tipe data yang tersedia. Variabel memungkinkan kita untuk memuat atau menyimpan nilai data ke dalam sesuatu. Biasanya bersifat sementara saat program dijalankan.

var tampung = 5;
console.log(tampung); // 5

var angkaGanjil = 1;
var angkaGenap = 2;
console.log(angkaGanjil); // 1
console.log(angkaGenap); // 2

emoji-warning Waspadai pemanggilan variable yang tidak bernilai!

var tampungBaru;
console.log(tampungBaru); // undefined

# Operator

Operator adalah karakter yang merepresentasikan sebuah tindakan. Kita sering menemukan operator seperti + (tambah), x (kali), dan lain-lain. Namun, di dunia programming, operasi kali kita gantikan dengan simbol * (asterisk) dan operasi bagi dengan simbol / (slash)

Operator dibagi menjadi beberapa tipe:

Arithmetic Operator Arithmetic operator adalah operator yang melibatkan operasi matematika, seperti penambahan, pengurangan, perkalian, dan lain-lain.

    Tambah (+)
    Kurang (-)
    Kali (*)
    Bagi (/)
    Modulus (%)

Bagi kamu yang baru kali ini mendengar tentang modulus, modulus adalah sisa bagi. Misalkan kita membagi 7 dengan 2. Hasil bagi nya adalah 3, namun sisa dari hasil baginya adalah 1. Bilangan yang memang habis dibagi, sisa hasil baginya adalah 0.

Contoh sederhana penggunaan modulus:

> 4 % 2 // 4 modulus 2
> 0 // bilangan 4 habis dibagi 2, sehingga 4 modulus 2 menghasilkan nilai 0
> 5 % 2 // 5 modulus 2
> 1 // bilangan 5 habis tidak habis dibagi 2, sehingga 5 modulus 2 menghasilkan nilai 1, sisa dari hasil pembagian

Assignment Operator Assignment operator adalah operator yang meng-"assign", atau memberikan nilai. Biasanya, assignment operator digunakan untuk memberikan nilai kepada sebuah variable.

var bilangan;
bilangan = 5; // Contoh assignment value 5 ke sebuah variable

Comparison Operator Comparison operator adalah operator yang membandingkan satu nilai dengan nilai lainnya. Hasil operasi yang melibatkan comparison operator adalah antara 'true' atau 'false'.

    Equal operator (==)

var angka = 8;
console.log(angka == 8); // true
console.log(angka == 1); // false

    Not Equal operator (!=)

var angka = 8;
console.log(angka != 7); // true
console.log(angka != 8); // false

    Strict Equal operator (===)

Sedikit berbeda dengan equal operator, strict operator === mewajibkan nilai yang dibandingkan sama dan tipe data nya pun harus sama. Sedangkan pada ==, 8 dan "8" akan dianggap sama, karena itu menghasilkan nilai true.

var angkaBeda = "8";
console.log(angkaBeda == 8); // true
console.log(angkaBeda === 8); // false
console.log(angkaBeda === "8"); // true

    Strict Not Equal operator (!==)

Sedikit berbeda dengan not equal operator, strict not equal operator !== mewajibkan nilai yang dibandingkan tidak sama dan tipe data nya pun harus sama. Sedangkan pada !=, 8 dan "8" akan dianggap sama, karena itu menghasilkan nilai false.

var angkaBeda = "8";
console.log(angkaBeda != 7); // true
console.log(angkaBeda !== 7); // true
console.log(angkaBeda !== 8); // true
console.log(angkaBeda !== "8"); // false

    Less Than (<) / Greater Than (>)

operator selanjutnya adalah <, yaitu kurang dari sekian, dan >, yaitu lebih dari sekian.

var angka = 8;
console.log(angka > 7); // true
console.log(angka < 6); // false
console.log(angka <= 8); // true

Conditional Operator Conditional operator adalah operator yang akan mengevaluasi kebenaran dari nilai yang dikomputasi.

    OR (||): akan menghasilkan nilai true jika salah satu premis mengandung true

console.log(true || true); // true
console.log(true || false); // true
console.log(true || false || false); // true
console.log(false || false); // false

    AND (&&): akan menghasilkan nilai true jika kedua premis true.

console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(false && true && true); // false
console.log(true && true && true); // true

# Conditional

Kondisional adalah sebuah metode dimana kode akan mengecek apakah sebuah premis benar atau tidak. Jika kondisi sesuai, maka kode dalam kondisional akan dijalankan.

Contoh Conditional 1 Menjalankan proses apabila statement kondisi true.

if(true) {
  console.log("Jalankan kode"); // baris kode ini akan di panggil
}

Contoh Conditional 2 Tidak menjalankan proses di dalam block/scope conditional apabila statement kondisi false.

if(false) {
  console.log("Jalankan kode"); // baris kode ini tidak di panggil
}

Contoh Conditional 3 Conditional dengan statement yang akan menghasilkan nilai true atau false

var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}

Di dalam conditional, kita juga mengenal dengan yang dinamakan dengan branching. Branching, atau dalam bahasa indonesia berarti pencabangan, kita menjalankan potongan kode kita sesuai dengan "cabang" atau "jalur" yang memenuhi kondisi tersebut.

Contoh sangat sederhana-nya adalah sebuah kasus berikut ini:

Seorang anak diminta oleh ibunya untuk membeli telur di supermarket dan langsung pulang ke rumah. Jika di supermarket tersebut kehabisan telur, maka anak itu harus menelepon ibunya dan mengabari kalau supermarket kehabisan telur. Anak tersebut akan datang ke supermarket dan menemukan kondisi yang bercabang:

    Jika di supermarket terdapat telur, anak itu akan membeli telur itu dan pulang, atau
    Jika di supermarket tidak terdapat telur, anak itu akan menelepon ibunya.

pada JavaScript dan berbagai bahasa pemrograman, "jika tidak terdapat telur", atau bisa dibilang kondisi yang terjadi diluar "ekspektasi", terdapat else yang akan menjalankan proses lain jika if bernilai false. Contoh lebih jelas bisa dilihat dari contoh dibawah ini:

Contoh Conditional 4 Branching Sederhana (If-else)

var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}
else {
  console.log("angka yang ditampung bukan 5!");
}

Tidak hanya sampai situ, kondisional bisa juga bersifat bertumpuk, atau biasanya disebut juga sebagai nested-if.

Contoh Conditional 5 Branching Bertumpuk Sederhana (If-else)

var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}
else {
  if(tampung < 5) {
    console.log("angka yang ditampung bukan 5, tapi lebih kecil dari 5.");
  }
  else {
    console.log("angka yang ditampung bukan 5, tapi lebih besar dari 5.");
  }
}

Contoh di atas juga bisa dibuat dalam bentuk lain, yaitu else if. else-if adalah sebuah kondisional, dimana statement else if akan dijalankan apabila if tidak memenuhi kondisi / false, dan dijalankan sebelum statement else.

Contoh Conditional 5 Branching Bertumpuk Sederhana (If-else)

var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}
else if(tampung < 5) {
    console.log("angka yang ditampung bukan 5, tapi lebih kecil dari 5.");
}
else {
  console.log("angka yang ditampung bukan 5, tapi lebih besar dari 5.");
}

Selain menggunakan if-else, ada satu cara lagi untuk melakukan conditional, yaitu switch-case. Switch case ini biasanya lebih sering digunakan untuk skenario yang melibatkan banyak kondisi atau branching yang banyak. Contoh sederhananya adalah dengan sebuah remote TV.

var buttonPushed = 1;
switch(buttonPushed) {
  case 1:   { console.log('matikan TV!'); break; }
  case 2:   { console.log('turunkan volume TV!'); break; }
  case 3:   { console.log('tingkatkan volume TV!'); break; }
  case 4:   { console.log('matikan suara TV!'); break; }
  default:  { console.log('Tidak terjadi apa-apa'); }
}

Seperti dilihat di kode di atas, switch akan mengambil nilai, dan case adalah skenario apa saja yang memungkinkan untuk menjalankan satu proses. Kamu mungkin menyadari ada 1 sintaks baru yang kamu temukan: break;. Break memungkinkan kamu untuk "berhenti" dari proses kondisional/switch-case, dengan tujuan agar proses tidak berlanjut ke case selanjutnya. untuk eksperimenmu, kamu bisa mencoba menghapus break dan perhatikan apa yang terjadi.

Kamu bisa eksperimen dan mencoba kode di atas disini
Loop/Iteration

Loop/Iteration adalah tindakan mengulang / merepetisi sebuah proses, dengan tujuan untuk mendapatkan deret hasil, atau dengan tujuan mendapatkan hasil tertentu dengan repetisi. Setiap proses repetisi ini disebut sebagai Iteration atau Looping.

Untuk melakukan looping/iteration, JavaScript menyediakan beberapa jenis iteration, yaitu:

    while-loop
    for-loop

While-loop

While-loop adalah iterasi yang akan mengulang sebuah proses dengan sebuah kondisi tertentu.

Berikut adalah cara atau struktur penulisan while-loop:

while([Kondisi]) { // Kondisi yang menentukan apakah program akan melakukan iterasi. Berupa boolean atau true/false.
  [Proses] // Merupakan proses yang akan dijalankan dalam satu iterasi
}

Pada while-loop, statement while akan mengambil sebuah nilai true atau false dari hasil kondisi yang diberikan. Apabila statement while mendapatkan nilai true, maka proses yang berada didalam curly bracket ({ }) akan dijalankan. Looping akan terus dilakukan selama kondisi while-loop masih true.

Untuk mencegah looping berjalan terus-menerus, dilakukan sebuah proses yang akan mengubah kondisi yang sedemikian rupa yang bertujuan untuk menghentikan looping dengan menghasilkan kondisi yang false.

Contoh Looping While-loop 1 Looping Angka 1-9 Sederhana

var flag = 1;
while(flag < 10) { // Loop akan terus berjalan selama nilai flag masih dibawah 10
  console.log('Iterasi ke-' + flag); // Menampilkan nilai flag pada iterasi tertentu
  flag++; // Mengubah nilai flag dengan menambahkan 1
}

Kamu bisa mencoba kode di atas disini

Contoh Looping While-loop 2 Looping Mengembalikan Angka Total

var deret = 5;
var jumlah = 0;
while(deret > 0) { // Loop akan terus berjalan selama nilai deret masih di atas 0
  jumlah += deret; // Menambahkan nilai variable jumlah dengan angka deret
  deret--; // Mengubah nilai deret dengan mengurangi 1
  console.log('Jumlah saat ini: ' + jumlah)
}

console.log(jumlah);

Kamu bisa mencoba kode di atas disini
# For-loop

For-loop adalah bentuk lain dari iterasi, dimana statement for menjadi kontrol atas loop yang dilakukan. Hal ini yang menjadi pembeda antara for-loop dengan while-loop.

Berikut adalah cara atau struktur penulisan for-loop:

for([Inisialisasi], [Kondisi], [Incremental/Decremental]) {
  [Proses] // Merupakan proses yang akan dijalankan dalam satu iterasi
}

Pada for-loop, statement for akan menampung tiga parameter, yaitu sebut saja inisialisasi, kondisi, dan incremental/decremental. Ketiga parameter ini akan menjadi kontrol kapan loop ini harus berhenti. Pada parameter pertama, yaitu inisialisasi, sebuah variable diberikan nilai awal atau default. Pada parameter kedua, yaitu kondisi, for-loop akan terus berjalan selama kondisi ini masih terpenuhi, dengan kata lain, mengandung nilai true. Pada parameter kedua, yaitu incremental/decremental, variabel yang menjadi kontrol terhadap loop ini akan diubah nilainya.

emoji-thumbsup Best Practice: Walaupun memang for-loop dapat mengubah kondisi di dalam proses, namun best practice dari penggunaan for-loop adalah seluruh kendali atau kontrol dari looping ditentukan oleh variable yang diinisialisasi, di increment/decrement, dan juga kondisi for-loop pun menggunakan variable tersebut.

Untuk memudahkan kamu mendapatkan gambaran jelas tentang penggunaan for-loop, mari kita gunakan kedua contoh while-loop dan kita tulis ulang dalam bentuk for-loop.

Contoh Looping For-loop 1 Looping Angka 1-9 Sederhana

for(var angka = 1; angka < 10; angka++) {
  console.log('Iterasi ke-' + angka);
}

Kamu bisa mencoba kode di atas disini

Contoh Looping For-loop 2 Looping Mengembalikan Angka Total

var jumlah = 0;
for(var deret = 5; deret > 0; deret--) {
  jumlah += deret;
  console.log('Jumlah saat ini: ' + jumlah);
}

console.log('Jumlah terakhir: ' + jumlah);

Kamu bisa mencoba kode di atas disini

Contoh Looping For-loop 3 Looping Dengan Increment dan Decrement Lebih dari 1

for(var deret = 0; deret < 10; deret += 2) {
  console.log('Iterasi dengan Increment counter 2: ' + deret);
}

console.log('-------------------------------');

for(var deret = 15; deret > 0; deret -= 3) {
  console.log('Iterasi dengan Decrement counter : ' + deret);
}

Kamu bisa mencoba kode di atas disini

emoji-warning Waspadai Forever Looping!

Dengan sengaja atau sengaja, kode kamu mungkin dapat menghasilkan forever looping, atau looping yang tidak akan pernah berhenti. Bila ini terjadi, segera periksa statement kondisi kamu.

var flag = 1;
while(flag < 10) { // Loop akan terus berjalan, karena nilai flag tidak pernah berubah
  console.log('Iterasi ke-' + flag);
}

# Function/Method

Function adalah sebuah blok kode yang disusun sedemikian rupa untuk menjalankan sebuah tindakan. Blok kode ini dibuat untuk dapat bisa digunakan kembali. Cara atau bentuk penulisan function adalah sebagai berikut:

function nama_function(parameter 1, parameter 2, ...) {
  [Isi dari function berupa tindakan]
  return [expression];
}

Kode di atas tidak dapat kita copy-paste kan langsung, melainkan hanya sebuah bentuk penulisan function. Sebuah function, umumnya melakukan tindakan dan sebelum function berakhir, function bisa mengembalikan nilai dengan cara menambahkan sintaks return.

Kita juga dapat mengirimkan nilai ke dalam sebuah function dengan mencantumkannya ke dalam tanda kurung dalam penulisan function. Untuk mengirimkan nilai lebih dari satu, gunakan tanda , sebagai pemisah.

Contoh Function 1: Function sederhana tanpa return

function tampilkan() {
  console.log("halo!");
}

tampilkan();

Contoh Function 2: Function sederhana dengan return

function munculkanAngkaDua() {
  return 2
}

var tampung = munculkanAngkaDua();
console.log(tampung)

Contoh Function 3: Function dengan parameter

function kalikanDua(angka) {
  return angka * 2
}

var tampung = kalikanDua(2);
console.log(tampung)

Contoh Function 4: Pengiriman parameter lebih dari satu

function tampilkanAngka(angkaPertama, angkaKedua) {
  return angkaPertama + angkaKedua
}

console.log(tampilkanAngka(5,3))

Contoh Function 5: Inisialisasi parameter dengan nilai default

function tampilkanAngka(angka = 1) {
  return angka
}

console.log(tampilkanAngka(5)) // 5, sesuai dengan nilai parameter yang dikirim
console.log(tampilkanAngka()) // 1, karena default dari parameter adalah 1

emoji-warning Waspadai pengiriman parameter yang UNDEFINED!

Kita juga dapat menampung function sebagai variable dengan sebuah bentuk function yang dinamakan Anonymous Function.

var fungsiPerkalian = function(angkaPertama, angkaKedua) {
  return angkaPertama * angkaKedua
}

console.log(fungsiPerkalian(2,4))

#    emoji-notebook_with_decorative_cover Memahami Tipe Data dan Variabel pada JavaScript
# Data Type

Data Type, atau dalam bahasa Indonesia kita sebut sebagai Tipe Data, adalah sekumpulan data dengan nilai yang memiliki karakteristik berbeda. Beberapa contoh dari tipe data adalah:

    Number: tipe data dengan nilai berupa angka
    String: tipe data dengan nilai berupa kumpulan atau set dari beberapa karakter
    Boolean: tipe data dengan nilai berupa true atau false.

# Variable

Variable, atau dalam bahasa Indonesia kita sebut variabel, bisa memegang atau berisi hampir semua tipe data yang tersedia. Variabel memungkinkan kita untuk memuat atau menyimpan nilai data ke dalam sesuatu. Biasanya bersifat sementara saat program dijalankan.

var tampung = 5;
console.log(tampung); // 5

var angkaGanjil = 1;
var angkaGenap = 2;
console.log(angkaGanjil); // 1
console.log(angkaGenap); // 2

emoji-warning Waspadai pemanggilan variable yang tidak bernilai!

var tampungBaru;
console.log(tampungBaru); // undefined

# Operator

Operator adalah karakter yang merepresentasikan sebuah tindakan. Kita sering menemukan operator seperti + (tambah), x (kali), dan lain-lain. Namun, di dunia programming, operasi kali kita gantikan dengan simbol * (asterisk) dan operasi bagi dengan simbol / (slash)

Operator dibagi menjadi beberapa tipe:

Arithmetic Operator Arithmetic operator adalah operator yang melibatkan operasi matematika, seperti penambahan, pengurangan, perkalian, dan lain-lain.

    Tambah (+)
    Kurang (-)
    Kali (*)
    Bagi (/)
    Modulus (%)

Bagi kamu yang baru kali ini mendengar tentang modulus, modulus adalah sisa bagi. Misalkan kita membagi 7 dengan 2. Hasil bagi nya adalah 3, namun sisa dari hasil baginya adalah 1. Bilangan yang memang habis dibagi, sisa hasil baginya adalah 0.

Contoh sederhana penggunaan modulus:

> 4 % 2 // 4 modulus 2
> 0 // bilangan 4 habis dibagi 2, sehingga 4 modulus 2 menghasilkan nilai 0
> 5 % 2 // 5 modulus 2
> 1 // bilangan 5 habis tidak habis dibagi 2, sehingga 5 modulus 2 menghasilkan nilai 1, sisa dari hasil pembagian

Assignment Operator Assignment operator adalah operator yang meng-"assign", atau memberikan nilai. Biasanya, assignment operator digunakan untuk memberikan nilai kepada sebuah variable.

var bilangan;
bilangan = 5; // Contoh assignment value 5 ke sebuah variable

Comparison Operator Comparison operator adalah operator yang membandingkan satu nilai dengan nilai lainnya. Hasil operasi yang melibatkan comparison operator adalah antara 'true' atau 'false'.

    Equal operator (==)

var angka = 8;
console.log(angka == 8); // true
console.log(angka == 1); // false

    Not Equal operator (!=)

var angka = 8;
console.log(angka != 7); // true
console.log(angka != 8); // false

    Strict Equal operator (===)

Sedikit berbeda dengan equal operator, strict operator === mewajibkan nilai yang dibandingkan sama dan tipe data nya pun harus sama. Sedangkan pada ==, 8 dan "8" akan dianggap sama, karena itu menghasilkan nilai true.

var angkaBeda = "8";
console.log(angkaBeda == 8); // true
console.log(angkaBeda === 8); // false
console.log(angkaBeda === "8"); // true

    Strict Not Equal operator (!==)

Sedikit berbeda dengan not equal operator, strict not equal operator !== mewajibkan nilai yang dibandingkan tidak sama dan tipe data nya pun harus sama. Sedangkan pada !=, 8 dan "8" akan dianggap sama, karena itu menghasilkan nilai false.

var angkaBeda = "8";
console.log(angkaBeda != 7); // true
console.log(angkaBeda !== 7); // true
console.log(angkaBeda !== 8); // true
console.log(angkaBeda !== "8"); // false

    Less Than (<) / Greater Than (>)

operator selanjutnya adalah <, yaitu kurang dari sekian, dan >, yaitu lebih dari sekian.

var angka = 8;
console.log(angka > 7); // true
console.log(angka < 6); // false
console.log(angka <= 8); // true

Conditional Operator Conditional operator adalah operator yang akan mengevaluasi kebenaran dari nilai yang dikomputasi.

    OR (||): akan menghasilkan nilai true jika salah satu premis mengandung true

console.log(true || true); // true
console.log(true || false); // true
console.log(true || false || false); // true
console.log(false || false); // false

    AND (&&): akan menghasilkan nilai true jika kedua premis true.

console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(false && true && true); // false
console.log(true && true && true); // true

Conditional

Kondisional adalah sebuah metode dimana kode akan mengecek apakah sebuah premis benar atau tidak. Jika kondisi sesuai, maka kode dalam kondisional akan dijalankan.

Contoh Conditional 1 Menjalankan proses apabila statement kondisi true.

if(true) {
  console.log("Jalankan kode"); // baris kode ini akan di panggil
}

Contoh Conditional 2 Tidak menjalankan proses di dalam block/scope conditional apabila statement kondisi false.

if(false) {
  console.log("Jalankan kode"); // baris kode ini tidak di panggil
}

Contoh Conditional 3 Conditional dengan statement yang akan menghasilkan nilai true atau false

var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}

Di dalam conditional, kita juga mengenal dengan yang dinamakan dengan branching. Branching, atau dalam bahasa indonesia berarti pencabangan, kita menjalankan potongan kode kita sesuai dengan "cabang" atau "jalur" yang memenuhi kondisi tersebut.

Contoh sangat sederhana-nya adalah sebuah kasus berikut ini:

Seorang anak diminta oleh ibunya untuk membeli telur di supermarket dan langsung pulang ke rumah. Jika di supermarket tersebut kehabisan telur, maka anak itu harus menelepon ibunya dan mengabari kalau supermarket kehabisan telur. Anak tersebut akan datang ke supermarket dan menemukan kondisi yang bercabang:

    Jika di supermarket terdapat telur, anak itu akan membeli telur itu dan pulang, atau
    Jika di supermarket tidak terdapat telur, anak itu akan menelepon ibunya.

pada JavaScript dan berbagai bahasa pemrograman, "jika tidak terdapat telur", atau bisa dibilang kondisi yang terjadi diluar "ekspektasi", terdapat else yang akan menjalankan proses lain jika if bernilai false. Contoh lebih jelas bisa dilihat dari contoh dibawah ini:

Contoh Conditional 4 Branching Sederhana (If-else)

var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}
else {
  console.log("angka yang ditampung bukan 5!");
}

Tidak hanya sampai situ, kondisional bisa juga bersifat bertumpuk, atau biasanya disebut juga sebagai nested-if.

Contoh Conditional 5 Branching Bertumpuk Sederhana (If-else)

var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}
else {
  if(tampung < 5) {
    console.log("angka yang ditampung bukan 5, tapi lebih kecil dari 5.");
  }
  else {
    console.log("angka yang ditampung bukan 5, tapi lebih besar dari 5.");
  }
}

Contoh di atas juga bisa dibuat dalam bentuk lain, yaitu else if. else-if adalah sebuah kondisional, dimana statement else if akan dijalankan apabila if tidak memenuhi kondisi / false, dan dijalankan sebelum statement else.

Contoh Conditional 5 Branching Bertumpuk Sederhana (If-else)

var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}
else if(tampung < 5) {
    console.log("angka yang ditampung bukan 5, tapi lebih kecil dari 5.");
}
else {
  console.log("angka yang ditampung bukan 5, tapi lebih besar dari 5.");
}

Selain menggunakan if-else, ada satu cara lagi untuk melakukan conditional, yaitu switch-case. Switch case ini biasanya lebih sering digunakan untuk skenario yang melibatkan banyak kondisi atau branching yang banyak. Contoh sederhananya adalah dengan sebuah remote TV.

var buttonPushed = 1;
switch(buttonPushed) {
  case 1:   { console.log('matikan TV!'); break; }
  case 2:   { console.log('turunkan volume TV!'); break; }
  case 3:   { console.log('tingkatkan volume TV!'); break; }
  case 4:   { console.log('matikan suara TV!'); break; }
  default:  { console.log('Tidak terjadi apa-apa'); }
}

Seperti dilihat di kode di atas, switch akan mengambil nilai, dan case adalah skenario apa saja yang memungkinkan untuk menjalankan satu proses. Kamu mungkin menyadari ada 1 sintaks baru yang kamu temukan: break;. Break memungkinkan kamu untuk "berhenti" dari proses kondisional/switch-case, dengan tujuan agar proses tidak berlanjut ke case selanjutnya. untuk eksperimenmu, kamu bisa mencoba menghapus break dan perhatikan apa yang terjadi.

Kamu bisa eksperimen dan mencoba kode di atas disini
# Loop/Iteration

Loop/Iteration adalah tindakan mengulang / merepetisi sebuah proses, dengan tujuan untuk mendapatkan deret hasil, atau dengan tujuan mendapatkan hasil tertentu dengan repetisi. Setiap proses repetisi ini disebut sebagai Iteration atau Looping.

Untuk melakukan looping/iteration, JavaScript menyediakan beberapa jenis iteration, yaitu:

    while-loop
    for-loop

# While-loop

While-loop adalah iterasi yang akan mengulang sebuah proses dengan sebuah kondisi tertentu.

Berikut adalah cara atau struktur penulisan while-loop:

while([Kondisi]) { // Kondisi yang menentukan apakah program akan melakukan iterasi. Berupa boolean atau true/false.
  [Proses] // Merupakan proses yang akan dijalankan dalam satu iterasi
}

Pada while-loop, statement while akan mengambil sebuah nilai true atau false dari hasil kondisi yang diberikan. Apabila statement while mendapatkan nilai true, maka proses yang berada didalam curly bracket ({ }) akan dijalankan. Looping akan terus dilakukan selama kondisi while-loop masih true.

Untuk mencegah looping berjalan terus-menerus, dilakukan sebuah proses yang akan mengubah kondisi yang sedemikian rupa yang bertujuan untuk menghentikan looping dengan menghasilkan kondisi yang false.

Contoh Looping While-loop 1 Looping Angka 1-9 Sederhana

var flag = 1;
while(flag < 10) { // Loop akan terus berjalan selama nilai flag masih dibawah 10
  console.log('Iterasi ke-' + flag); // Menampilkan nilai flag pada iterasi tertentu
  flag++; // Mengubah nilai flag dengan menambahkan 1
}

Kamu bisa mencoba kode di atas disini

Contoh Looping While-loop 2 Looping Mengembalikan Angka Total

var deret = 5;
var jumlah = 0;
while(deret > 0) { // Loop akan terus berjalan selama nilai deret masih di atas 0
  jumlah += deret; // Menambahkan nilai variable jumlah dengan angka deret
  deret--; // Mengubah nilai deret dengan mengurangi 1
  console.log('Jumlah saat ini: ' + jumlah)
}

console.log(jumlah);

Kamu bisa mencoba kode di atas disini
# For-loop

For-loop adalah bentuk lain dari iterasi, dimana statement for menjadi kontrol atas loop yang dilakukan. Hal ini yang menjadi pembeda antara for-loop dengan while-loop.

Berikut adalah cara atau struktur penulisan for-loop:

for([Inisialisasi], [Kondisi], [Incremental/Decremental]) {
  [Proses] // Merupakan proses yang akan dijalankan dalam satu iterasi
}

Pada for-loop, statement for akan menampung tiga parameter, yaitu sebut saja inisialisasi, kondisi, dan incremental/decremental. Ketiga parameter ini akan menjadi kontrol kapan loop ini harus berhenti. Pada parameter pertama, yaitu inisialisasi, sebuah variable diberikan nilai awal atau default. Pada parameter kedua, yaitu kondisi, for-loop akan terus berjalan selama kondisi ini masih terpenuhi, dengan kata lain, mengandung nilai true. Pada parameter kedua, yaitu incremental/decremental, variabel yang menjadi kontrol terhadap loop ini akan diubah nilainya.

emoji-thumbsup Best Practice: Walaupun memang for-loop dapat mengubah kondisi di dalam proses, namun best practice dari penggunaan for-loop adalah seluruh kendali atau kontrol dari looping ditentukan oleh variable yang diinisialisasi, di increment/decrement, dan juga kondisi for-loop pun menggunakan variable tersebut.

Untuk memudahkan kamu mendapatkan gambaran jelas tentang penggunaan for-loop, mari kita gunakan kedua contoh while-loop dan kita tulis ulang dalam bentuk for-loop.

Contoh Looping For-loop 1 Looping Angka 1-9 Sederhana

for(var angka = 1; angka < 10; angka++) {
  console.log('Iterasi ke-' + angka);
}

Kamu bisa mencoba kode di atas disini

Contoh Looping For-loop 2 Looping Mengembalikan Angka Total

var jumlah = 0;
for(var deret = 5; deret > 0; deret--) {
  jumlah += deret;
  console.log('Jumlah saat ini: ' + jumlah);
}

console.log('Jumlah terakhir: ' + jumlah);

Kamu bisa mencoba kode di atas disini

Contoh Looping For-loop 3 Looping Dengan Increment dan Decrement Lebih dari 1

for(var deret = 0; deret < 10; deret += 2) {
  console.log('Iterasi dengan Increment counter 2: ' + deret);
}

console.log('-------------------------------');

for(var deret = 15; deret > 0; deret -= 3) {
  console.log('Iterasi dengan Decrement counter : ' + deret);
}

Kamu bisa mencoba kode di atas disini

emoji-warning Waspadai Forever Looping!

Dengan sengaja atau sengaja, kode kamu mungkin dapat menghasilkan forever looping, atau looping yang tidak akan pernah berhenti. Bila ini terjadi, segera periksa statement kondisi kamu.

var flag = 1;
while(flag < 10) { // Loop akan terus berjalan, karena nilai flag tidak pernah berubah
  console.log('Iterasi ke-' + flag);
}

# Function/Method

Function adalah sebuah blok kode yang disusun sedemikian rupa untuk menjalankan sebuah tindakan. Blok kode ini dibuat untuk dapat bisa digunakan kembali. Cara atau bentuk penulisan function adalah sebagai berikut:

function nama_function(parameter 1, parameter 2, ...) {
  [Isi dari function berupa tindakan]
  return [expression];
}

Kode di atas tidak dapat kita copy-paste kan langsung, melainkan hanya sebuah bentuk penulisan function. Sebuah function, umumnya melakukan tindakan dan sebelum function berakhir, function bisa mengembalikan nilai dengan cara menambahkan sintaks return.

Kita juga dapat mengirimkan nilai ke dalam sebuah function dengan mencantumkannya ke dalam tanda kurung dalam penulisan function. Untuk mengirimkan nilai lebih dari satu, gunakan tanda , sebagai pemisah.

Contoh Function 1: Function sederhana tanpa return

function tampilkan() {
  console.log("halo!");
}

tampilkan();

Contoh Function 2: Function sederhana dengan return

function munculkanAngkaDua() {
  return 2
}

var tampung = munculkanAngkaDua();
console.log(tampung)

Contoh Function 3: Function dengan parameter

function kalikanDua(angka) {
  return angka * 2
}

var tampung = kalikanDua(2);
console.log(tampung)

Contoh Function 4: Pengiriman parameter lebih dari satu

function tampilkanAngka(angkaPertama, angkaKedua) {
  return angkaPertama + angkaKedua
}

console.log(tampilkanAngka(5,3))

Contoh Function 5: Inisialisasi parameter dengan nilai default

function tampilkanAngka(angka = 1) {
  return angka
}

console.log(tampilkanAngka(5)) // 5, sesuai dengan nilai parameter yang dikirim
console.log(tampilkanAngka()) // 1, karena default dari parameter adalah 1

emoji-warning Waspadai pengiriman parameter yang UNDEFINED!

Kita juga dapat menampung function sebagai variable dengan sebuah bentuk function yang dinamakan Anonymous Function.

var fungsiPerkalian = function(angkaPertama, angkaKedua) {
  return angkaPertama * angkaKedua
}

console.log(fungsiPerkalian(2,4))

#    emoji-notebook_with_decorative_cover Mengenal Berbagai Jenis Operasi dalam JavaScript
Operator

Operator adalah karakter yang merepresentasikan sebuah tindakan. Kita sering menemukan operator seperti + (tambah), x (kali), dan lain-lain. Namun, di dunia programming, operasi kali kita gantikan dengan simbol * (asterisk) dan operasi bagi dengan simbol / (slash)

Operator dibagi menjadi beberapa tipe:

Arithmetic Operator Arithmetic operator adalah operator yang melibatkan operasi matematika, seperti penambahan, pengurangan, perkalian, dan lain-lain.

    Tambah (+)
    Kurang (-)
    Kali (*)
    Bagi (/)
    Modulus (%)

Bagi kamu yang baru kali ini mendengar tentang modulus, modulus adalah sisa bagi. Misalkan kita membagi 7 dengan 2. Hasil bagi nya adalah 3, namun sisa dari hasil baginya adalah 1. Bilangan yang memang habis dibagi, sisa hasil baginya adalah 0.

Contoh sederhana penggunaan modulus:

> 4 % 2 // 4 modulus 2
> 0 // bilangan 4 habis dibagi 2, sehingga 4 modulus 2 menghasilkan nilai 0
> 5 % 2 // 5 modulus 2
> 1 // bilangan 5 habis tidak habis dibagi 2, sehingga 5 modulus 2 menghasilkan nilai 1, sisa dari hasil pembagian

Assignment Operator Assignment operator adalah operator yang meng-"assign", atau memberikan nilai. Biasanya, assignment operator digunakan untuk memberikan nilai kepada sebuah variable.

var bilangan;
bilangan = 5; // Contoh assignment value 5 ke sebuah variable

Comparison Operator Comparison operator adalah operator yang membandingkan satu nilai dengan nilai lainnya. Hasil operasi yang melibatkan comparison operator adalah antara 'true' atau 'false'.

    Equal operator (==)

var angka = 8;
console.log(angka == 8); // true
console.log(angka == 1); // false

    Not Equal operator (!=)

var angka = 8;
console.log(angka != 7); // true
console.log(angka != 8); // false

    Strict Equal operator (===)

Sedikit berbeda dengan equal operator, strict operator === mewajibkan nilai yang dibandingkan sama dan tipe data nya pun harus sama. Sedangkan pada ==, 8 dan "8" akan dianggap sama, karena itu menghasilkan nilai true.

var angkaBeda = "8";
console.log(angkaBeda == 8); // true
console.log(angkaBeda === 8); // false
console.log(angkaBeda === "8"); // true

    Strict Not Equal operator (!==)

Sedikit berbeda dengan not equal operator, strict not equal operator !== mewajibkan nilai yang dibandingkan tidak sama dan tipe data nya pun harus sama. Sedangkan pada !=, 8 dan "8" akan dianggap sama, karena itu menghasilkan nilai false.

var angkaBeda = "8";
console.log(angkaBeda != 7); // true
console.log(angkaBeda !== 7); // true
console.log(angkaBeda !== 8); // true
console.log(angkaBeda !== "8"); // false

    Less Than (<) / Greater Than (>)

operator selanjutnya adalah <, yaitu kurang dari sekian, dan >, yaitu lebih dari sekian.

var angka = 8;
console.log(angka > 7); // true
console.log(angka < 6); // false
console.log(angka <= 8); // true

Conditional Operator Conditional operator adalah operator yang akan mengevaluasi kebenaran dari nilai yang dikomputasi.

    OR (||): akan menghasilkan nilai true jika salah satu premis mengandung true

console.log(true || true); // true
console.log(true || false); // true
console.log(true || false || false); // true
console.log(false || false); // false

    AND (&&): akan menghasilkan nilai true jika kedua premis true.

console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(false && true && true); // false
console.log(true && true && true); // true

Conditional

Kondisional adalah sebuah metode dimana kode akan mengecek apakah sebuah premis benar atau tidak. Jika kondisi sesuai, maka kode dalam kondisional akan dijalankan.

Contoh Conditional 1 Menjalankan proses apabila statement kondisi true.

if(true) {
  console.log("Jalankan kode"); // baris kode ini akan di panggil
}

Contoh Conditional 2 Tidak menjalankan proses di dalam block/scope conditional apabila statement kondisi false.

if(false) {
  console.log("Jalankan kode"); // baris kode ini tidak di panggil
}

Contoh Conditional 3 Conditional dengan statement yang akan menghasilkan nilai true atau false

var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}

Di dalam conditional, kita juga mengenal dengan yang dinamakan dengan branching. Branching, atau dalam bahasa indonesia berarti pencabangan, kita menjalankan potongan kode kita sesuai dengan "cabang" atau "jalur" yang memenuhi kondisi tersebut.

Contoh sangat sederhana-nya adalah sebuah kasus berikut ini:

Seorang anak diminta oleh ibunya untuk membeli telur di supermarket dan langsung pulang ke rumah. Jika di supermarket tersebut kehabisan telur, maka anak itu harus menelepon ibunya dan mengabari kalau supermarket kehabisan telur. Anak tersebut akan datang ke supermarket dan menemukan kondisi yang bercabang:

    Jika di supermarket terdapat telur, anak itu akan membeli telur itu dan pulang, atau
    Jika di supermarket tidak terdapat telur, anak itu akan menelepon ibunya.

pada JavaScript dan berbagai bahasa pemrograman, "jika tidak terdapat telur", atau bisa dibilang kondisi yang terjadi diluar "ekspektasi", terdapat else yang akan menjalankan proses lain jika if bernilai false. Contoh lebih jelas bisa dilihat dari contoh dibawah ini:

Contoh Conditional 4 Branching Sederhana (If-else)

var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}
else {
  console.log("angka yang ditampung bukan 5!");
}

Tidak hanya sampai situ, kondisional bisa juga bersifat bertumpuk, atau biasanya disebut juga sebagai nested-if.

Contoh Conditional 5 Branching Bertumpuk Sederhana (If-else)

var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}
else {
  if(tampung < 5) {
    console.log("angka yang ditampung bukan 5, tapi lebih kecil dari 5.");
  }
  else {
    console.log("angka yang ditampung bukan 5, tapi lebih besar dari 5.");
  }
}

Contoh di atas juga bisa dibuat dalam bentuk lain, yaitu else if. else-if adalah sebuah kondisional, dimana statement else if akan dijalankan apabila if tidak memenuhi kondisi / false, dan dijalankan sebelum statement else.

Contoh Conditional 5 Branching Bertumpuk Sederhana (If-else)

var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}
else if(tampung < 5) {
    console.log("angka yang ditampung bukan 5, tapi lebih kecil dari 5.");
}
else {
  console.log("angka yang ditampung bukan 5, tapi lebih besar dari 5.");
}

Selain menggunakan if-else, ada satu cara lagi untuk melakukan conditional, yaitu switch-case. Switch case ini biasanya lebih sering digunakan untuk skenario yang melibatkan banyak kondisi atau branching yang banyak. Contoh sederhananya adalah dengan sebuah remote TV.

var buttonPushed = 1;
switch(buttonPushed) {
  case 1:   { console.log('matikan TV!'); break; }
  case 2:   { console.log('turunkan volume TV!'); break; }
  case 3:   { console.log('tingkatkan volume TV!'); break; }
  case 4:   { console.log('matikan suara TV!'); break; }
  default:  { console.log('Tidak terjadi apa-apa'); }
}

Seperti dilihat di kode di atas, switch akan mengambil nilai, dan case adalah skenario apa saja yang memungkinkan untuk menjalankan satu proses. Kamu mungkin menyadari ada 1 sintaks baru yang kamu temukan: break;. Break memungkinkan kamu untuk "berhenti" dari proses kondisional/switch-case, dengan tujuan agar proses tidak berlanjut ke case selanjutnya. untuk eksperimenmu, kamu bisa mencoba menghapus break dan perhatikan apa yang terjadi.

Kamu bisa eksperimen dan mencoba kode di atas disini
Loop/Iteration

Loop/Iteration adalah tindakan mengulang / merepetisi sebuah proses, dengan tujuan untuk mendapatkan deret hasil, atau dengan tujuan mendapatkan hasil tertentu dengan repetisi. Setiap proses repetisi ini disebut sebagai Iteration atau Looping.

Untuk melakukan looping/iteration, JavaScript menyediakan beberapa jenis iteration, yaitu:

    while-loop
    for-loop

While-loop

While-loop adalah iterasi yang akan mengulang sebuah proses dengan sebuah kondisi tertentu.

Berikut adalah cara atau struktur penulisan while-loop:

while([Kondisi]) { // Kondisi yang menentukan apakah program akan melakukan iterasi. Berupa boolean atau true/false.
  [Proses] // Merupakan proses yang akan dijalankan dalam satu iterasi
}

Pada while-loop, statement while akan mengambil sebuah nilai true atau false dari hasil kondisi yang diberikan. Apabila statement while mendapatkan nilai true, maka proses yang berada didalam curly bracket ({ }) akan dijalankan. Looping akan terus dilakukan selama kondisi while-loop masih true.

Untuk mencegah looping berjalan terus-menerus, dilakukan sebuah proses yang akan mengubah kondisi yang sedemikian rupa yang bertujuan untuk menghentikan looping dengan menghasilkan kondisi yang false.

Contoh Looping While-loop 1 Looping Angka 1-9 Sederhana

var flag = 1;
while(flag < 10) { // Loop akan terus berjalan selama nilai flag masih dibawah 10
  console.log('Iterasi ke-' + flag); // Menampilkan nilai flag pada iterasi tertentu
  flag++; // Mengubah nilai flag dengan menambahkan 1
}

Kamu bisa mencoba kode di atas disini

Contoh Looping While-loop 2 Looping Mengembalikan Angka Total

var deret = 5;
var jumlah = 0;
while(deret > 0) { // Loop akan terus berjalan selama nilai deret masih di atas 0
  jumlah += deret; // Menambahkan nilai variable jumlah dengan angka deret
  deret--; // Mengubah nilai deret dengan mengurangi 1
  console.log('Jumlah saat ini: ' + jumlah)
}

console.log(jumlah);

Kamu bisa mencoba kode di atas disini
For-loop

For-loop adalah bentuk lain dari iterasi, dimana statement for menjadi kontrol atas loop yang dilakukan. Hal ini yang menjadi pembeda antara for-loop dengan while-loop.

Berikut adalah cara atau struktur penulisan for-loop:

for([Inisialisasi], [Kondisi], [Incremental/Decremental]) {
  [Proses] // Merupakan proses yang akan dijalankan dalam satu iterasi
}

Pada for-loop, statement for akan menampung tiga parameter, yaitu sebut saja inisialisasi, kondisi, dan incremental/decremental. Ketiga parameter ini akan menjadi kontrol kapan loop ini harus berhenti. Pada parameter pertama, yaitu inisialisasi, sebuah variable diberikan nilai awal atau default. Pada parameter kedua, yaitu kondisi, for-loop akan terus berjalan selama kondisi ini masih terpenuhi, dengan kata lain, mengandung nilai true. Pada parameter kedua, yaitu incremental/decremental, variabel yang menjadi kontrol terhadap loop ini akan diubah nilainya.

emoji-thumbsup Best Practice: Walaupun memang for-loop dapat mengubah kondisi di dalam proses, namun best practice dari penggunaan for-loop adalah seluruh kendali atau kontrol dari looping ditentukan oleh variable yang diinisialisasi, di increment/decrement, dan juga kondisi for-loop pun menggunakan variable tersebut.

Untuk memudahkan kamu mendapatkan gambaran jelas tentang penggunaan for-loop, mari kita gunakan kedua contoh while-loop dan kita tulis ulang dalam bentuk for-loop.

Contoh Looping For-loop 1 Looping Angka 1-9 Sederhana

for(var angka = 1; angka < 10; angka++) {
  console.log('Iterasi ke-' + angka);
}

Kamu bisa mencoba kode di atas disini

Contoh Looping For-loop 2 Looping Mengembalikan Angka Total

var jumlah = 0;
for(var deret = 5; deret > 0; deret--) {
  jumlah += deret;
  console.log('Jumlah saat ini: ' + jumlah);
}

console.log('Jumlah terakhir: ' + jumlah);

Kamu bisa mencoba kode di atas disini

Contoh Looping For-loop 3 Looping Dengan Increment dan Decrement Lebih dari 1

for(var deret = 0; deret < 10; deret += 2) {
  console.log('Iterasi dengan Increment counter 2: ' + deret);
}

console.log('-------------------------------');

for(var deret = 15; deret > 0; deret -= 3) {
  console.log('Iterasi dengan Decrement counter : ' + deret);
}

Kamu bisa mencoba kode di atas disini

emoji-warning Waspadai Forever Looping!

Dengan sengaja atau sengaja, kode kamu mungkin dapat menghasilkan forever looping, atau looping yang tidak akan pernah berhenti. Bila ini terjadi, segera periksa statement kondisi kamu.

var flag = 1;
while(flag < 10) { // Loop akan terus berjalan, karena nilai flag tidak pernah berubah
  console.log('Iterasi ke-' + flag);
}

Function/Method

Function adalah sebuah blok kode yang disusun sedemikian rupa untuk menjalankan sebuah tindakan. Blok kode ini dibuat untuk dapat bisa digunakan kembali. Cara atau bentuk penulisan function adalah sebagai berikut:

function nama_function(parameter 1, parameter 2, ...) {
  [Isi dari function berupa tindakan]
  return [expression];
}

Kode di atas tidak dapat kita copy-paste kan langsung, melainkan hanya sebuah bentuk penulisan function. Sebuah function, umumnya melakukan tindakan dan sebelum function berakhir, function bisa mengembalikan nilai dengan cara menambahkan sintaks return.

Kita juga dapat mengirimkan nilai ke dalam sebuah function dengan mencantumkannya ke dalam tanda kurung dalam penulisan function. Untuk mengirimkan nilai lebih dari satu, gunakan tanda , sebagai pemisah.

Contoh Function 1: Function sederhana tanpa return

function tampilkan() {
  console.log("halo!");
}

tampilkan();

Contoh Function 2: Function sederhana dengan return

function munculkanAngkaDua() {
  return 2
}

var tampung = munculkanAngkaDua();
console.log(tampung)

Contoh Function 3: Function dengan parameter

function kalikanDua(angka) {
  return angka * 2
}

var tampung = kalikanDua(2);
console.log(tampung)

Contoh Function 4: Pengiriman parameter lebih dari satu

function tampilkanAngka(angkaPertama, angkaKedua) {
  return angkaPertama + angkaKedua
}

console.log(tampilkanAngka(5,3))

Contoh Function 5: Inisialisasi parameter dengan nilai default

function tampilkanAngka(angka = 1) {
  return angka
}

console.log(tampilkanAngka(5)) // 5, sesuai dengan nilai parameter yang dikirim
console.log(tampilkanAngka()) // 1, karena default dari parameter adalah 1

emoji-warning Waspadai pengiriman parameter yang UNDEFINED!

Kita juga dapat menampung function sebagai variable dengan sebuah bentuk function yang dinamakan Anonymous Function.

var fungsiPerkalian = function(angkaPertama, angkaKedua) {
  return angkaPertama * angkaKedua
}

console.log(fungsiPerkalian(2,4))

#    emoji-notebook_with_decorative_cover Memahami Control Flow: Conditional dan Branching
# Conditional

Kondisional adalah sebuah metode dimana kode akan mengecek apakah sebuah premis benar atau tidak. Jika kondisi sesuai, maka kode dalam kondisional akan dijalankan.

Contoh Conditional 1 Menjalankan proses apabila statement kondisi true.

if(true) {
  console.log("Jalankan kode"); // baris kode ini akan di panggil
}

Contoh Conditional 2 Tidak menjalankan proses di dalam block/scope conditional apabila statement kondisi false.

if(false) {
  console.log("Jalankan kode"); // baris kode ini tidak di panggil
}

Contoh Conditional 3 Conditional dengan statement yang akan menghasilkan nilai true atau false

var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}

Di dalam conditional, kita juga mengenal dengan yang dinamakan dengan branching. Branching, atau dalam bahasa indonesia berarti pencabangan, kita menjalankan potongan kode kita sesuai dengan "cabang" atau "jalur" yang memenuhi kondisi tersebut.

Contoh sangat sederhana-nya adalah sebuah kasus berikut ini:

Seorang anak diminta oleh ibunya untuk membeli telur di supermarket dan langsung pulang ke rumah. Jika di supermarket tersebut kehabisan telur, maka anak itu harus menelepon ibunya dan mengabari kalau supermarket kehabisan telur. Anak tersebut akan datang ke supermarket dan menemukan kondisi yang bercabang:

    Jika di supermarket terdapat telur, anak itu akan membeli telur itu dan pulang, atau
    Jika di supermarket tidak terdapat telur, anak itu akan menelepon ibunya.

pada JavaScript dan berbagai bahasa pemrograman, "jika tidak terdapat telur", atau bisa dibilang kondisi yang terjadi diluar "ekspektasi", terdapat else yang akan menjalankan proses lain jika if bernilai false. Contoh lebih jelas bisa dilihat dari contoh dibawah ini:

Contoh Conditional 4 Branching Sederhana (If-else)

var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}
else {
  console.log("angka yang ditampung bukan 5!");
}

Tidak hanya sampai situ, kondisional bisa juga bersifat bertumpuk, atau biasanya disebut juga sebagai nested-if.

Contoh Conditional 5 Branching Bertumpuk Sederhana (If-else)

var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}
else {
  if(tampung < 5) {
    console.log("angka yang ditampung bukan 5, tapi lebih kecil dari 5.");
  }
  else {
    console.log("angka yang ditampung bukan 5, tapi lebih besar dari 5.");
  }
}

Contoh di atas juga bisa dibuat dalam bentuk lain, yaitu else if. else-if adalah sebuah kondisional, dimana statement else if akan dijalankan apabila if tidak memenuhi kondisi / false, dan dijalankan sebelum statement else.

Contoh Conditional 5 Branching Bertumpuk Sederhana (If-else)

var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}
else if(tampung < 5) {
    console.log("angka yang ditampung bukan 5, tapi lebih kecil dari 5.");
}
else {
  console.log("angka yang ditampung bukan 5, tapi lebih besar dari 5.");
}

Selain menggunakan if-else, ada satu cara lagi untuk melakukan conditional, yaitu switch-case. Switch case ini biasanya lebih sering digunakan untuk skenario yang melibatkan banyak kondisi atau branching yang banyak. Contoh sederhananya adalah dengan sebuah remote TV.

var buttonPushed = 1;
switch(buttonPushed) {
  case 1:   { console.log('matikan TV!'); break; }
  case 2:   { console.log('turunkan volume TV!'); break; }
  case 3:   { console.log('tingkatkan volume TV!'); break; }
  case 4:   { console.log('matikan suara TV!'); break; }
  default:  { console.log('Tidak terjadi apa-apa'); }
}

Seperti dilihat di kode di atas, switch akan mengambil nilai, dan case adalah skenario apa saja yang memungkinkan untuk menjalankan satu proses. Kamu mungkin menyadari ada 1 sintaks baru yang kamu temukan: break;. Break memungkinkan kamu untuk "berhenti" dari proses kondisional/switch-case, dengan tujuan agar proses tidak berlanjut ke case selanjutnya. untuk eksperimenmu, kamu bisa mencoba menghapus break dan perhatikan apa yang terjadi.

Kamu bisa eksperimen dan mencoba kode di atas disini
# Loop/Iteration

Loop/Iteration adalah tindakan mengulang / merepetisi sebuah proses, dengan tujuan untuk mendapatkan deret hasil, atau dengan tujuan mendapatkan hasil tertentu dengan repetisi. Setiap proses repetisi ini disebut sebagai Iteration atau Looping.

Untuk melakukan looping/iteration, JavaScript menyediakan beberapa jenis iteration, yaitu:

    while-loop
    for-loop

# While-loop

While-loop adalah iterasi yang akan mengulang sebuah proses dengan sebuah kondisi tertentu.

Berikut adalah cara atau struktur penulisan while-loop:

while([Kondisi]) { // Kondisi yang menentukan apakah program akan melakukan iterasi. Berupa boolean atau true/false.
  [Proses] // Merupakan proses yang akan dijalankan dalam satu iterasi
}

Pada while-loop, statement while akan mengambil sebuah nilai true atau false dari hasil kondisi yang diberikan. Apabila statement while mendapatkan nilai true, maka proses yang berada didalam curly bracket ({ }) akan dijalankan. Looping akan terus dilakukan selama kondisi while-loop masih true.

Untuk mencegah looping berjalan terus-menerus, dilakukan sebuah proses yang akan mengubah kondisi yang sedemikian rupa yang bertujuan untuk menghentikan looping dengan menghasilkan kondisi yang false.

Contoh Looping While-loop 1 Looping Angka 1-9 Sederhana

var flag = 1;
while(flag < 10) { // Loop akan terus berjalan selama nilai flag masih dibawah 10
  console.log('Iterasi ke-' + flag); // Menampilkan nilai flag pada iterasi tertentu
  flag++; // Mengubah nilai flag dengan menambahkan 1
}

Kamu bisa mencoba kode di atas disini

Contoh Looping While-loop 2 Looping Mengembalikan Angka Total

var deret = 5;
var jumlah = 0;
while(deret > 0) { // Loop akan terus berjalan selama nilai deret masih di atas 0
  jumlah += deret; // Menambahkan nilai variable jumlah dengan angka deret
  deret--; // Mengubah nilai deret dengan mengurangi 1
  console.log('Jumlah saat ini: ' + jumlah)
}

console.log(jumlah);

Kamu bisa mencoba kode di atas disini
# For-loop

For-loop adalah bentuk lain dari iterasi, dimana statement for menjadi kontrol atas loop yang dilakukan. Hal ini yang menjadi pembeda antara for-loop dengan while-loop.

Berikut adalah cara atau struktur penulisan for-loop:

for([Inisialisasi], [Kondisi], [Incremental/Decremental]) {
  [Proses] // Merupakan proses yang akan dijalankan dalam satu iterasi
}

Pada for-loop, statement for akan menampung tiga parameter, yaitu sebut saja inisialisasi, kondisi, dan incremental/decremental. Ketiga parameter ini akan menjadi kontrol kapan loop ini harus berhenti. Pada parameter pertama, yaitu inisialisasi, sebuah variable diberikan nilai awal atau default. Pada parameter kedua, yaitu kondisi, for-loop akan terus berjalan selama kondisi ini masih terpenuhi, dengan kata lain, mengandung nilai true. Pada parameter kedua, yaitu incremental/decremental, variabel yang menjadi kontrol terhadap loop ini akan diubah nilainya.

emoji-thumbsup Best Practice: Walaupun memang for-loop dapat mengubah kondisi di dalam proses, namun best practice dari penggunaan for-loop adalah seluruh kendali atau kontrol dari looping ditentukan oleh variable yang diinisialisasi, di increment/decrement, dan juga kondisi for-loop pun menggunakan variable tersebut.

Untuk memudahkan kamu mendapatkan gambaran jelas tentang penggunaan for-loop, mari kita gunakan kedua contoh while-loop dan kita tulis ulang dalam bentuk for-loop.

Contoh Looping For-loop 1 Looping Angka 1-9 Sederhana

for(var angka = 1; angka < 10; angka++) {
  console.log('Iterasi ke-' + angka);
}

Kamu bisa mencoba kode di atas disini

Contoh Looping For-loop 2 Looping Mengembalikan Angka Total

var jumlah = 0;
for(var deret = 5; deret > 0; deret--) {
  jumlah += deret;
  console.log('Jumlah saat ini: ' + jumlah);
}

console.log('Jumlah terakhir: ' + jumlah);

Kamu bisa mencoba kode di atas disini

Contoh Looping For-loop 3 Looping Dengan Increment dan Decrement Lebih dari 1

for(var deret = 0; deret < 10; deret += 2) {
  console.log('Iterasi dengan Increment counter 2: ' + deret);
}

console.log('-------------------------------');

for(var deret = 15; deret > 0; deret -= 3) {
  console.log('Iterasi dengan Decrement counter : ' + deret);
}

Kamu bisa mencoba kode di atas disini

emoji-warning Waspadai Forever Looping!

Dengan sengaja atau sengaja, kode kamu mungkin dapat menghasilkan forever looping, atau looping yang tidak akan pernah berhenti. Bila ini terjadi, segera periksa statement kondisi kamu.

var flag = 1;
while(flag < 10) { // Loop akan terus berjalan, karena nilai flag tidak pernah berubah
  console.log('Iterasi ke-' + flag);
}

# Function/Method

Function adalah sebuah blok kode yang disusun sedemikian rupa untuk menjalankan sebuah tindakan. Blok kode ini dibuat untuk dapat bisa digunakan kembali. Cara atau bentuk penulisan function adalah sebagai berikut:

function nama_function(parameter 1, parameter 2, ...) {
  [Isi dari function berupa tindakan]
  return [expression];
}

Kode di atas tidak dapat kita copy-paste kan langsung, melainkan hanya sebuah bentuk penulisan function. Sebuah function, umumnya melakukan tindakan dan sebelum function berakhir, function bisa mengembalikan nilai dengan cara menambahkan sintaks return.

Kita juga dapat mengirimkan nilai ke dalam sebuah function dengan mencantumkannya ke dalam tanda kurung dalam penulisan function. Untuk mengirimkan nilai lebih dari satu, gunakan tanda , sebagai pemisah.

Contoh Function 1: Function sederhana tanpa return

function tampilkan() {
  console.log("halo!");
}

tampilkan();

Contoh Function 2: Function sederhana dengan return

function munculkanAngkaDua() {
  return 2
}

var tampung = munculkanAngkaDua();
console.log(tampung)

Contoh Function 3: Function dengan parameter

function kalikanDua(angka) {
  return angka * 2
}

var tampung = kalikanDua(2);
console.log(tampung)

Contoh Function 4: Pengiriman parameter lebih dari satu

function tampilkanAngka(angkaPertama, angkaKedua) {
  return angkaPertama + angkaKedua
}

console.log(tampilkanAngka(5,3))

Contoh Function 5: Inisialisasi parameter dengan nilai default

function tampilkanAngka(angka = 1) {
  return angka
}

console.log(tampilkanAngka(5)) // 5, sesuai dengan nilai parameter yang dikirim
console.log(tampilkanAngka()) // 1, karena default dari parameter adalah 1

emoji-warning Waspadai pengiriman parameter yang UNDEFINED!

Kita juga dapat menampung function sebagai variable dengan sebuah bentuk function yang dinamakan Anonymous Function.

var fungsiPerkalian = function(angkaPertama, angkaKedua) {
  return angkaPertama * angkaKedua
}

console.log(fungsiPerkalian(2,4))

# Tugas :

#    emoji-anchor [Exercises 2] Codecademy JavaScript Building Blocks: Unit 1 and 2 - Intro and Control Flow only
#    emoji-anchor [Exercises 3] Mengenal penggunaan Conditional if-else dalam JavaScript
# Menggunakan If Else
# Objectives

    Mengerti Cara Menggunakan If-Else
    Mengerti Logika If-Else
    Mengerti Cara Menggunakan Operator Evaluasi ===, !==

# Directions

Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), yaitu nama dan peran. Variabel peran harus memiliki isi data, bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. Tugas Anda adalah untuk membuat program yang mengecek isi variabel peran serta mengeluarkan respon sesuai isi variabel tersebut.
Hints

    Variabel tetap di-input secara manual.
    Variabel nama dan peran dapat diisi apa saja.
    Nama tidak perlu dicek sama persis seperti contoh input/output
    Buat If-Else berbeda masing-masing untuk mengecek peran

# Input

//Contoh input
var nama = 'Mikael';
var peran = '';

Silakan ganti nilai nama dan peran untuk mengetes kondisi!
Output

// Output untuk Input nama = '' dan peran = ''
"Nama harus diisi!"

//Output untuk Input nama = 'Mikael' dan peran = ''
"Halo Mikael, Pilih peranmu untuk memulai game!"

//Output untuk Input nama = 'Nina' dan peran 'Ksatria'
"Selamat datang di Dunia Proxytia, Nina"
"Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"

//Output untuk Input nama = 'Danu' dan peran 'Tabib'

#    emoji-anchor [Exercises 4] Mengenal penggunaan Conditional (Switch-Case) dalam JavaScript
# Menggunakan Switch-Case
# Objectives

    Mengerti Cara Menggunakan Switch-Case
    Mengerti Logika Switch-Case

# Directions

Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

Gunakan switch case untuk kasus ini!

Contoh:

var hari = 21; var bulan = 1; var tahun = 1945;

Maka hasil yang akan tampil di console adalah: '21 Januari 1945';
Skeleton Code / Code yang dicontohkan yang perlu diikuti dan dimodifikasi

var tanggal; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

# Rabu
Mengenal Tipe data String dan Konsep Looping atau Perulangan

Hari ini mari kita berkenalan dengan string dan perulangan, atau sering disebut juga sebagai looping atau iteration di JavaScript.

# Materi & Referensi :

#    emoji-notebook_with_decorative_cover Memahami Tipe Data String pada JavaScript
# String pada JavaScript
# Objectives

    Memahami Tipe Data String pada JavaScript
    Mengetahui Property dan Method yang Dimiliki String
    Mengetahui Cara Menggunakan Property dan Method yang Dimiliki String
    Mengetahui Konversi Tipe Data Lain ke String dan Sebaliknya

# Learnings

    More About String
    String Properties
    String Methods
    Typecasting To and From String

# More About String

String adalah tipe data yang yang berisikan karakter-karakter alfanumerik yang dibungkus dengan karakter kutip (' dan "). karakter-karakter pada string dapat diakses menggunakan indeks atau posisi, dimana dimulai dari angka 0.

var title = 'Your Name';

// mengambil huruf pertama dari string
console.log(title[0]); // 'Y'

// mengambil huruf terakhir dari string. Apa itu length? Penjelasan .length di section selanjutnya :)
console.log(title[title.length - 1]); // 'e'

// "memaksa" perubahan nilai di posisi 0
title[0] = 'T';
// tidak akan ada perubahan
console.log(title); // 'Your Name'

title = 'My name';
// ada perubahan, karena assign keseluruhan string
console.log(title); // 'My name'

// menambahkan string dengan simbol '+'
title = title + ' is Bento';

console.log(title); // 'My name is Bento'

Pada JavaScript, tipe data primitif seperti String diperlakukan seperti objek. Oleh karena itu, String memiliki property dan method. Apabila kamu belum mendengar tentang Objek pada JavaScript (dan memang seharusnya belum), kamu tidak perlu pusing dengan kedua istilah tersebut. Secara sederhana, property dan method adalah kemampuan milik String yang dapat digunakan untuk mempermudah kita dalam melakukan pemrograman. Kamu cukup menggunakan apa yang dimanakan dengan method. Method, akan lebih dalam dibahas di materi JavaScript Function.
String Properties
# .length

Mengembalikan panjang dari suatu string; perhitungan dimulai dari 1.

var name = 'Uvuvwevwevwe Onyetenyevwe Ugwemubwem Ossas';
console.log(name.length); // 42

# String Methods
# .charAt([indeks])

Mengembalikan karakter pada indeks yang diinginkan

console.log('i am a string'.charAt(3)); // 'm'

# .concat([string])

Menggabungkan beberapa string dan mengembalikannya menjadi string baru.

var string1 = 'good';
var string2 = 'luck';
console.log(string1.concat(string2)); // goodluck

# .indexOf([string/karakter])

Mengembalikan indeks dari string/karakter yang dicari, yang pertama kali ditemukan, atau -1 apabila tidak ditemukan.

var text = 'dung dung ces!';
console.log(text.indexOf('dung'));  // 0
console.log(text.indexOf('u'));     // 1
console.log(text.indexOf('jreng')); // -1

# .substring([indeks awal], [indeks akhir (optional)])

Mengembalikan potongan string mulai dari indeks pada parameter pertama sampai dengan indeks pada parameter kedua. Bila parameter kedua tidak ditentukan, maka secara otomatis berakhir pada karakter terakhir. Karakter pada indeks yang ditentukan pada parameter kedua tidak diikutkan sebagai output.

var car1 = 'Lykan Hypersport';
var car2 = car1.substr(6);
console.log(car2); // Hypersport

 .substr([indeks awal], [jumlah karakter yang diambil (optional)])

Mendapatkan potongan string mulai dari indeks pada parameter pertama dengan jumlah indeks pada parameter kedua. Bila parameter kedua tidak ditentukan, maka secara otomatis berakhir pada karakter terakhir. Karakter pada indeks yang ditentukan pada parameter kedua tidak diikutkan sebagai output.

var motor1 = 'zelda motor';
var motor2 = car1.substr(2, 2);
console.log(motor2); // ld

# .toUpperCase()

Mengembalikan string baru dengan semua karakter yang diubah menjadi huruf kapital.

var letter = 'This Letter Is For You';
var upper  = letter.toUpperCase();
console.log(upper); // THIS LETTER IS FOR YOU

# .toLowerCase()

Mengembalikan string baru dengan semua karakter yang diubah menjadi huruf kecil

var letter = 'This Letter Is For You';
var lower  = letter.toLowerCase();
console.log(upper); // this letter is for you

# .trim()

Mengembalikan string baru yang sudah dihapus karakter whitespace pada awal dan akhir string tersebut.

var username    = ' administrator ';
var newUsername = username.trim(); // 'newUsername = 'administrator'

Typecasting To and From String

Typecasting berarti mengubah data dari suatu tipe data ke tipe data yang lain. Pada JavaScript, typecasting sering dilakukan pada string, baik dari suatu tipe data menjadi string atau sebaliknya. Berikut beberapa cara yang bisa dilakukan untuk melakukan typecasting terhadap string.
String([angka/array])

Fungsi global String() dapat dipanggil kapan saja pada program JavaScript dan akan mengembalikan String dari parameter yang diberikan.

var int  = 12;
var real = 3.45;
var arr  = [6, 7, 8];

var strInt  = String(int);
var strReal = String(real);
var strArr  = String(arr);

console.log(strInt);  // '12'
console.log(strReal); // '3.45'
console.log(strArr);  // '6,7,8'

# .toString()

Mengonversi tipe data lain menjadi string. Bila data tersebut adalah array, setiap nilai akan dituliskan dan dipisah dengan karakter koma.

var number = 21;
console.log(number.toString()); // '21'
var array = [1,2];
console.log(array.toString());  // '1,2'

Number([String])

Fungsi global Number() mengonversi tipe data string menjadi angka. Data yang diberikan pada parameter harus berupa karakter angka saja, dengan titik bila angka adalah bilangan desimal. Bila parameter berisi karakter selain angka dan/atau titik, Number() akan mengembalikan NaN (Not a Number).

var number1 = Number("90");   // number1 = 90
var number2 = Number("1.23"); // number2 = 1.23
var number3 = Number("4 5");  // number3 = NaN

parseInt([String]) dan parseFloat([String])

Fungsi global parseInt([String]) dan parseFloat([String]) mengembalikan angka dari string. Bila angka adalah bilangan desimal maka gunakan parseFloat(), bila tidak bilangan dibelakang koma akan diabaikan.

var int  = '89';
var real = '56.7';

var strInt_1 = parseInt(int);  // strInt_1 = 89
var strInt_2 = parseInt(real); // strInt_2 = 56

var strReal_1 = parseFloat(int); // strReal_1 = 89
var strReal_2 = parseFloat(int); // strReal_2 = 56.7

Additional References

    String by Mozilla Developer Network
    JavaScript String Reference by W3School
    JavaScript Type Conversion


#    emoji-notebook_with_decorative_cover Memahami Perulangan atau Looping
# Halo JavaScript!
# Pengenalan

Mari kita sambut salah satu bahasa pemrograman universal di dunia: JavaScript! Untuk kamu yang belum tahu JavaScript (kadang disebut JS saja); ia adalah bahasa native untuk web yang ringan, interpreted, dan salah satu bahasa pemrograman paling populer yang digunakan oleh developer di seluruh dunia, untuk browser dan web. Bahkan beberapa aplikasi non-browser juga menggunakannya seperti Node.js, MongoDB, dan Apache CouchDB. Lebih lagi, JS adalah bahasa yang dinamis, berbasis prototype, multi-paradigm (mendukung gaya pemrograman berbasis objek, imperatif, dan deklaratif/fungsional). Mungkin kamu sudah tahu, bahwa JavaScript tidak sama dengan Java; namanya mirip tapi aslinya dibuat oleh pihak yang berbeda sehingga juga aturannya, ekosistem, sintaks, semantiknya berbeda. JavaScript pada dasarnya memberi interaksi (seperti, klik, input, animasi) pada halaman HTML (yang biasanya juga menggunakan CSS). Zaman sekarang JavaScript sudah dapat berdiri sendiri, yang dahulunya harus mengandalkan HTML dan CSS agar dapat bekerja dengan semestinya.
Stuktur Bahasa Program

Pada dasarnya, setiap bahasa pemrograman modern memiliki hal-hal yang tertulis berikut. Hal-hal ini memungkinkan programmer untuk menulis code (computer code) untuk membuat/membangun program yang dapat menyelesaikan masalah seperti menghitung angka, memproses data, membuat aplikasi web, dan banyak lainnya.

    sintaks (syntax) dan pernyataan (statement): terkait bagaimana cara menulis code-nya
    tipe data (data types) dan/atau struktur data (data structure)
    variabel dan operator
    kondisional (conditional) atau percabangan (branching)
    kumpulan/koleksi data (collections) serta perulangan/iterasi (loop/iteration)
    fungsi/metode (function/method)

# Menjalankan Script JavaScript

Spesial untuk JavaScript, kita bisa menggunakan editor code biasa (code editor) untuk mengetikkan JavaScript bersamaan dengan HTML dan CSS; atau kita bisa langsung mengetikkan code ke dalam dev tools (terdapat di Chromium/Chrome dan Firefox) dengan membuka tab console (Ctrl+Shift+J atau Cmd+Opt+J di Chrome, Ctrl+Shift+K atau Cmd+Opt+K di Firefox). Artinya JavaScript bisa langsung digunakan dan ditulis di dalam browser ataupun editor code.

Kamu juga bisa gunakan extension browser untuk editor JavaScript yang lebih dari sekadar console di dev tools seperti Chrome Scratch JS, https://repl.it/languages/javascript, ataupun CodePen. Apapun tools yang dipakai, yang terpenting adalah kita dapat mengakses editor atau console yang akan menjalankan sintaks JavaScript.

Untuk saat ini, mari kita gunakan Repl.it.
Sintaks (Syntax) dan Pernyataan (Statement)

Sintaks itu seperti kosa kata (vocabulary) dan tata cara (grammar) pada bahasa pemrograman. Merupakan kata-kata dan perintah (command) pada bahasa yang juga merupakan instruksi untuk disusun menjadi sebuah program yang dibuat atau dikembangkan. Kita gunakan sintaks tertentu untuk membuat statement program, instruksi untuk dijalankan/dieksekusi oleh web browser, compiler, ataupun interpreter. Dalam JavaScript, ada berbagai sintaks yang polanya seperti alert();, console.log();, document.write();, dan masih banyak lagi. Kesimpulannya, sintaks dan statement adalah ekspresi (expression) apapun yang biasanya diikuti dengan titik koma (semicolon ;) ataupun hal-hal yang bisa dieksekusi oleh penjalan code (executor).
Menjalankan JavaScript dengan script JavaScript dan menampilkannya pada console

> "Hello!";
> document.write("Hello you too!");
> console.log("Hello, computer!");
> alert("Hello, human!");
> prompt("What is your name?");
> console.log("Multiline\n text!");

Bukalah Repl, dan cobalah kode di atas pada tab console
# Data Type

Data Type, atau dalam bahasa Indonesia kita sebut sebagai Tipe Data, adalah sekumpulan data dengan nilai yang memiliki karakteristik berbeda. Beberapa contoh dari tipe data adalah:

    Number: tipe data dengan nilai berupa angka
    String: tipe data dengan nilai berupa kumpulan atau set dari beberapa karakter
    Boolean: tipe data dengan nilai berupa true atau false.

# Variable

Variable, atau dalam bahasa Indonesia kita sebut variabel, bisa memegang atau berisi hampir semua tipe data yang tersedia. Variabel memungkinkan kita untuk memuat atau menyimpan nilai data ke dalam sesuatu. Biasanya bersifat sementara saat program dijalankan.

var tampung = 5;
console.log(tampung); // 5

var angkaGanjil = 1;
var angkaGenap = 2;
console.log(angkaGanjil); // 1
console.log(angkaGenap); // 2

emoji-warning Waspadai pemanggilan variable yang tidak bernilai!

var tampungBaru;
console.log(tampungBaru); // undefined

# Operator

Operator adalah karakter yang merepresentasikan sebuah tindakan. Kita sering menemukan operator seperti + (tambah), x (kali), dan lain-lain. Namun, di dunia programming, operasi kali kita gantikan dengan simbol * (asterisk) dan operasi bagi dengan simbol / (slash)

# Operator dibagi menjadi beberapa tipe:

Arithmetic Operator Arithmetic operator adalah operator yang melibatkan operasi matematika, seperti penambahan, pengurangan, perkalian, dan lain-lain.

    Tambah (+)
    Kurang (-)
    Kali (*)
    Bagi (/)
    Modulus (%)

Bagi kamu yang baru kali ini mendengar tentang modulus, modulus adalah sisa bagi. Misalkan kita membagi 7 dengan 2. Hasil bagi nya adalah 3, namun sisa dari hasil baginya adalah 1. Bilangan yang memang habis dibagi, sisa hasil baginya adalah 0.

Contoh sederhana penggunaan modulus:

> 4 % 2 // 4 modulus 2
> 0 // bilangan 4 habis dibagi 2, sehingga 4 modulus 2 menghasilkan nilai 0
> 5 % 2 // 5 modulus 2
> 1 // bilangan 5 habis tidak habis dibagi 2, sehingga 5 modulus 2 menghasilkan nilai 1, sisa dari hasil pembagian

Assignment Operator Assignment operator adalah operator yang meng-"assign", atau memberikan nilai. Biasanya, assignment operator digunakan untuk memberikan nilai kepada sebuah variable.

var bilangan;
bilangan = 5; // Contoh assignment value 5 ke sebuah variable

Comparison Operator Comparison operator adalah operator yang membandingkan satu nilai dengan nilai lainnya. Hasil operasi yang melibatkan comparison operator adalah antara 'true' atau 'false'.

    Equal operator (==)

var angka = 8;
console.log(angka == 8); // true
console.log(angka == 1); // false

    Not Equal operator (!=)

var angka = 8;
console.log(angka != 7); // true
console.log(angka != 8); // false

    Strict Equal operator (===)

Sedikit berbeda dengan equal operator, strict operator === mewajibkan nilai yang dibandingkan sama dan tipe data nya pun harus sama. Sedangkan pada ==, 8 dan "8" akan dianggap sama, karena itu menghasilkan nilai true.

var angkaBeda = "8";
console.log(angkaBeda == 8); // true
console.log(angkaBeda === 8); // false
console.log(angkaBeda === "8"); // true

    Strict Not Equal operator (!==)

Sedikit berbeda dengan not equal operator, strict not equal operator !== mewajibkan nilai yang dibandingkan tidak sama dan tipe data nya pun harus sama. Sedangkan pada !=, 8 dan "8" akan dianggap sama, karena itu menghasilkan nilai false.

var angkaBeda = "8";
console.log(angkaBeda != 7); // true
console.log(angkaBeda !== 7); // true
console.log(angkaBeda !== 8); // true
console.log(angkaBeda !== "8"); // false

    Less Than (<) / Greater Than (>)

operator selanjutnya adalah <, yaitu kurang dari sekian, dan >, yaitu lebih dari sekian.

var angka = 8;
console.log(angka > 7); // true
console.log(angka < 6); // false
console.log(angka <= 8); // true

Conditional Operator Conditional operator adalah operator yang akan mengevaluasi kebenaran dari nilai yang dikomputasi.

    OR (||): akan menghasilkan nilai true jika salah satu premis mengandung true

console.log(true || true); // true
console.log(true || false); // true
console.log(true || false || false); // true
console.log(false || false); // false

    AND (&&): akan menghasilkan nilai true jika kedua premis true.

console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(false && true && true); // false
console.log(true && true && true); // true

# Conditional

Kondisional adalah sebuah metode dimana kode akan mengecek apakah sebuah premis benar atau tidak. Jika kondisi sesuai, maka kode dalam kondisional akan dijalankan.

Contoh Conditional 1 Menjalankan proses apabila statement kondisi true.

if(true) {
  console.log("Jalankan kode"); // baris kode ini akan di panggil
}

Contoh Conditional 2 Tidak menjalankan proses di dalam block/scope conditional apabila statement kondisi false.

if(false) {
  console.log("Jalankan kode"); // baris kode ini tidak di panggil
}

Contoh Conditional 3 Conditional dengan statement yang akan menghasilkan nilai true atau false

var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}

Di dalam conditional, kita juga mengenal dengan yang dinamakan dengan branching. Branching, atau dalam bahasa indonesia berarti pencabangan, kita menjalankan potongan kode kita sesuai dengan "cabang" atau "jalur" yang memenuhi kondisi tersebut.

Contoh sangat sederhana-nya adalah sebuah kasus berikut ini:

Seorang anak diminta oleh ibunya untuk membeli telur di supermarket dan langsung pulang ke rumah. Jika di supermarket tersebut kehabisan telur, maka anak itu harus menelepon ibunya dan mengabari kalau supermarket kehabisan telur. Anak tersebut akan datang ke supermarket dan menemukan kondisi yang bercabang:

    Jika di supermarket terdapat telur, anak itu akan membeli telur itu dan pulang, atau
    Jika di supermarket tidak terdapat telur, anak itu akan menelepon ibunya.

pada JavaScript dan berbagai bahasa pemrograman, "jika tidak terdapat telur", atau bisa dibilang kondisi yang terjadi diluar "ekspektasi", terdapat else yang akan menjalankan proses lain jika if bernilai false. Contoh lebih jelas bisa dilihat dari contoh dibawah ini:

Contoh Conditional 4 Branching Sederhana (If-else)

var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}
else {
  console.log("angka yang ditampung bukan 5!");
}

Tidak hanya sampai situ, kondisional bisa juga bersifat bertumpuk, atau biasanya disebut juga sebagai nested-if.

Contoh Conditional 5 Branching Bertumpuk Sederhana (If-else)

var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}
else {
  if(tampung < 5) {
    console.log("angka yang ditampung bukan 5, tapi lebih kecil dari 5.");
  }
  else {
    console.log("angka yang ditampung bukan 5, tapi lebih besar dari 5.");
  }
}

Contoh di atas juga bisa dibuat dalam bentuk lain, yaitu else if. else-if adalah sebuah kondisional, dimana statement else if akan dijalankan apabila if tidak memenuhi kondisi / false, dan dijalankan sebelum statement else.

Contoh Conditional 5 Branching Bertumpuk Sederhana (If-else)

var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}
else if(tampung < 5) {
    console.log("angka yang ditampung bukan 5, tapi lebih kecil dari 5.");
}
else {
  console.log("angka yang ditampung bukan 5, tapi lebih besar dari 5.");
}

Selain menggunakan if-else, ada satu cara lagi untuk melakukan conditional, yaitu switch-case. Switch case ini biasanya lebih sering digunakan untuk skenario yang melibatkan banyak kondisi atau branching yang banyak. Contoh sederhananya adalah dengan sebuah remote TV.

var buttonPushed = 1;
switch(buttonPushed) {
  case 1:   { console.log('matikan TV!'); break; }
  case 2:   { console.log('turunkan volume TV!'); break; }
  case 3:   { console.log('tingkatkan volume TV!'); break; }
  case 4:   { console.log('matikan suara TV!'); break; }
  default:  { console.log('Tidak terjadi apa-apa'); }
}

Seperti dilihat di kode di atas, switch akan mengambil nilai, dan case adalah skenario apa saja yang memungkinkan untuk menjalankan satu proses. Kamu mungkin menyadari ada 1 sintaks baru yang kamu temukan: break;. Break memungkinkan kamu untuk "berhenti" dari proses kondisional/switch-case, dengan tujuan agar proses tidak berlanjut ke case selanjutnya. untuk eksperimenmu, kamu bisa mencoba menghapus break dan perhatikan apa yang terjadi.

Kamu bisa eksperimen dan mencoba kode di atas disini
Loop/Iteration

Loop/Iteration adalah tindakan mengulang / merepetisi sebuah proses, dengan tujuan untuk mendapatkan deret hasil, atau dengan tujuan mendapatkan hasil tertentu dengan repetisi. Setiap proses repetisi ini disebut sebagai Iteration atau Looping.

Untuk melakukan looping/iteration, JavaScript menyediakan beberapa jenis iteration, yaitu:

    while-loop
    for-loop

# While-loop

While-loop adalah iterasi yang akan mengulang sebuah proses dengan sebuah kondisi tertentu.

Berikut adalah cara atau struktur penulisan while-loop:

while([Kondisi]) { // Kondisi yang menentukan apakah program akan melakukan iterasi. Berupa boolean atau true/false.
  [Proses] // Merupakan proses yang akan dijalankan dalam satu iterasi
}

Pada while-loop, statement while akan mengambil sebuah nilai true atau false dari hasil kondisi yang diberikan. Apabila statement while mendapatkan nilai true, maka proses yang berada didalam curly bracket ({ }) akan dijalankan. Looping akan terus dilakukan selama kondisi while-loop masih true.

Untuk mencegah looping berjalan terus-menerus, dilakukan sebuah proses yang akan mengubah kondisi yang sedemikian rupa yang bertujuan untuk menghentikan looping dengan menghasilkan kondisi yang false.

Contoh Looping While-loop 1 Looping Angka 1-9 Sederhana

var flag = 1;
while(flag < 10) { // Loop akan terus berjalan selama nilai flag masih dibawah 10
  console.log('Iterasi ke-' + flag); // Menampilkan nilai flag pada iterasi tertentu
  flag++; // Mengubah nilai flag dengan menambahkan 1
}

Kamu bisa mencoba kode di atas disini

Contoh Looping While-loop 2 Looping Mengembalikan Angka Total

var deret = 5;
var jumlah = 0;
while(deret > 0) { // Loop akan terus berjalan selama nilai deret masih di atas 0
  jumlah += deret; // Menambahkan nilai variable jumlah dengan angka deret
  deret--; // Mengubah nilai deret dengan mengurangi 1
  console.log('Jumlah saat ini: ' + jumlah)
}

console.log(jumlah);

Kamu bisa mencoba kode di atas disini
# For-loop

For-loop adalah bentuk lain dari iterasi, dimana statement for menjadi kontrol atas loop yang dilakukan. Hal ini yang menjadi pembeda antara for-loop dengan while-loop.

Berikut adalah cara atau struktur penulisan for-loop:

for([Inisialisasi], [Kondisi], [Incremental/Decremental]) {
  [Proses] // Merupakan proses yang akan dijalankan dalam satu iterasi
}

Pada for-loop, statement for akan menampung tiga parameter, yaitu sebut saja inisialisasi, kondisi, dan incremental/decremental. Ketiga parameter ini akan menjadi kontrol kapan loop ini harus berhenti. Pada parameter pertama, yaitu inisialisasi, sebuah variable diberikan nilai awal atau default. Pada parameter kedua, yaitu kondisi, for-loop akan terus berjalan selama kondisi ini masih terpenuhi, dengan kata lain, mengandung nilai true. Pada parameter kedua, yaitu incremental/decremental, variabel yang menjadi kontrol terhadap loop ini akan diubah nilainya.

emoji-thumbsup Best Practice: Walaupun memang for-loop dapat mengubah kondisi di dalam proses, namun best practice dari penggunaan for-loop adalah seluruh kendali atau kontrol dari looping ditentukan oleh variable yang diinisialisasi, di increment/decrement, dan juga kondisi for-loop pun menggunakan variable tersebut.

Untuk memudahkan kamu mendapatkan gambaran jelas tentang penggunaan for-loop, mari kita gunakan kedua contoh while-loop dan kita tulis ulang dalam bentuk for-loop.

Contoh Looping For-loop 1 Looping Angka 1-9 Sederhana

for(var angka = 1; angka < 10; angka++) {
  console.log('Iterasi ke-' + angka);
}

Kamu bisa mencoba kode di atas disini

Contoh Looping For-loop 2 Looping Mengembalikan Angka Total

var jumlah = 0;
for(var deret = 5; deret > 0; deret--) {
  jumlah += deret;
  console.log('Jumlah saat ini: ' + jumlah);
}

console.log('Jumlah terakhir: ' + jumlah);

Kamu bisa mencoba kode di atas disini

Contoh Looping For-loop 3 Looping Dengan Increment dan Decrement Lebih dari 1

for(var deret = 0; deret < 10; deret += 2) {
  console.log('Iterasi dengan Increment counter 2: ' + deret);
}

console.log('-------------------------------');

for(var deret = 15; deret > 0; deret -= 3) {
  console.log('Iterasi dengan Decrement counter : ' + deret);
}

Kamu bisa mencoba kode di atas disini

emoji-warning Waspadai Forever Looping!

Dengan sengaja atau sengaja, kode kamu mungkin dapat menghasilkan forever looping, atau looping yang tidak akan pernah berhenti. Bila ini terjadi, segera periksa statement kondisi kamu.

var flag = 1;
while(flag < 10) { // Loop akan terus berjalan, karena nilai flag tidak pernah berubah
  console.log('Iterasi ke-' + flag);
}

# Function/Method

Function adalah sebuah blok kode yang disusun sedemikian rupa untuk menjalankan sebuah tindakan. Blok kode ini dibuat untuk dapat bisa digunakan kembali. Cara atau bentuk penulisan function adalah sebagai berikut:

function nama_function(parameter 1, parameter 2, ...) {
  [Isi dari function berupa tindakan]
  return [expression];
}

Kode di atas tidak dapat kita copy-paste kan langsung, melainkan hanya sebuah bentuk penulisan function. Sebuah function, umumnya melakukan tindakan dan sebelum function berakhir, function bisa mengembalikan nilai dengan cara menambahkan sintaks return.

Kita juga dapat mengirimkan nilai ke dalam sebuah function dengan mencantumkannya ke dalam tanda kurung dalam penulisan function. Untuk mengirimkan nilai lebih dari satu, gunakan tanda , sebagai pemisah.

Contoh Function 1: Function sederhana tanpa return

function tampilkan() {
  console.log("halo!");
}

tampilkan();

Contoh Function 2: Function sederhana dengan return

function munculkanAngkaDua() {
  return 2
}

var tampung = munculkanAngkaDua();
console.log(tampung)

Contoh Function 3: Function dengan parameter

function kalikanDua(angka) {
  return angka * 2
}

var tampung = kalikanDua(2);
console.log(tampung)

Contoh Function 4: Pengiriman parameter lebih dari satu

function tampilkanAngka(angkaPertama, angkaKedua) {
  return angkaPertama + angkaKedua
}

console.log(tampilkanAngka(5,3))

Contoh Function 5: Inisialisasi parameter dengan nilai default

function tampilkanAngka(angka = 1) {
  return angka
}

console.log(tampilkanAngka(5)) // 5, sesuai dengan nilai parameter yang dikirim
console.log(tampilkanAngka()) // 1, karena default dari parameter adalah 1

emoji-warning Waspadai pengiriman parameter yang UNDEFINED!

Kita juga dapat menampung function sebagai variable dengan sebuah bentuk function yang dinamakan Anonymous Function.

var fungsiPerkalian = function(angkaPertama, angkaKedua) {
  return angkaPertama * angkaKedua
}

console.log(fungsiPerkalian(2,4))

#    emoji-notebook_with_decorative_cover Memahami Built-in Object Math
# Object Math pada JavaScript
Apa Itu Object Math?

Object Math adalah salah satu Built-in Object pada JavaScript yang dapat dipanggil setiap saat untuk membantu melakukan perhitungan matematika. Karena Math adalah sebuah objek, maka didalamnya terdapat property dan method yang dapat digunakan untuk tujuan tertentu. Adapun untuk menggunakan Math cukup dengan memanggil Math.property atau Math.method(parameter) secara langsung pada program.

var angkaPi    = Math.PI       // angkaPi    = 3.141592653589793
var pangkatDua = Math(4,2)     // pangkatDua = 16
var angkaAcak  = Math.random() // angkaAcak  = [angka acak N, 0 < N < 1]

# Property di dalam Math

Property dapat disamakan dengan variabel yang dimiliki oleh objek. Property yang dimiliki Math adalah berupa nilai-nilai konstanta penting yang sering digunakan untuk perhitungan matematika seperti:

    Math.PI (konstanta Pi, ~3.142...)
    Math.E (angka Euler, ~2.718)
    Math.LN2 (logaritma natural dari 2, ~0.693)
    Math.LN10 (logaritma natural dari 10, ~2.303)
    Math.LOG2E (logaritma basis 2 dari E, ~1.443)
    Math.LOG10E (logaritma basis 10 dari E, ~0.434)
    Math.SQRT1_2 (akar pangkat 2 dari 1/2, ~0.707)
    Math.SQRT2 (akar pangkat 2 dari 2, ~1.414)

# Method di dalam Math

Method adalah function yang dimiliki oleh suatu objek. Adapun method yang dimiliki Math adalah fungsi yang dapat membantu 'menghitung' suatu perhitungan matematika tertentu sehingga kita tidak perlu membuat kodenya lagi. Berikut beberapa method dari Math yang sering digunakan.
Math.abs(x)

Mengembalikan angka absolut

var absolut = Math.abs(-21,5) // absolut = 21.5

# Math.ceil(x)

Mengembalikan angka integer dari pembulatan keatas suatu angka

var angka2 = Math.ceil(1.99); // angka2 = 2
var angka1 = Math.ceil(0.1);  // angka1 = 1
var angka0 = Math.ceil(-0.1); // angka0 = 0

# Math.floor(x)

Mengembalikan angka integer dari pembulatan kebawah suatu angka

var angka3 = Math.floor(3.99); // angka3 = 3
var angka4 = Math.floor(4.01); // angka4 = 4
var angka1 = Math.floor(-0.1); // angka1 = -1

# Math.round(x)

Mengembalikan angka integer dari pembulatan suatu angka. Bila angka dibelakang koma >= .5 maka akan dibulatkan keatas dan sebaliknya.

var roundUp   = Math.round(3.5);  // roundUp   = 4
var roundDown = Math.round(3.49); // roundDown = 3

# Math.trunc(x)

Mengembalikan angka integer dengan menghilangkan angka dibelakang koma.

var truncated = Math.trunc(Math.PI) // truncated = 3

Math.max(angka1,angka2,[...],angkaN)

Mengembalikan angka terbesar dari beberapa angka (bukan array).

var maxTwo   = Math.max(1,2);   // maxTwo   = 2
var maxThree = Math.max(1,2,3); // maxThree = 3

Math.min(angka1,angka2,[...],angkaN)

Mengembalikan angka terkecil dari beberapa angka (bukan array).

var minTwo   = Math.min(4,5);      // maxTwo   = 4
var minThree = Math.min(-1,-2,-3); // maxThree = -3

# Math.pow(x, y)

Mengembalikan hasil dari x pangkat y

var pangkat2 = Math.pow(3,2); // pangkat2 = 9
var pangkat3 = Math.pow(2,3); // pangkat3 = 8

# Math.random()

Mengembalikan suatu angka acak X, dimana 0 < X < 1

var random = Math.random(); // random = X, dimana 0 < X < 1

Referensi Lanjutkan

    Math, by Mozilla Developer Network

    Math Reference, by W3Schools

    Menghitung Nilai Max/Min dari Array


# Tugas :

#    emoji-anchor [Exercises 5] Bermain dengan String di JavaScript
# String

Soal latihan string ini memiliki 4 nomor. Simpan di 1 file yang sama!
# 1. Let's Form a Sentence
Problem

Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +. Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!
Skeleton Code

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

Output

JavaScript is awesome and I love it!

# 2. Index Accessing - 1 by 1
Problem

Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya. Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata. Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.
Hints

Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata tersebut!
Skeleton Code

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord; // do your own!
var thirdWord; // do your own!
var fourthWord; // do your own!
var fifthWord; // do your own!

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

Output

First Word: wow
Second Word: JavaScript
Third Word: is
Fourth Word: so
Fifth Word: cool

# 3. Breaking Sentence (Again) using Substring
Problem

Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!
Skeleton Code

var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word.substring(0, 3);
var secondWord3; // do your own!
var thirdWord3; // do your own!
var fourthWord3; // do your own!
var fifthWord3; // do your own!

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

Output

First Word: wow
Second Word: JavaScript
Third Word: is
Fourth Word: so
Fifth Word: cool

# 4. Breaking Sentence (yet Again) and Count Each Length
Problem

Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!
Skeleton Code

Buatlah variable-variable baru untuk menyimpan panjang string, dan ubah console dibawah untuk menampilkan nya.

var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word.substring(0, 3);
var secondWord4; // do your own!
var thirdWord4; // do your own!
var fourthWord4; // do your own!
var fifthWord4; // do your own!

var firstWordLength = exampleFirstWord4.length;
// create new variables around here

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

Output

First Word: wow, with length: 3
Second Word: JavaScript, with length: 10
Third Word: is, with length: 2
Fourth Word: so, with length: 2
Fifth Word: cool, with length: 4

#    emoji-anchor [Exercises 6] Berlatih Perulangan di JavaScript
# Looping

Soal looping ini memiliki 3 nomor.
# 1. Melakukan Looping Menggunakan While
Problem

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
Output

LOOPING PERTAMA
2 - I love coding
4 - I love coding
6 - I love coding
8 - I love coding
10 - I love coding
12 - I love coding
14 - I love coding
16 - I love coding
18 - I love coding
20 - I love coding
LOOPING KEDUA
20 - I will become fullstack developer
18 - I will become fullstack developer
16 - I will become fullstack developer
14 - I will become fullstack developer
12 - I will become fullstack developer
10 - I will become fullstack developer
8 - I will become fullstack developer
6 - I will become fullstack developer
4 - I will become fullstack developer
2 - I will become fullstack developer

# 2. Melakukan Looping Menggunakan For
Problem

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
Hints

    Operator ++ disebut dengan operator Increment Operator -- disebut dengan operator Decrement

Output

LOOPING PERTAMA
1 - I love coding
2 - I love coding
3 - I love coding
4 - I love coding
5 - I love coding
6 - I love coding
7 - I love coding
8 - I love coding
9 - I love coding
10 - I love coding
11 - I love coding
12 - I love coding
13 - I love coding
14 - I love coding
15 - I love coding
16 - I love coding
17 - I love coding
18 - I love coding
19 - I love coding
20 - I love coding
LOOPING KEDUA
20 - I will become fullstack developer
19 - I will become fullstack developer
18 - I will become fullstack developer
17 - I will become fullstack developer
16 - I will become fullstack developer
15 - I will become fullstack developer
14 - I will become fullstack developer
13 - I will become fullstack developer
12 - I will become fullstack developer
11 - I will become fullstack developer
10 - I will become fullstack developer
9 - I will become fullstack developer
8 - I will become fullstack developer
7 - I will become fullstack developer
6 - I will become fullstack developer
5 - I will become fullstack developer
4 - I will become fullstack developer
3 - I will become fullstack developer
2 - I will become fullstack developer
1 - I will become fullstack developer

# 3. Angka Ganjil dan Genap

Hint: kamu akan menggunakan kondisional juga di kasus ini.
Problem

    Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1

    Di dalam perulangan, periksa setiap angka counter:
        Apabila angka counter adalah angka genap, tuliskan GENAP
        Apabila angka counter adalah angka ganjil, tuliskan GANJIL
    Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.

    Pada 3 perulangan baru ini periksa setiap angka counter:
        Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
        Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
        "3 kelipatan 3" dan seterusnya.

output

//contoh - ganjil genap
//counter sekarang = 1,
//output
"GANJIL"
//counter sekarang = 2,
//output
"GENAP"
// dan seterusnya :)

//contoh - untuk pertambahan counter 2
//counter sekarang = 1,
//output
""
//counter sekarang = 3,
//output
"3 KELIPATAN 3"
// dan seterusnya :)

//contoh - untuk pertambahan counter 5
//counter sekarang = 1,
//output
""
//counter sekarang = 6,
//output
"6 KELIPATAN 6"
// dan seterusnya :)

//contoh - untuk pertambahan counter 9
//counter sekarang = 1,
//output
""
//counter sekarang = 10,
//output
"10 KELIPATAN 10"
// dan seterusnya :)

#    emoji-anchor [Exercises 7] Perulangan - Play with Asterisks
# Looping

Soal looping - asterisk ini memiliki 3 nomor.
# 1. Menyusun Barisan Bintang
Problem

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki 1 simbol '*'.
Skeleton Code

var rows1; // input the number of rows

// do loops to display asterisks in the console.

Output

jika rows1 = 5

*
*
*
*
*

# 2. Menyusun Barisan Bintang Dengan Nested Looping
Problem

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.
Skeleton Code

var rows2; // input the number of rows

// do loops to display asterisks in the console.

Output

jika rows2 = 5

*****
*****
*****
*****
*****

# 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
Problem

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang) dalam bentuk tangga. Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris. Baris pertama, hanya ada satu bintang. Baris kedua, dua bintang, baris ketiga tiga bintang, dan seterusnya. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.
Skeleton Code

var rows3; // input the number of rows

// do loops to display asterisks in the console.

Output

jika rows3 = 5

*
**
***
****
*****

# Kamis
# Menggunakan Konsep Functions

Mulai familiar dengan JavaScript? Good! Saatnya kita masuk ke pembahasan bagaimana alur dan algortima yang sangat penting untuk menyelesaikan kasus dengan programming, dan juga mengenal dengan yang namanya functions dan scope yang sangat membantu kamu untuk membuat program.

# Materi & Referensi :

#    emoji-notebook_with_decorative_cover Mempelajari Function atau Method
# Halo JavaScript!
# Pengenalan

Mari kita sambut salah satu bahasa pemrograman universal di dunia: JavaScript! Untuk kamu yang belum tahu JavaScript (kadang disebut JS saja); ia adalah bahasa native untuk web yang ringan, interpreted, dan salah satu bahasa pemrograman paling populer yang digunakan oleh developer di seluruh dunia, untuk browser dan web. Bahkan beberapa aplikasi non-browser juga menggunakannya seperti Node.js, MongoDB, dan Apache CouchDB. Lebih lagi, JS adalah bahasa yang dinamis, berbasis prototype, multi-paradigm (mendukung gaya pemrograman berbasis objek, imperatif, dan deklaratif/fungsional). Mungkin kamu sudah tahu, bahwa JavaScript tidak sama dengan Java; namanya mirip tapi aslinya dibuat oleh pihak yang berbeda sehingga juga aturannya, ekosistem, sintaks, semantiknya berbeda. JavaScript pada dasarnya memberi interaksi (seperti, klik, input, animasi) pada halaman HTML (yang biasanya juga menggunakan CSS). Zaman sekarang JavaScript sudah dapat berdiri sendiri, yang dahulunya harus mengandalkan HTML dan CSS agar dapat bekerja dengan semestinya.
# Stuktur Bahasa Program

Pada dasarnya, setiap bahasa pemrograman modern memiliki hal-hal yang tertulis berikut. Hal-hal ini memungkinkan programmer untuk menulis code (computer code) untuk membuat/membangun program yang dapat menyelesaikan masalah seperti menghitung angka, memproses data, membuat aplikasi web, dan banyak lainnya.

    sintaks (syntax) dan pernyataan (statement): terkait bagaimana cara menulis code-nya
    tipe data (data types) dan/atau struktur data (data structure)
    variabel dan operator
    kondisional (conditional) atau percabangan (branching)
    kumpulan/koleksi data (collections) serta perulangan/iterasi (loop/iteration)
    fungsi/metode (function/method)

# Menjalankan Script JavaScript

Spesial untuk JavaScript, kita bisa menggunakan editor code biasa (code editor) untuk mengetikkan JavaScript bersamaan dengan HTML dan CSS; atau kita bisa langsung mengetikkan code ke dalam dev tools (terdapat di Chromium/Chrome dan Firefox) dengan membuka tab console (Ctrl+Shift+J atau Cmd+Opt+J di Chrome, Ctrl+Shift+K atau Cmd+Opt+K di Firefox). Artinya JavaScript bisa langsung digunakan dan ditulis di dalam browser ataupun editor code.

Kamu juga bisa gunakan extension browser untuk editor JavaScript yang lebih dari sekadar console di dev tools seperti Chrome Scratch JS, https://repl.it/languages/javascript, ataupun CodePen. Apapun tools yang dipakai, yang terpenting adalah kita dapat mengakses editor atau console yang akan menjalankan sintaks JavaScript.

Untuk saat ini, mari kita gunakan Repl.it.
Sintaks (Syntax) dan Pernyataan (Statement)

Sintaks itu seperti kosa kata (vocabulary) dan tata cara (grammar) pada bahasa pemrograman. Merupakan kata-kata dan perintah (command) pada bahasa yang juga merupakan instruksi untuk disusun menjadi sebuah program yang dibuat atau dikembangkan. Kita gunakan sintaks tertentu untuk membuat statement program, instruksi untuk dijalankan/dieksekusi oleh web browser, compiler, ataupun interpreter. Dalam JavaScript, ada berbagai sintaks yang polanya seperti alert();, console.log();, document.write();, dan masih banyak lagi. Kesimpulannya, sintaks dan statement adalah ekspresi (expression) apapun yang biasanya diikuti dengan titik koma (semicolon ;) ataupun hal-hal yang bisa dieksekusi oleh penjalan code (executor).
Menjalankan JavaScript dengan script JavaScript dan menampilkannya pada console

> "Hello!";
> document.write("Hello you too!");
> console.log("Hello, computer!");
> alert("Hello, human!");
> prompt("What is your name?");
> console.log("Multiline\n text!");

Bukalah Repl, dan cobalah kode di atas pada tab console
Data Type

Data Type, atau dalam bahasa Indonesia kita sebut sebagai Tipe Data, adalah sekumpulan data dengan nilai yang memiliki karakteristik berbeda. Beberapa contoh dari tipe data adalah:

    Number: tipe data dengan nilai berupa angka
    String: tipe data dengan nilai berupa kumpulan atau set dari beberapa karakter
    Boolean: tipe data dengan nilai berupa true atau false.

# Variable

Variable, atau dalam bahasa Indonesia kita sebut variabel, bisa memegang atau berisi hampir semua tipe data yang tersedia. Variabel memungkinkan kita untuk memuat atau menyimpan nilai data ke dalam sesuatu. Biasanya bersifat sementara saat program dijalankan.

var tampung = 5;
console.log(tampung); // 5

var angkaGanjil = 1;
var angkaGenap = 2;
console.log(angkaGanjil); // 1
console.log(angkaGenap); // 2

emoji-warning Waspadai pemanggilan variable yang tidak bernilai!

var tampungBaru;
console.log(tampungBaru); // undefined

# Operator

Operator adalah karakter yang merepresentasikan sebuah tindakan. Kita sering menemukan operator seperti + (tambah), x (kali), dan lain-lain. Namun, di dunia programming, operasi kali kita gantikan dengan simbol * (asterisk) dan operasi bagi dengan simbol / (slash)

Operator dibagi menjadi beberapa tipe:

Arithmetic Operator Arithmetic operator adalah operator yang melibatkan operasi matematika, seperti penambahan, pengurangan, perkalian, dan lain-lain.

    Tambah (+)
    Kurang (-)
    Kali (*)
    Bagi (/)
    Modulus (%)

Bagi kamu yang baru kali ini mendengar tentang modulus, modulus adalah sisa bagi. Misalkan kita membagi 7 dengan 2. Hasil bagi nya adalah 3, namun sisa dari hasil baginya adalah 1. Bilangan yang memang habis dibagi, sisa hasil baginya adalah 0.

Contoh sederhana penggunaan modulus:

> 4 % 2 // 4 modulus 2
> 0 // bilangan 4 habis dibagi 2, sehingga 4 modulus 2 menghasilkan nilai 0
> 5 % 2 // 5 modulus 2
> 1 // bilangan 5 habis tidak habis dibagi 2, sehingga 5 modulus 2 menghasilkan nilai 1, sisa dari hasil pembagian

Assignment Operator Assignment operator adalah operator yang meng-"assign", atau memberikan nilai. Biasanya, assignment operator digunakan untuk memberikan nilai kepada sebuah variable.

var bilangan;
bilangan = 5; // Contoh assignment value 5 ke sebuah variable

Comparison Operator Comparison operator adalah operator yang membandingkan satu nilai dengan nilai lainnya. Hasil operasi yang melibatkan comparison operator adalah antara 'true' atau 'false'.

    Equal operator (==)

var angka = 8;
console.log(angka == 8); // true
console.log(angka == 1); // false

    Not Equal operator (!=)

var angka = 8;
console.log(angka != 7); // true
console.log(angka != 8); // false

    Strict Equal operator (===)

Sedikit berbeda dengan equal operator, strict operator === mewajibkan nilai yang dibandingkan sama dan tipe data nya pun harus sama. Sedangkan pada ==, 8 dan "8" akan dianggap sama, karena itu menghasilkan nilai true.

var angkaBeda = "8";
console.log(angkaBeda == 8); // true
console.log(angkaBeda === 8); // false
console.log(angkaBeda === "8"); // true

    Strict Not Equal operator (!==)

Sedikit berbeda dengan not equal operator, strict not equal operator !== mewajibkan nilai yang dibandingkan tidak sama dan tipe data nya pun harus sama. Sedangkan pada !=, 8 dan "8" akan dianggap sama, karena itu menghasilkan nilai false.

var angkaBeda = "8";
console.log(angkaBeda != 7); // true
console.log(angkaBeda !== 7); // true
console.log(angkaBeda !== 8); // true
console.log(angkaBeda !== "8"); // false

    Less Than (<) / Greater Than (>)

operator selanjutnya adalah <, yaitu kurang dari sekian, dan >, yaitu lebih dari sekian.

var angka = 8;
console.log(angka > 7); // true
console.log(angka < 6); // false
console.log(angka <= 8); // true

Conditional Operator Conditional operator adalah operator yang akan mengevaluasi kebenaran dari nilai yang dikomputasi.

    OR (||): akan menghasilkan nilai true jika salah satu premis mengandung true

console.log(true || true); // true
console.log(true || false); // true
console.log(true || false || false); // true
console.log(false || false); // false

    AND (&&): akan menghasilkan nilai true jika kedua premis true.

console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(false && true && true); // false
console.log(true && true && true); // true

# Conditional

Kondisional adalah sebuah metode dimana kode akan mengecek apakah sebuah premis benar atau tidak. Jika kondisi sesuai, maka kode dalam kondisional akan dijalankan.

Contoh Conditional 1 Menjalankan proses apabila statement kondisi true.

if(true) {
  console.log("Jalankan kode"); // baris kode ini akan di panggil
}

Contoh Conditional 2 Tidak menjalankan proses di dalam block/scope conditional apabila statement kondisi false.

if(false) {
  console.log("Jalankan kode"); // baris kode ini tidak di panggil
}

Contoh Conditional 3 Conditional dengan statement yang akan menghasilkan nilai true atau false

var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}

Di dalam conditional, kita juga mengenal dengan yang dinamakan dengan branching. Branching, atau dalam bahasa indonesia berarti pencabangan, kita menjalankan potongan kode kita sesuai dengan "cabang" atau "jalur" yang memenuhi kondisi tersebut.

Contoh sangat sederhana-nya adalah sebuah kasus berikut ini:

Seorang anak diminta oleh ibunya untuk membeli telur di supermarket dan langsung pulang ke rumah. Jika di supermarket tersebut kehabisan telur, maka anak itu harus menelepon ibunya dan mengabari kalau supermarket kehabisan telur. Anak tersebut akan datang ke supermarket dan menemukan kondisi yang bercabang:

    Jika di supermarket terdapat telur, anak itu akan membeli telur itu dan pulang, atau
    Jika di supermarket tidak terdapat telur, anak itu akan menelepon ibunya.

pada JavaScript dan berbagai bahasa pemrograman, "jika tidak terdapat telur", atau bisa dibilang kondisi yang terjadi diluar "ekspektasi", terdapat else yang akan menjalankan proses lain jika if bernilai false. Contoh lebih jelas bisa dilihat dari contoh dibawah ini:

Contoh Conditional 4 Branching Sederhana (If-else)

var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}
else {
  console.log("angka yang ditampung bukan 5!");
}

Tidak hanya sampai situ, kondisional bisa juga bersifat bertumpuk, atau biasanya disebut juga sebagai nested-if.

Contoh Conditional 5 Branching Bertumpuk Sederhana (If-else)

var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}
else {
  if(tampung < 5) {
    console.log("angka yang ditampung bukan 5, tapi lebih kecil dari 5.");
  }
  else {
    console.log("angka yang ditampung bukan 5, tapi lebih besar dari 5.");
  }
}

Contoh di atas juga bisa dibuat dalam bentuk lain, yaitu else if. else-if adalah sebuah kondisional, dimana statement else if akan dijalankan apabila if tidak memenuhi kondisi / false, dan dijalankan sebelum statement else.

Contoh Conditional 5 Branching Bertumpuk Sederhana (If-else)

var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}
else if(tampung < 5) {
    console.log("angka yang ditampung bukan 5, tapi lebih kecil dari 5.");
}
else {
  console.log("angka yang ditampung bukan 5, tapi lebih besar dari 5.");
}

Selain menggunakan if-else, ada satu cara lagi untuk melakukan conditional, yaitu switch-case. Switch case ini biasanya lebih sering digunakan untuk skenario yang melibatkan banyak kondisi atau branching yang banyak. Contoh sederhananya adalah dengan sebuah remote TV.

var buttonPushed = 1;
switch(buttonPushed) {
  case 1:   { console.log('matikan TV!'); break; }
  case 2:   { console.log('turunkan volume TV!'); break; }
  case 3:   { console.log('tingkatkan volume TV!'); break; }
  case 4:   { console.log('matikan suara TV!'); break; }
  default:  { console.log('Tidak terjadi apa-apa'); }
}

Seperti dilihat di kode di atas, switch akan mengambil nilai, dan case adalah skenario apa saja yang memungkinkan untuk menjalankan satu proses. Kamu mungkin menyadari ada 1 sintaks baru yang kamu temukan: break;. Break memungkinkan kamu untuk "berhenti" dari proses kondisional/switch-case, dengan tujuan agar proses tidak berlanjut ke case selanjutnya. untuk eksperimenmu, kamu bisa mencoba menghapus break dan perhatikan apa yang terjadi.

Kamu bisa eksperimen dan mencoba kode di atas disini
# Loop/Iteration

Loop/Iteration adalah tindakan mengulang / merepetisi sebuah proses, dengan tujuan untuk mendapatkan deret hasil, atau dengan tujuan mendapatkan hasil tertentu dengan repetisi. Setiap proses repetisi ini disebut sebagai Iteration atau Looping.

Untuk melakukan looping/iteration, JavaScript menyediakan beberapa jenis iteration, yaitu:

    while-loop
    for-loop

# While-loop

While-loop adalah iterasi yang akan mengulang sebuah proses dengan sebuah kondisi tertentu.

Berikut adalah cara atau struktur penulisan while-loop:

while([Kondisi]) { // Kondisi yang menentukan apakah program akan melakukan iterasi. Berupa boolean atau true/false.
  [Proses] // Merupakan proses yang akan dijalankan dalam satu iterasi
}

Pada while-loop, statement while akan mengambil sebuah nilai true atau false dari hasil kondisi yang diberikan. Apabila statement while mendapatkan nilai true, maka proses yang berada didalam curly bracket ({ }) akan dijalankan. Looping akan terus dilakukan selama kondisi while-loop masih true.

Untuk mencegah looping berjalan terus-menerus, dilakukan sebuah proses yang akan mengubah kondisi yang sedemikian rupa yang bertujuan untuk menghentikan looping dengan menghasilkan kondisi yang false.

Contoh Looping While-loop 1 Looping Angka 1-9 Sederhana

var flag = 1;
while(flag < 10) { // Loop akan terus berjalan selama nilai flag masih dibawah 10
  console.log('Iterasi ke-' + flag); // Menampilkan nilai flag pada iterasi tertentu
  flag++; // Mengubah nilai flag dengan menambahkan 1
}

Kamu bisa mencoba kode di atas disini

Contoh Looping While-loop 2 Looping Mengembalikan Angka Total

var deret = 5;
var jumlah = 0;
while(deret > 0) { // Loop akan terus berjalan selama nilai deret masih di atas 0
  jumlah += deret; // Menambahkan nilai variable jumlah dengan angka deret
  deret--; // Mengubah nilai deret dengan mengurangi 1
  console.log('Jumlah saat ini: ' + jumlah)
}

console.log(jumlah);

Kamu bisa mencoba kode di atas disini
# For-loop

For-loop adalah bentuk lain dari iterasi, dimana statement for menjadi kontrol atas loop yang dilakukan. Hal ini yang menjadi pembeda antara for-loop dengan while-loop.

Berikut adalah cara atau struktur penulisan for-loop:

for([Inisialisasi], [Kondisi], [Incremental/Decremental]) {
  [Proses] // Merupakan proses yang akan dijalankan dalam satu iterasi
}

Pada for-loop, statement for akan menampung tiga parameter, yaitu sebut saja inisialisasi, kondisi, dan incremental/decremental. Ketiga parameter ini akan menjadi kontrol kapan loop ini harus berhenti. Pada parameter pertama, yaitu inisialisasi, sebuah variable diberikan nilai awal atau default. Pada parameter kedua, yaitu kondisi, for-loop akan terus berjalan selama kondisi ini masih terpenuhi, dengan kata lain, mengandung nilai true. Pada parameter kedua, yaitu incremental/decremental, variabel yang menjadi kontrol terhadap loop ini akan diubah nilainya.

emoji-thumbsup Best Practice: Walaupun memang for-loop dapat mengubah kondisi di dalam proses, namun best practice dari penggunaan for-loop adalah seluruh kendali atau kontrol dari looping ditentukan oleh variable yang diinisialisasi, di increment/decrement, dan juga kondisi for-loop pun menggunakan variable tersebut.

Untuk memudahkan kamu mendapatkan gambaran jelas tentang penggunaan for-loop, mari kita gunakan kedua contoh while-loop dan kita tulis ulang dalam bentuk for-loop.

Contoh Looping For-loop 1 Looping Angka 1-9 Sederhana

for(var angka = 1; angka < 10; angka++) {
  console.log('Iterasi ke-' + angka);
}

Kamu bisa mencoba kode di atas disini

Contoh Looping For-loop 2 Looping Mengembalikan Angka Total

var jumlah = 0;
for(var deret = 5; deret > 0; deret--) {
  jumlah += deret;
  console.log('Jumlah saat ini: ' + jumlah);
}

console.log('Jumlah terakhir: ' + jumlah);

Kamu bisa mencoba kode di atas disini

Contoh Looping For-loop 3 Looping Dengan Increment dan Decrement Lebih dari 1

for(var deret = 0; deret < 10; deret += 2) {
  console.log('Iterasi dengan Increment counter 2: ' + deret);
}

console.log('-------------------------------');

for(var deret = 15; deret > 0; deret -= 3) {
  console.log('Iterasi dengan Decrement counter : ' + deret);
}

Kamu bisa mencoba kode di atas disini

# emoji-warning Waspadai Forever Looping!

Dengan sengaja atau sengaja, kode kamu mungkin dapat menghasilkan forever looping, atau looping yang tidak akan pernah berhenti. Bila ini terjadi, segera periksa statement kondisi kamu.

var flag = 1;
while(flag < 10) { // Loop akan terus berjalan, karena nilai flag tidak pernah berubah
  console.log('Iterasi ke-' + flag);
}

# Function/Method

Function adalah sebuah blok kode yang disusun sedemikian rupa untuk menjalankan sebuah tindakan. Blok kode ini dibuat untuk dapat bisa digunakan kembali. Cara atau bentuk penulisan function adalah sebagai berikut:

function nama_function(parameter 1, parameter 2, ...) {
  [Isi dari function berupa tindakan]
  return [expression];
}

Kode di atas tidak dapat kita copy-paste kan langsung, melainkan hanya sebuah bentuk penulisan function. Sebuah function, umumnya melakukan tindakan dan sebelum function berakhir, function bisa mengembalikan nilai dengan cara menambahkan sintaks return.

Kita juga dapat mengirimkan nilai ke dalam sebuah function dengan mencantumkannya ke dalam tanda kurung dalam penulisan function. Untuk mengirimkan nilai lebih dari satu, gunakan tanda , sebagai pemisah.

Contoh Function 1: Function sederhana tanpa return

function tampilkan() {
  console.log("halo!");
}

tampilkan();

Contoh Function 2: Function sederhana dengan return

function munculkanAngkaDua() {
  return 2
}

var tampung = munculkanAngkaDua();
console.log(tampung)

Contoh Function 3: Function dengan parameter

function kalikanDua(angka) {
  return angka * 2
}

var tampung = kalikanDua(2);
console.log(tampung)

Contoh Function 4: Pengiriman parameter lebih dari satu

function tampilkanAngka(angkaPertama, angkaKedua) {
  return angkaPertama + angkaKedua
}

console.log(tampilkanAngka(5,3))

Contoh Function 5: Inisialisasi parameter dengan nilai default

function tampilkanAngka(angka = 1) {
  return angka
}

console.log(tampilkanAngka(5)) // 5, sesuai dengan nilai parameter yang dikirim
console.log(tampilkanAngka()) // 1, karena default dari parameter adalah 1

emoji-warning Waspadai pengiriman parameter yang UNDEFINED!

Kita juga dapat menampung function sebagai variable dengan sebuah bentuk function yang dinamakan Anonymous Function.

var fungsiPerkalian = function(angkaPertama, angkaKedua) {
  return angkaPertama * angkaKedua
}

console.log(fungsiPerkalian(2,4))

#    emoji-notebook_with_decorative_cover Mempelajari Scope
Relearn JavaScript Scope
Objectives

    ▢ Mengulas kembali dan memahami scope lebih lanjut.

# Learnings

Cakupan atau scope pada JavaScript berhubungan erat dengan konsep global dan local. Global dan local ini dipengaruhi oleh lokasi saat kita deklarasikan. Variabel local bisa saja memiliki identifier yang sama dengan variabel global, tapi konteksnya berbeda. Jika kita ganti nilai suatu variabel yang namanya sama namun konteksnya berbeda, pengaruh hanya terjadi pada variabel dalam konteks yang kita perlakukan.

// global scope
var example = "Global";

function testExample() {
  // local scope
  var example = "Local";
  return example;
}

console.log(example); // Global
console.log(testExample()); // Local

Dengan kode di atas, jika kita tidak/belum mendeklarasikan variabel example pada scope global, kita tidak bisa melakukan console.log(example) karena variabel terkait dianggap tidak tercapai.

Selain variabel bahkan kita bisa mengatur scope function seperti...

// global scope
var functionA = function() {
  // local scope in functionA
  var functionB = function() {
    // local scope in functionB, in functionA
  };
};

Hukum global dan local adalah hal atau objek global dapat diakses di local, namun tidak sebaliknya.

var example = "Example"
var functionA = function() {
  console.log(example + " in A");
  var functionB = function() {
    console.log(example + " in B"); // it's possible
  };
  functionB();
};
functionA();

Scope juga berkaitan dengan this yang sudah kita gunakan sebelumnya.

var functionA = function() {
  console.log(this); // global Window object
}

var sampleObject = {};
sampleObject.functionB = function() {
  console.log(this); // Object of sampleObject
}

functionA();
sampleObject.functionB();

Maka dari itu, perhatikanlah dan berhati-hatilah waktu dan letak kita mendeklarasikan variabel atau function.


# Tugas :

#    emoji-anchor [Exercises 8] JavaScript Building Blocks: Codecademy JavaScript Course (Unit 3 - Functions)
#    emoji-anchor [Exercises 9] Berlatih Penggunaan Functions
# Mengenal Penggunaan Function
# Objectives

    Mampu memahami serta mengimplementasi penggunaan function pada JavaScript

# Directions

    Lanjutkan kode berikut ini hingga dapat menampilkan nilai / output yang diminta!

# Tugas 1

Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!", yang kemudian akan ditampilkan di console.

/*
 BUATLAH KODE FUNCTION DISINI
*/

console.log(shoutOut()) // Menampilkan "Halo Function!" di console

# Tugas 2

Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari dua parameter yang dikirim.

/*
 BUATLAH KODE FUNCTION DISINI
*/

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

# Tugas 3

Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi satu kalimat berikut: "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

/*
 BUATLAH KODE FUNCTION DISINI
*/

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"



# Jumat
# Solve Problems menggunakan JavaScript


#    emoji-anchor [Exercises 10] Bandingkan Angka
# Logic Challenge - Bandingkan Angka
# Problem

Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka. Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. Jika kedua angka bernilai sama, function akan me-return -1.
# Code

function bandingkanAngka(angka1, angka2) {
  // you can only write your code here!
}

# // TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

#    emoji-anchor [Exercises 11] Balik Kata
# Logic Challenge - Balik Kata
# Problem

Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".
Code

function balikKata(kata) {
  // you can only write your code here!
}

# // TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

#    emoji-anchor [Exercises 12] Konversi Menit
# Logic Challenge - Konversi Menit
# Problem

Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. Contoh, jika menit adalah 63, maka function akan me-return "1:03".
Code

function konversiMenit(menit) {
  // you can only write your code here!
}

# // TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

#    emoji-anchor [Exercises 13] X dan O
# Logic Challenge - X dan O
# Problem

Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.
Code

function xo(str) {
  // you can only write your code here!
}

# // TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

# Sabtu dan Minggu

    Refleksi kegiatan pekan ini
    Blogging teknikal terkait skill pekan ini

Selamat berpetualang dengan logika dan data! Jika ada hal yang perlu ditanyakan, langsung saja berdiskusi di grup ya.

Salam,

Tim Hacktiv8

