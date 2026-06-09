const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.get("/students", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Krisha",
      rollNo: "23BECE30153",
    },
  ]);
});

app.post("/students", (req, res) => {
  console.log(req.body);

  res.json({
    message: "Student Added Successfully",
  });
});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});
