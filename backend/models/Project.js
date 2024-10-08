const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  link: String,
  tags: [String],
});

module.exports = mongoose.model('Project', ProjectSchema);
