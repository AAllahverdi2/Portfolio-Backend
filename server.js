const express = require("express");
const app = express();
const PortfolioRouter = require("./router/Portfolio.routes");
const ContactRouter = require("./router/contact.routes");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); 

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("MongoDB connection error:", error));

app.use("/portfolio/skills", PortfolioRouter);
app.use("/portfolio/contact", ContactRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
