const Notes = require("../models/noteModel");

const noteCtrl = {
  getNotes: async (req, res) => {
    try {
      const notes = await Notes.find({ user_id: req.user.id });
      res.json(notes);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  createNote: async (req, res) => {
    try {
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};

module.exports = noteCtrl;
