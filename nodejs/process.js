const path = require('path')  
const myPath = path.join(__dirname,'./1111.txt')
console.log(myPath);
const pathName = path.basename(myPath)
console.log(pathName);
const pathExt = path.extname(myPath)
console.log(pathExt);