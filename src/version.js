const colors = require(`colors/safe`);
const packageInfo = require(`../package.json`);

module.exports = {
  name: `version`,
  description: `Shows the version of the application`,
  execute() {
    const versionColors = [`red`, `green`, `blue`];
    const versionParts = packageInfo.version.split(`.`);

    process.stdout.write(`v`);
    versionParts.map((versionPart, index) => {
      const coloredMethod = colors[versionColors[index]].bind(colors);
      process.stdout.write(coloredMethod(versionPart));
      if (index < versionParts.length - 1) {
        process.stdout.write(`.`);
      }
    });
  }
};
