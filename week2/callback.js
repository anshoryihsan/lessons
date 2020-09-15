// function sayHello(name, callback) {
//     let gretting = `Hello ${name}`
//     callback(gretting)
// }

// function showGretings(gretting) {
//     console.log(gretting)
// }

// sayHello('Arif', showGretings)

// const sayHello = (name, callback) =>{
// //   console.log(name)
//     console.log(callback)
// }

// const showGretings = (gretting) => {
//     console.log(gretting)
// }

// sayHello('Arif', showGretings('Hello'))

const sayHello = (name, showGretings, identitas) => {
  let gretting = `${identitas(name)}`;
  showGretings(gretting, name);
};

const showGretings = (gretting, name) => {
  console.log(`${gretting}, Hello ${name}`);
};

const identitas = (name) => {
  return `Namanya: ${name}`
};

sayHello("Arif", showGretings, identitas);
