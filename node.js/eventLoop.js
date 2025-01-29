const fs = require("fs");
const http=require('http')
//timer phase

setTimeout(() => console.log("settimout excecuted"), 1000);

setTimeout(() => console.log("settimout excecuted with 0 time"), 0);

setInterval(() => {
  console.log("interval with 1000 sec");
}, 1000);

//2.pending call back phase
//i/ooperations and pending callbacks excecute
fs.readFile("./express/syncFile.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

//3.---idle phase

//back ground tasks like garbage collection

//4.poll phase
//-->i/o opertaions and network i/o operaations
//i/o transfer data from computer to computer
//and excevute them in poll wqueue

http.get('http://jsonplaceholder.typicode.com/posts/1',(res)=>{
    console.log('http response received');
    res.on('data',(chunk)=>console.log(chunk)
    )
})

//5. check phase
//-->where set immediate runs
//-->The Node.js event loop goes to the check phase when there is a setImmediate in the program,
//  and the poll phase becomes idle or when the poll phase completes.

setImmediate(() => {
    console.log("setImmediate callback executed");
  });

  //6.close callback phase
  //---handling call backs with close events from http or ssocket

  const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':"text/plain"});
    res.end('Hello world\n');
  })

  server.listen(3000,()=>{
    console.log('server running');
    server.close(()=>{
        console.log('server closed');
        
    })
  })