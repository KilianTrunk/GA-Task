const fs = require("fs-extra");
const path = require("path");

// Define the source and destination paths
const sourcePath = path.resolve(__dirname, "node_modules/gameart-task-kilian/");
const destinationPath = path.resolve(__dirname);

// Copy all files from the source to the destination
fs.copySync(sourcePath, destinationPath);

console.log("Files copied successfully!");
