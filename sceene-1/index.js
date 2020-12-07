const express = require("express");
const expressStaticGzip = require("express-static-gzip");

const app = express();
const port = 80;
// app.use("/", expressStaticGzip(__dirname));

app.use(express.static(__dirname));
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
