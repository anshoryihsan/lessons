// Arrow Function
let janjian = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve({
            nama: 'Arif Prambudi',
            kelas: 18
        })
    }, 6000)
    setTimeout(()=> {
        reject(new Error('Connection Unstable'))
    }, 1500)
    setTimeout(()=> {
        reject(new Error('Connection Timeout'))
    }, 3000)
});
janjian
  .then((res) => {
      console.log('berhasil mengambil data')
    // if(res.kelas == 18) {
    //     console.log('benar')
    // }else{
    //     console.log('salah')
    // }
  })
  .catch((err) => {
    console.log(err.message);
  }).finally(()=> {
    console.log('selesai')
})


//Function Biasa 
// let janjian = new Promise(function (resolve, reject) {
//   let success = false;
//   if (success) {
//     resolve("berhasil");
//   } else {
//     reject(new Error("janji dibatalkan"));
//   }
// });

// janjian
//   .then(function (hasil) {
//     console.log(hasil);
//   })
//   .catch(function (gagal) {
//     console.log(gagal.message);
//   });
