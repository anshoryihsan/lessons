let janjian = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      nama: "Arif Prambudi",
      kelas: 18,
    });
  }, 1000);
//   setTimeout(() => {
//     reject(new Error("Connection Unstable"));
//   }, 1500);
  setTimeout(() => {
    reject(new Error("Connection Timeout"));
  }, 3000);
});
// janjian
//   .then((res) => {
//       console.log('berhasil mengambil data')
//   })
//   .catch((err) => {
//     console.log(err.message);
//   }).finally(()=> {
//     console.log('selesai')
// })

//function biasa
// async function manggilJanjian() {
//   try {
//     let result = await janjian;
//     if(result.kelas == 18 ) {
//         console.log('benar')
//     }else{
//         console.log('salah')
//     }
//   } catch (error) {
//       console.log(error.message)
//   }finally {
//     console.log('selesai')
//   }
// }

// arrow function async
// const manggilJanjian = async () => {
//     try {
//         let result = await janjian;
//         console.log(result)
//       } catch (error) {
//           console.log(error.message)
//       }finally {
//         console.log('selesai')
//       }
// }

// manggilJanjian();

// self invoked function
(async()=> {
    try {
        let result = await janjian;
        console.log(result)
        if(!result.kelas == 18) {
            console.log('salah')
        }else{
            console.log('benar')
        }
      } catch (error) {
          console.log(error.message)
      }finally {
        console.log('selesai')
      }
})()