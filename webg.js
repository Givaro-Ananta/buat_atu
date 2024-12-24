$(document).ready(function(){
    Swal.fire({
       icon: 'warning',
       title: 'Hallo Sayanggkuuu',
       text: 'akuu buat inii buat kamuuu semalem hehe',
       showCancelButton: false,
       allowOutsideClick: false,
       allowEscapeKey: false,
     }).then(() => {
       return Swal.fire({
         icon: 'question',
         title: 'Jawab Jujur ya',
         showCancelButton: false,
         allowOutsideClick: false,
         allowEscapeKey: false,
       });
     }).then(() => {
       return Swal.fire({
         icon: 'error',
         title: 'awas kalo boong',
         showCancelButton: false,
         allowOutsideClick: false,
         allowEscapeKey: false,
       });
     }).then(() => {
       return Swal.fire({
         title: 'Masukin nama kamu',
         input: 'text',
         showCancelButton: true,
         confirmButtonText: 'OK',
         cancelButtonText: 'Cancel',
         allowOutsideClick: false,
         allowEscapeKey: false,
       });
     }).then((result) => {
       if (result.isDismissed) {
         return Swal.fire({
           title: 'Yahhh... :(', 
           text: 'Kenapa di cancel sayanggg?',
           showConfirmButton: false,
           timer: 2000
         }).then(() => {
           throw new Error('Cancelled'); // This will stop the chain
         });
       }
       
       if (result.value) {
         const nama = result.value;
         return Swal.fire({
           title: nama + " sayang ndaa sama payo?",
           confirmButtonText: 'Sayang',
           cancelButtonText: 'Sayang Bangett',
           showCancelButton: true,
           allowOutsideClick: false,
           allowEscapeKey: false,
         }).then(() => nama);
       }
     }).then((nama) => {
       if (nama) {
         return Swal.fire({
           title: "Akuupunn sayaang bangettt banget sama " + nama,
           showCancelButton: false,
           allowOutsideClick: false,
           allowEscapeKey: false,
         }).then(() => nama);
       }
     }).then((nama) => {
       if (nama) {
         return Swal.fire({
           title: 'Emang seberapa sayang coba?',
           icon: 'question',
           input: 'range',
           showCancelButton: false,
           allowOutsideClick: false,
           allowEscapeKey: false,
           inputAttributes: {
             min: 0,
             max: 100,
             step: 1
           },
           inputValue: 50
         }).then(() => nama);
       }
     }).then((nama) => {
       if (nama) {
         return Swal.fire({
           title: 'Maaciii sayangkuu',
           showCancelButton: false,
           allowOutsideClick: false,
           allowEscapeKey: false,
         }).then(() => nama);
       }
     }).then((nama) => {
       if (nama) {
         return Swal.fire({
           title: 'Sekarang ' + nama + ' kangen ndaa sama payooo?',
           confirmButtonText: 'Kangenn sayang',
           cancelButtonText: 'Kangenn bangett sayang ',
           showCancelButton: true,
           allowOutsideClick: false,
           allowEscapeKey: false,
         }).then(() => nama);
       }
     }).then((nama) => {
       if (nama) {
         return Swal.fire({
           title: 'HAAAA iya aku juga kangen bangettt sama ' + nama,
           showCancelButton: false,
           allowOutsideClick: false,
           allowEscapeKey: false,
         });
       }
     }).then(() => {
       return Swal.fire({
         title: 'terakhir niic sayang',
         showCancelButton: false,
         allowOutsideClick: false,
         allowEscapeKey: false,
       });
     }).then(() => {
       return Swal.fire({
         title: 'coba teken tombol biru :)',
         showCancelButton: false,
         allowOutsideClick: false,
         allowEscapeKey: false,
       });
     }).then(() => {
       $('#tombol-cari').show();
       
       $('#tombol-cari').on('click', function(){
         $('#tombol-cari').hide();
         $('#gambar').show();
         
         Swal.fire({
           icon: 'heart',
           title: 'Hallo cantikkuu sayaanngg',
           text: 'Akuu semalem ngerjain inii, ehehe hasil ngulik ngulik di githubb sayang',
           showCancelButton: false,
           allowOutsideClick: false,
           allowEscapeKey: false,
         }).then(() => {
           return Swal.fire({
             title: 'Kamu tau ndaa?',
             text: 'Akuu tu sayang banget sama kamu. walopun belakangan ini kita banyak berantemnya T_T. Tapiii, kita jangan pernah nyerah yaa sayangkuuu',
             confirmButtonText: 'Lanjut',
             showCancelButton: false,
             allowOutsideClick: false,
             allowEscapeKey: false,
           });
         }).then(() => {
           return Swal.fire({
             title: 'Maafin aku kalo sampe sekarang belum ada yang bisa dibanggain dari akuu..',
             html: `
               <div class="p-4">
                 <p class="mb-3">Aku banyak kurangnya yaa sayang, maaf yaaa cantikk.</p>
                 <p class="mb-3">Aku harap walopun kita sering berantem kaya gini, kamu jangan pernah nyerah yaa sayang.</p>
                 <p class="mb-3">Aku sayaanggg banget bangeett samaa kamuuu.</p>
               </div>
             `,
             confirmButtonText: 'Baca Selanjutnya',
             showCancelButton: false,
             allowOutsideClick: false,
             allowEscapeKey: false,
           });
         }).then(() => {
           return Swal.fire({
             title: 'Makasiii banyak yaaa sayang, karena kamu...',
             html: `
               <div class="p-4">
                 <p class="mb-3">Aku jadi ngerasain rasa disayaang banget. walopun kadang aku sendiri juga masih haus validasi.</p>
                 <p class="mb-3">Karena kamu, aku sekarang jadi lebih pd sayang. karena kamu selalu support dan yakinin aku.</p>
                 <p class="mb-3">Terakhir, makasiii banget udah nerima aku yang banyak kurangnya ini. Kita berjuang bareng-bareng yaa sayangg.</p>
               </div>
             `,
             confirmButtonText: 'Baca Selanjutnya',
             showCancelButton: false,
             allowOutsideClick: false,
             allowEscapeKey: false,
           });
         }).then(() => {
           return Swal.fire({
             title: 'Lovee you so muchh atuu sayaanggg',
             html: `
               <div class="p-4">
                 <p class="mb-3">Jangan ngambek lagiik yaa cintakkuu sayaanggg.</p>
                 <p class="mb-3">Besok sudaa yaa, nda cuek lagii, nda dry text lagiii. love you sayangkuuu (~payoo).</p>
               </div>
             `,
             confirmButtonText: 'Peluk Jauuhh ❤️',
             showCancelButton: false,
             allowOutsideClick: false,
             allowEscapeKey: false,
           });
         });
       });
     }).catch(error => {
       if (error.message === 'Cancelled') {
         // Do nothing - just let the chain end
         return;
       }
       // Handle other errors if needed
       console.error(error);
     });
   });