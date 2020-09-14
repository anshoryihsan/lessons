// const http = require('http')
// const axios = require('axios')
import axios from 'axios';
import http from 'http'

// const path = require('path')



var server = http.createServer((req, res) => {
  res.end("hello world");
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) =>{
      // handle success
      //   console.log()
      response.data.map((item, index) => {
        console.log(item.name);
      });
    })
    .catch((error) =>{
      // handle error
      console.log(error.message);
    })
});


server.listen(3000);

// installation nodemon
// npm i -g nodemon
