const [ arg ] = process.argv.slice(2);

if (arg === '--version') {
  console.log('v0.0.1');
  process.exit(0);
}

if (arg === '--help') {
  console.log('Доступные команды:');
  console.log('--help — печатает этот текст');
  console.log('--version — печатает версию приложения)');
  process.exit(0);
}

if (!arg) {
  console.log('Привет пользователь!');
  console.log('Эта программа будет запускать сервер Keksobooking.');
  console.log('Автор: Кекс.');
  process.exit(0);
}

console.log(`Неизвестная команда ${arg}.`);
console.error(`Чтобы прочитать правила использования приложения, наберите "--help"`);
process.exit(1);
