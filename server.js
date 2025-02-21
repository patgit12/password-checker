require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Environment variables
const SECRET_PASSWORD = process.env.PASSWORD;
const WEBSITE_LINK = process.env.WEBSITE;

app.post("/check-password", (req, res) => {
    const { password } = req.body;
    if (password === SECRET_PASSWORD) {
        res.json({ success: true, url: WEBSITE_LINK });
    } else {
        res.json({ success: false });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
