const packageInfo = require(`../../package.json`);

module.exports = {
  name: `author`,
  description: `Shows the author of the application`,
  execute() {
    console.log(packageInfo.author);
    process.exit(0);
  }
};
