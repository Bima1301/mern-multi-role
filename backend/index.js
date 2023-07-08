import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import passport from "./config/Pasport.js";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import ProfileRoute from "./routes/ProfileRoute.js";

dotenv.config();

const app = express();
const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: { secure: "auto" }, // true for https, false for http
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(UserRoute);
app.use(AuthRoute);
app.use(ProfileRoute);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}...`);
});
