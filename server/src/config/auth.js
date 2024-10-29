import GoogleStrategy from "passport-google-oauth2";
import "./dotenv.js";
import { pool } from "./database.js";

const options = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
};

const verify = async (accessToken, refreshToken, profile, done) => {
    const userData = profile._json;
    let user = {};

    try {
        const currentUserQuery = await pool.query(
            "SELECT * FROM users WHERE google_id = $1",
            [userData.sub],
        );
        if (currentUserQuery.rows.length > 0) {
            user = {
                user_id: currentUserQuery.rows[0].id,
                username: currentUserQuery.rows[0].username,
            };
        } else {
            const newUser = await pool.query(
                "INSERT INTO users (username, email, img, google_id) VALUES ($1, $2, 3$, $4) RETURNING id, username",
                [userData.name, userData.email, userData.picture, userData.sub],
            );
            user = {
                user_id: newUser.rows[0].id,
                username: newUser.rows[0].username,
            };
        }
        done(null, user);
    } catch (error) {
        done(error, false, error.message);
    }
};

export const Google = new GoogleStrategy(options, verify);