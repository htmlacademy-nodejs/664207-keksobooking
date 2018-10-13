const packageInfo = require(`../../package.json`);

module.exports = {
  name: `description`,
  description: `Shows the description of the application`,
  execute() {
    console.log(packageInfo.description);
    process.exit(0);
  }
};
