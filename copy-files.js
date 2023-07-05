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

const sourcePath = "/node_modules/gameart-task-kilian";
const destinationPath = ".";

fs.copy(sourcePath, destinationPath)
  .then(() => {
    console.log("File copied successfully!");
  })
  .catch((err) => {
    console.error("Error copying file:", err);
  });
