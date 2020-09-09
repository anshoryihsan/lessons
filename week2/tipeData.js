const number = 5;
const string = "saya";
const boolean = false;
const object = {}; //null
const arr = ["Tofa Maulana Irvan", "5", "Batang"];

const sekolah = [
  { namaSekolah: "SMK apa", jurusan: "Akutansi", masuk: 2008 },
  { namaSekolah: "SD apa", jurusan: "Akutansi", masuk: 2008 },
  { namaSekolah: "SMP apa", jurusan: "Akutansi", masuk: 2008 },
];
const skills = [{ skillName: "Laravel", level: "expert" }];

sekolah.map((item, index) => {
  return <p>{item.namaSekolah}</p>;
});

// const undefined = ///undefined
// const nullo = null

// function tipeData() {
//     console.log('function')
// }
// console.log(Array.isArray(arr))
