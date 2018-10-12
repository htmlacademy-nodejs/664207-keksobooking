const {
  Coord,
  Price,
  Types,
  Room,
  Guests,
  Times,
  Features,
  PhotoUrls
} = require(`../common/constants`);
const {getRandomNumber, getRandomUniqArray} = require(`../common/helpers`);

const titles = [
  `Большая уютная квартира`,
  `Маленькая неуютная квартира`,
  `Огромный прекрасный дворец`,
  `Маленький ужасный дворец`,
  `Красивый гостевой домик`,
  `Некрасивый негостеприимный домик`,
  `Уютное бунгало далеко от моря`,
  `Неуютное бунгало по колено в воде`
];

const generateLocation = () => {
  return {
    x: getRandomNumber(Coord.X_MIN, Coord.X_MAX),
    y: getRandomNumber(Coord.Y_MIN, Coord.Y_MAX)
  };
};

module.exports.generateLocation = generateLocation;

module.exports.generateEntity = (i) => {
  const coords = generateLocation();
  const time = Times[getRandomNumber(0, Times.length - 1)];

  return {
    author: {
      avatar: `https://robohash.org/${i}`
    },
    offer: {
      title: titles[i],
      address: `${coords.x}, ${coords.y}`,
      price: getRandomNumber(Price.MIN, Price.MAX),
      type: Types[getRandomNumber(0, Types.length - 1)],
      rooms: getRandomNumber(Room.MIN_ROOM_COUNT, Room.MAX_ROOM_COUNT),
      guests: getRandomNumber(Guests.MIN, Guests.MAX),
      checkin: time,
      checkout: time,
      features: getRandomUniqArray(
          Features,
          getRandomNumber(0, Features.length - 1)
      ),
      description: ``,
      photos: [...PhotoUrls.sort(() => getRandomNumber(-1, 1))]
    },
    location: coords,
    date: Date.now()
  };
};
