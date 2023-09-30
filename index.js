/** @format */

import * as fs from "fs";
fs.copyFile("file1.txt", "file2.txt", messageFunction);
function messageFunction() {
  console.log("This is the data from txt1 to txt2 file");
}
