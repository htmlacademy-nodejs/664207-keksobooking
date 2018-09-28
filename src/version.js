const packageInfo = require(`../package.json`);

module.exports = {
  name: `version`,
  description: `Shows the version of the application`,
  execute() {
    console.log(`v${packageInfo.version}`);
  }
};
