const { error } = require('console');
const fs=require('fs');

// fs.readFile("./file.txt","utf8",(error,data)=>{
//     if(error){
//         console.log("error in reads file",error);
//     }
//     else{
//         console.log(data);
//     }
// })

// fs.writeFile("./file.txt","this is the write file method","utf8",(error)=>{
//     if(error){
//         console.log("error in write file",error);
//     }
// })
// fs.appendFile("./file.txt","this append file method",(error)=>{
//     if(error)
//     {
//             console.log("error in append file method",error);

//     }
// })
// fs.copyFile("./file.txt","./copyfile.txt",(error)=>{
//     if(error)
//     {
//             console.log("error in copy file method",error);

//     }
// })


// fs.unlink("./copyfile.txt",(error)=>{
//     if(error){
//             console.log("error in delete file",error);

//     }
//     else{
//         console.log("file.is deleted")
//     }
// })

// fs.readdir("./",(error,files)=>{
//     if(error){
//         console.log("erro in read directory",error);
//     }
//     else{
//         console.log(files);
//     }
// })