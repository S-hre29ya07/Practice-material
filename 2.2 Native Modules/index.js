const fs = require("fs");

// fs.writeFile("message.txt","Hello from Nodejs", (err)=>{
//     if(err) throw err;
//     console.log("file have been created successfully")
// })

fs.readFile("./message.txt", "utf8",(err,data)=>{
    if(err) throw err;
    console.log(data)
})