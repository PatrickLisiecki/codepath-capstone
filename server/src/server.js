import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";

import { Google } from "./config/auth.js";

import authRoutes from "./routes/auth.js";

dotenv.config();

const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app.use(
    session({
        secret: [process.env.COOKIE_SECRET],
        cookie: {
            secure: process.env.NODE_ENV === "production" ? "true" : "auto",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 3600000, // 1 hour
        },
        resave: false,
        saveUninitialized: false,
    }),
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(Google);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

// Routes
// app.use("/api/v1", api);
app.use("/api/auth", authRoutes);

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
