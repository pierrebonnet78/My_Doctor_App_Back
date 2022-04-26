const express = require("express");

const users = require("./routes/users");
const user = require("./routes/user");
const auth = require("./routes/auth");
const helmet = require("helmet");
const config = require("config");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(cors(corsOptions)); // Use this after the variable declaration

app.use("/api/user", user);
app.use("/api/users", users);
app.use("/api/auth", auth);

const port = process.env.PORT || config.get("port");
app.listen(port, function () {
  console.log(`Server started on port ${port}...`);
});
