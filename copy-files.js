const fs = require("fs");
const path = require("path");

const sourceDir = path.resolve("./node_modules/gameart-task-kilian");
const destinationDir = path.resolve(".");

fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error("Error reading source directory:", err);
    return;
  }

  files.forEach((file) => {
    const sourcePath = path.join(sourceDir, file);
    const destinationPath = path.join(destinationDir, file);

    fs.copyFile(sourcePath, destinationPath, (err) => {
      if (err) {
        console.error(`Error copying ${file}:`, err);
      } else {
        console.log(`${file} copied successfully!`);
      }
    });
  });
});
