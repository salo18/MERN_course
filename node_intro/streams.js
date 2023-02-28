const fs = require('fs');

const readStream = fs.createReadStream('./blog.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./blog1.txt');

// on() is an event listener for a data event
// readStream.on('data', (chunk) => {
//   console.log('NEW CHUNK -----------');
//   console.log(chunk);
//   writeStream.write(chunk);
// })


// pipe
readStream.pipe(writeStream);