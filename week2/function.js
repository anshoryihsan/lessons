// const nama = 'Anjas'

// function mengambilNama(aha) {
//     console.log('nama:', aha)

// }

// const mengambilNama = function(nama) {
//     console.log('nama', nama)
// }

// const mengambilNama = (nama) => {
//     console.log('nama', nama)
// }
// const mengambilNama = (nama) => console.log('nama', nama)
// const mengambilNama = (nama) => (
//     console.log('nama', nama)
// )
// const mengambilNama = (nama) => {
//     console.log('nama', nama)
//     return(
//         <p></p>
//     )
// }

// mengambilNama(nama)

// const nilai = {
//     bahasaIndonesia: 50,
//     bahasaInggris: 20,
// }
// const nilai = [
//     {
//         pelajaran: 'Bahasa Indonesia',
//         nilai: 50
//     },
//     {
//         pelajaran: 'Bahasa Inggris',
//         nilai: 20
//     },
//     {
//         pelajaran: 'IPA',
//         nilai: 60
//     },
// ]
// const additional = (nilai) => {
//     // console.log(
//         nilai.map((item, index) => {
//             console.log(`nilai: ${item.nilai}`)
//         })
//     // )
// }

// additional(nilai)

// var obj = {
//   nama: "gg",
//   nama2: "hh",
// };

// function cari(x) {
//   console.log(
//     obj.nama == x || obj.nama2 == x ? x : "pencarian tydac ditemukan"
//   );
// }

// cari("adasd");


const nilai = [
    {
        pelajaran: 'Bahasa Indonesia',
        nilai: 50
    },
    {
        pelajaran: 'Bahasa Inggris',
        nilai: 20
    },
    {
        pelajaran: 'IPA',
        nilai: 60
    },
]
const pencarian = (kataKunci) => {
    // let filter = nilai.filter((item, index) => item.pelajaran == kataKunci)
    let filter = nilai.filter((item, index) => item.pelajaran == kataKunci)
    console.log(filter)
}

pencarian('IPA')