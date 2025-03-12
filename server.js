const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const PortfolioRouter = require("./router/Portfolio.routes");
const ContactRouter = require("./router/contact.routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware'ler
app.use(cors());
app.use(express.json());

// ✅ MongoDB Bağlantısı
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((error) => console.log("❌ MongoDB connection error:", error));

// ✅ Root (Ana Sayfa) Route'u
app.get("/", (req, res) => {
    res.send("Portfolio Backend API is running...");
});

// ✅ API Routes
app.use("/portfolio/skills", PortfolioRouter);
app.use("/portfolio/contact", ContactRouter);

// ✅ Server Dinleme
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});

// Vercel için export (Zorunlu Değil Ama Önerilir)
module.exports = app;
