const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const corsOptions = {
    origin: "http://localhost:5173",
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

// Routes
// app.use("/api/v1", api);

app.get("/", (req, res) => {
    res.json({
        message: "API",
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`Server is listening: http://localhost:${port}`);
    /* eslint-enable no-console */
});
