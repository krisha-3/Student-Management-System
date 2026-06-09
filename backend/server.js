const express = require("express");
const connectDB = require("./config/db");
const Students = require("./models/Students");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.get("/students", async (req, res) => {
  try {
    const students = await Students.find();

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
app.get("/students/:id", async (req, res) => {
  try {
    const student = await Students.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
app.put("/students/:id", async (req, res) => {
  try {
    const updatedStudent = await Students.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedStudent) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.delete("/students/:id", async (req, res) => {
  try {
    const deletedStudent = await Students.findByIdAndDelete(req.params.id);

    if (!deletedStudent) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json({
      message: "Student deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.post("/students", async (req, res) => {
  try {
    const student = await Students.create(req.body);

    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});
