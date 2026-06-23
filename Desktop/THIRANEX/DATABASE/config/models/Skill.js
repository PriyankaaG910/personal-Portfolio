const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema(
{
  skillName: {
    type: String,
    required: true
  },

  level: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  }
},
{
  timestamps: true
}
);

module.exports = mongoose.model(
  "Skill",
  SkillSchema
);