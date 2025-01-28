const fs = require("fs/promise");
//writefile
fs.writeFileSync("syncFile.tsx", "hello world");
fs.writeFile("async_file.txt", "hii how are you", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file written");
  }
});

fs.readFile("./async_file.txt", "UTF-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

//APPENDING DATA WITHOUT OVERWRITING
fs.writeFile("async_file.txt", "I am anu", { flag: "a" }, (err) => {
  if (err) {
    console.log(err);
  }
});

//COPYING

fs.readFile("./async_file.txt", "UTF-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile("syncFile.txt", data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("file copied");
      }
    });
  }
});
