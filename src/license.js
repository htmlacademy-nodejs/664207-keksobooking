const packageInfo = require(`../package.json`);

module.exports = {
  name: `license`,
  description: `Shows the license of the application`,
  execute() {
    console.log(`v${packageInfo.license}`);
    process.exit(0);
  }
};
