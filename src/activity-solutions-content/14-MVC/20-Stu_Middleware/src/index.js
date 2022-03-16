const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const path = require("path");
const connectSessionSequelize = require("connect-session-sequelize");

const routes = require("./routes");
const connection = require("./config/connection");
const helpers = require("./helpers");

// move in memory store to persistent sequelize DB
const SequelizeStore = connectSessionSequelize(session.Store);

const hbs = exphbs.create({ helpers });
const app = express();

const PORT = process.env.PORT || 3001;

const sessionOptions = {
  secret: "Super secret secret",
  resave: false,
  saveUninitialized: false,
  cookies: {
    maxAge: 3600 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  store: new SequelizeStore({
    db: connection,
  }),
};

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(session(sessionOptions));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const init = async () => {
  try {
    await connection.sync({ force: false });

    console.log(`[INFO]: DB connection successful`);

    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error(`[ERROR]: DB connection failed | ${error.message}`);
  }
};

init();
