const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const exerciseRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connecting to mongo database
mongoose.connect("mongodb://localhost:27017/example", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection successfull");
});

// Routes
app.use("/exercises", exerciseRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
