// const object = {
//     methodOne: function() {
//         console.log('nilai method one')
//     },
//     methodTwo: function() {
//         return this.methodOne()
//     }
// }
// const object = {
//     methodOne: ()=> {
//         console.log('aha')
//     },
//     methodTwo: ()=> object.methodOne()
// }

// console.log()
// object.methodTwo()

let nilai = [0, 1000, 10000, 1, 2, 5]; //lebih tepat digunakan untuk pengurutan abjad

// walaupun 7 lebih kecil daripada 1000 yang dari urutan pertama ialah 7, karena
// nilai awalnya adalah 7 lebih besar daripada 1000

// let newNilai = nilai.sort((a, b) => a - b);
// // let newNilai = nilai.sort((item) => item == 50)

// console.log(newNilai);

// nilai.map((item, index) => {
//     if(index >= 2) {
//         console.log('terganti')
//     }else{
//         console.log(`item: ${item}, index: ${index}`)
//     }
    
// })

// let filter = nilai.filter((item, index) => item === 5)

// console.log(filter)


let nama = ['alya','adita','arya']
let newVal = ['adit','pena']
// nama.push(nama[0] == 'dita', ...nama)

// console.log(newNama)
// console.log(nama)


nama.splice(1, 0, ...newVal)

console.log(nama)