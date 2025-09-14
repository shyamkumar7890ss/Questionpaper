const express = require("express");
const multer = require("multer");
const path = require("path");
const { uploadFile, getFilesByCategory } = require("../controllers/fileController");

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// Routes
router.post("/upload", upload.single("file"), uploadFile);
router.get("/:category", getFilesByCategory);

module.exports = router;
