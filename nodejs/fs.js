const fs = require('fs')
fs.writeFile('./log.txt','hello',(err,data)=>{
    if(err){}else{
        console.log('成功');
    }
})