import express from "express";
import passport from "passport";
import "../config/dotenv.js";

const router = express.Router();

router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({ success: true, user: req.user });
    }
});

router.get("/login/failed", (req, res) => {
    res.status(401).json({ success: false, message: "failure" });
});

router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(error);
        }

        req.session.destroy((err) => {
            res.clearCookie("connect.sid");

            res.json({ status: "logout", user: {} });
        });
    });
});

router.get("/google", passport.authenticate("google", { scope: "profile" }));

router.get(
    "/google/callback",
    passport.authenticate("google", {
        session: true,
        successRedirect: `${process.env.CLIENT_URL}`,
        failureRedirect: "/login/failure",
    }),
    // (req, res) => {
    //     res.redirect(`${process.env.CLIENT_URL}`);
    // },
);

export default router;
