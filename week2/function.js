const nama = 'Anjas'


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
const additional = (nilai) => {
    // console.log(
        nilai.map((item, index) => {
            console.log(`nilai: ${item.nilai}`)
        })
    // )
}

additional(nilai)