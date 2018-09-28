const packageInfo = require(`../package.json`);

module.exports = {
  name: `Empty`,
  description: `Shows the description if there's no any other parameters`,
  execute() {
    console.log(`Привет ${packageInfo.author}! Эта программа будет запускать сервер «${packageInfo.name}».`);
  }
};
