import { error } from "console";
import fs from "fs";

fs.readFile("./a.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("fayl oxuna bilmedi");
  } else {
    let mesaj = JSON.stringify(data);
    mesaj.toLowerCase;

    fs.writeFile("./new10.txt", mesaj, (err) => {
      if (err) {
        console.log("ugursuz emeliyat");
      } else {
        console.log("ugurlu emeliyat");
      }
    });
  }
});
