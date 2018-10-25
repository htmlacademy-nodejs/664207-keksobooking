module.exports = {
  Status: {
    OK: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404
  },
  contentType: {
    html: `text/html; charset=UTF-8`,
    css: `text/css`,
    js: `application/javascript`,
    ico: `image/x-icon`,
    jpg: `image/jpeg`,
    jpeg: `image/jpeg`,
    png: `image/png`,
    gif: `image/gif`
  },
  validateRules: {
    title: {
      min: 30,
      max: 140
    },
    price: {
      min: 1,
      max: 100000
    },
    address: {
      min: 0,
      max: 100
    },
    rooms: {
      min: 0,
      max: 1000
    },
    types: [`flat`, `house`, `bungalo`, `palace`],
    HHMMFormat: /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
  },

  Coord: {
    X_MIN: 300,
    X_MAX: 900,
    Y_MIN: 150,
    Y_MAX: 500
  },

  Price: {
    MIN: 1000,
    MAX: 1000000
  },

  Types: [`flat`, `palace`, `house`, `bungalo`],

  Room: {
    MIN_ROOM_COUNT: 0,
    MAX_ROOM_COUNT: 5
  },

  Guests: {
    MIN: 0,
    MAX: 100
  },

  Times: [`12:00`, `13:00`, `14:00`],

  Features: [
    `wifi`,
    `dishwasher`,
    `parking`,
    `washer`,
    `elevator`,
    `conditioner`
  ],

  PhotoUrls: [
    `http://o0.github.io/assets/images/tokyo/hotel1.jpg`,
    `http://o0.github.io/assets/images/tokyo/hotel2.jpg`,
    `http://o0.github.io/assets/images/tokyo/hotel3.jpg`
  ]
};
