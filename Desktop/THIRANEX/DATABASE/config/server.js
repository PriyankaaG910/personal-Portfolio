require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const Contact = require("./models/Contact");
const Project = require("./models/Project");
const Skill = require("./models/Skill");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

/* CONTACTS */

app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/contacts", async (req, res) => {
  try {

    const contact = await Contact.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    });

    res.status(201).json(contact);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* PROJECTS */

app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* SKILLS */

app.get("/api/skills", async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});