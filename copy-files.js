const fs = require("fs-extra");
const path = require("path");

// Define the files to be copied
const filesToCopy = [
  {
    from: "node_modules/gameart-task-kilian/js-functions.js",
    to: "js-functions.js",
  },
  { from: "node_modules/gameart-task-kilian/ping-pong.js", to: "ping-pong.js" },
  {
    from: "node_modules/gameart-task-kilian/ping-pong.test.js",
    to: "ping-pong.test.js",
  },
];

// Copy files to the root directory
filesToCopy.forEach((file) => {
  const sourcePath = path.resolve(__dirname, file.from);
  const destinationPath = path.resolve(__dirname, file.to);
  fs.copySync(sourcePath, destinationPath);
});

console.log("Files copied successfully!");
