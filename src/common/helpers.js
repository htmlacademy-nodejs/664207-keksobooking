const names = [
  `Keks`,
  `Pavel`,
  `Nikolay`,
  `Alex`,
  `Ulyana`,
  `Anastasyia`,
  `Julia`];

const getRandomNumber = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const isNumber = (number) => typeof number === `number` && isFinite(number);

const getRandomUniqArray = (sourceItems, length) => {
  let resultItems = [];

  for (let i = 0; i < length; i++) {
    const randomElement = sourceItems[getRandomNumber(0, sourceItems.length - 1)];

    if (!resultItems.includes(randomElement)) {
      resultItems.push(randomElement);
    }
  }

  return resultItems;
};

const getRandomName = () => names[getRandomNumber(0, names.length - 1)];
const asyncHelper = (fn) => (req, res, next) => fn(req, res, next).catch(next);

module.exports.getRandomNumber = getRandomNumber;
module.exports.isNumber = isNumber;
module.exports.getRandomName = getRandomName;
module.exports.getRandomUniqArray = getRandomUniqArray;
module.exports.asyncHelper = asyncHelper;
