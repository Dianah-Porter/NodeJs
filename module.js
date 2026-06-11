const xyz =  require('./node');
console.log(xyz);

//os module 
const os = require('os');
console.log("Operating System: " + os.type());
console.log("CPU Architecture: " + os.arch());
console.log("Total Memory: " + os.totalmem());
console.log("Free Memory: " + os.freemem());


//fs module
const fs = require('fs');

//reading a file that takes two arguments, the first is the file name and the second is a callback function that will be called when the file is read

fs.readFile('./node.js', (err,data) => {
    if(err) {
        console.error("Error reading file: " + err);
    }
    console.log("File content: " + data.toString());
});
console.log('Reading file...');

//Writing a file that takes three arguments, the first is the file name, the second is the content to be written and the third is a callback function that will be called when the file is written
fs.writeFile('./output.txt', 'This is a sample text written to the file.', (err) => {
    if(err) {
        console.error("Error writing file: " + err);
    }}
);
console.log('Writing to file...');