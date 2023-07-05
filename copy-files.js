const fs = require("fs-extra");
const path = require("path");

const sourceDir = "./node_modules/gameart-task-kilian";
const destinationDir = "./";

fs.copy(sourceDir, destinationDir, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Files copied successfully!");
  }
});
