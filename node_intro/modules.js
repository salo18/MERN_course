const { people } = require('./test');

// console.log(people);

// const os = require('os');
// console.log(os.platform(), os.homedir());

const fs = require('fs');

// READ
// fs.readFile('./blog.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//   }

//   // console.log(data); /// logs Buffer... which is a package of data

//   console.log(data.toString());
// });


// WRITE
// fs.writeFile('./blog.txt', 'WRITTEN TEXT', () => {
//   console.log('file written');
// });

// DIRECTORIES

// check if the directory exists first
// if (!fs.existsSync('./docs')) {
//   fs.mkdir('./docs', (err) => {
//     if (err) {
//       console.log(err);
//     }

//     console.log('folder created');
//   })
// } else {
//   fs.rmdir('./docs', (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('folder deleted');
//   })
// }


if (fs.existsSync('./blog.txt')) {
  fs.unlink('./blog.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  })
}