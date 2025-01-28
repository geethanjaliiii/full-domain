const eventEmitter = require("events");
const emitter = new eventEmitter();

emitter.on("data", (data) => data.forEach((d) => console.log(d)));

emitter.emit('data',[1,2,3,4])

emitter.once('greet',(name)=>console.log(`hii ${name}`)
)

emitter.emit('greet','anju')