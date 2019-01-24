"use strict";

// TODO: Write the homework code in this file
const fs = require("fs");

switch (process.argv[2]) {
  default:
  case "help":
    fs.readFile("./help.txt", "UTF-8", (err, data) => {
      console.log(data);
    });
    break;

  case "add":
    fs.readFile("./to-dos.txt", "UTF-8", (err, data) => {
      if (err) throw err;
      let todo = JSON.parse(data);
      let item = { item: process.argv[3] };
      todo.push(item);
      fs.writeFileSync(
        "./to-dos.txt",
        JSON.stringify(todo)
      );
      console.log(`item ${process.argv[3]} is added`);
    });
    break;

  case "remove":
    fs.readFile("./to-dos.txt", "UTF-8", (err, data) => {
      if (err) throw err;
      let todo = JSON.parse(data);
      if (todo.length == 0) {
        console.log(
          "The list is empty ---> nothing to remove"
        );
      } else {
        todo.splice(process.argv[3] - 1, 1);
        console.log(`item ${process.argv[3]} is removed`);
        fs.writeFileSync(
          "./to-dos.txt",
          JSON.stringify(todo)
        );
      }
    });
    break;

  case "list":
    fs.readFile("./to-dos.txt", "utf-8", (err, data) => {
      let items = JSON.parse(data);
      console.log(items);

      console.log(`the list contains: `);
      for (let i of items) {
        console.log(i.item);
      }
    });
    break;

  case "reset":
    fs.writeFile("./to-dos.txt", reset(), err => {
      if (err) throw err;
    });
    function reset() {
      let reset = [];
      return JSON.stringify(reset);
    }
    console.log("list reseted");
    break;
}

// console.log(process.argv);
// console.log(process.argv[0]);
// console.log(process.argv[1]);
// console.log(process.argv[2]);
