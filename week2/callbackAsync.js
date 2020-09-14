// Arrow Function

let showGretings = (message) => {
  console.log(message);
};

let janjian = (showGretings) =>
  new Promise((resolve, reject) => {
    let succes = false;
    if (succes) {
      resolve("Data Berhasil");
      showGretings("Halo Selamat Siang");
    } else {
        reject("Error");
    }
  });

janjian(showGretings)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
