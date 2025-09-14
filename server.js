const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const fileRoutes = require("./routes/fileRoutes");

dotenv.config();
connectDB("mongodb+srv://shyam1:qwertyuiop1234sss@cluster1.legdt0r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/files", fileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
