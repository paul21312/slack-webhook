const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json()); // Middleware to parse JSON payloads

// Webhook endpoint
app.post("/slack-webhook", (req, res) => {
    const { type, challenge } = req.body;

    if (type === "url_verification") {
        res.json({ challenge }); // Respond with the challenge value
    } else {
        res.status(400).json({ error: "Invalid request" });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(3000, '0.0.0.0', () => {
    console.log("Server running on port 3000");
});

