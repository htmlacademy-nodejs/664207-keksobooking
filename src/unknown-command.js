module.exports = {
  name: `wrongCommand`,
  description: `Shows the default message if a command doesn't exist`,
  execute(command) {
    console.error(`Неизвестная команда ${command}. Чтобы прочитать правила использования приложения, наберите "--help"`);
    process.exit(1);
  }
};
