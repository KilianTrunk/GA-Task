const express = require("express");
const app = express();
const port = 3000;

app.get("/ping", (req, res) => {
  try {
    const username = req.query.username || "GameArt back-end developer";
    res.send(`pong, ${username}!`);
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  const serverUrl = `http://localhost:${port}/ping`;
  console.log(
    `Dear Izak, click here to access the 'Simple ping-pong API' server: ${serverUrl}`
  );
  console.log(
    `Note: you can even add your own username as a query parameter username to replace the 'GameArt back-end developer' text => for example, if you want your username to be Kilian, you would access the server at: ${
      serverUrl + "?username=Kilian"
    }`
  );
});

module.exports = app;
