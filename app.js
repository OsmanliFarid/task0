import fs from "fs";
let mesaj = "";
fs.readFile("./task.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("xeta bas verdi");
  } else {
    mesaj = data.toUpperCase();

    fs.writeFile("./new.txt", mesaj, (err) => {
      if (err) {
        console.log("xeta bas verdi");
      } else {
        console.log("ugurlu");
      }
    });
  }
});
