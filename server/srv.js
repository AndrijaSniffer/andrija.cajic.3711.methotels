const express = require('express');
const sobaRouter = require("./routes/sobaRoutes");
const dodatneOpcijeRouter = require("./routes/dodatneOpcijeRoutes");
const sobaDodatneOcijeRouter = require("./routes/sobaDodatneOpcijeRoutes")
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors())
app.use("/sobe", sobaRouter);
app.use("/opcije", dodatneOpcijeRouter);
app.use("/sobaOpcije", sobaDodatneOcijeRouter)

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

var server = app.listen(8080, function () {
  let host = "localhost"
  let port = server.address().port
  console.log(`\nServer osluskuje na: http://${host}:${port}\nAndrija Cajic 3711`)
});
