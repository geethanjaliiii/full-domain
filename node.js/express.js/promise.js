const { error } = require("console");
const fs = require("fs/promises");

//then catch
fs.readFile("./async_file.txt", "UTF-8")
.then((data) => console.log(data))
.catch((error)=>console.log(error)
).then(()=>console.log("hii")
)

//USING ASYNC-AWAIT

//---------------async gunction will always return a promise---------
async function readFile(){
    try {
    const data=await fs.readFile('./async_file.txt','utf-8')
    console.log(data);
    
    } catch (error) {
        console.error(error);
        
    }
}
readFile()