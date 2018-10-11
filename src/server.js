const express = require(`express`);
const config = require(`./config`);
const routes = require(`./routes`);
const bodyParser = require(`body-parser`);

const HOSTNAME = `127.0.0.1`;
const PORT = process.argv[3] || config.server.port;
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

app.use(express.static(`static`));
app.use(`/`, routes);

module.exports = {
  name: `server`,
  description: `Start a local server`,
  execute() {
    app.listen(PORT, HOSTNAME, (err) => {
      if (err) {
        return console.error(err);
      }
      return console.log(`The server has been started on http://${HOSTNAME}:${PORT}`);
    });
  },
  getServer() {
    return app;
  }
};