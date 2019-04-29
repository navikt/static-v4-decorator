const express = require("express");

const app = express();
app.use(express.static("static"));

const isProduction = process.env.NODE_ENV === "production";
const allowedOrigin = isProduction
  ? `(http|https)://(.*).nav.no`
  : `http://localhost:3000`;

// Express settings
app.use((req, res, next) => {
  const origin = req.get("origin");
  if (origin && origin.match(allowedOrigin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
  }
  next();
});

app.get("/t/common-html/v4/navno", (req, res) =>
  res.sendfile("/t/common-html/v4/navno.html", { root: "./static" })
);

app.get("/q/common-html/v4/navno", (req, res) =>
  res.sendfile("/q/common-html/v4/navno.html", { root: "./static" })
);

app.get("/p/common-html/v4/navno", (req, res) =>
  res.sendfile("/p/common-html/v4/navno.html", { root: "./static" })
);

app.get("/isAlive", (req, res) => res.sendStatus(200));
app.get("/isReady", (req, res) => res.sendStatus(200));
app.get("/", (req, res) => res.sendStatus(200));
app.listen(8080, () => console.log(`App listening on port: 8080`));
