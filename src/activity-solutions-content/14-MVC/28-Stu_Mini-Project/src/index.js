const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const session = require("express-session");
const connectSessionSequelize = require("connect-session-sequelize");

const routes = require("./routes");
const connection = require("./config/connection");
const helpers = require("./helpers");

const PORT = process.env.PORT || 3000;

const SequelizeStore = connectSessionSequelize(session.Store);

const app = express();
const hbs = exphbs.create({ helpers });

const sessionOptions = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 3600 * 1000,
  },
  resave: false,
  saveUninitialized: false,
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
    console.log("[INFO]: DB connection successful");

    app.listen(PORT, () => console.log(`Navigate to http://localhost:${PORT}`));
  } catch (error) {
    console.log(`[ERROR]: DB connection failed | ${error.message}`);

    process.exit(0);
  }
};

init();
