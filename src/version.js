const packageInfo = require(`../package.json`);

module.exports = {
  name: `version`,
  description: `Shows the version of the application`,
  execute() {
    const versionColors = [`red`, `green`, `blue`];
    const versionParts = packageInfo.version.split(`.`);

    process.stdout.write(`v`);
    versionParts.map((versionPart, index) => {
      const coloredPart = versionPart[versionColors[index]];
      process.stdout.write(coloredPart);
      if (index < versionParts.length - 1) {
        process.stdout.write(`.`);
      }
    });

    process.exit(0);
  }
};
