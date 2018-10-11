const assert = require(`assert`);
const request = require(`supertest`);
const app = require(`../src/server`).getServer();

describe(`GET /api/offers`, function () {
  const expectedDataLength = 4;

  it(`Default JSON should be in response`, () => {
    return request(app)
        .get(`/api/offers`)
        .set(`Accept`, `application/json`)
        .expect(200)
        .expect(`Content-Type`, /json/)
        .then((response) => {
          const respnseData = response.body;
          assert.equal(respnseData.total, 20);
          assert.equal(respnseData.data.length, 20);
          assert.equal(Object.keys(respnseData.data[0]).length, expectedDataLength);
        });
  });

  it(`Custom limit query should be in response`, () => {
    return request(app)
        .get(`/api/offers?limit=10`)
        .set(`Accept`, `application/json`)
        .expect(200)
        .expect(`Content-Type`, /json/)
        .then((response) => {
          const respnseData = response.body;
          assert.equal(respnseData.total, 10);
          assert.equal(respnseData.data.length, 10);
          assert.equal(Object.keys(respnseData.data[0]).length, expectedDataLength);
        });
  });

  it(`Custom skip query should be in response`, () => {
    return request(app)
        .get(`/api/offers?skip=15`)
        .set(`Accept`, `application/json`)
        .expect(200)
        .expect(`Content-Type`, /json/)
        .then((response) => {
          const respnseData = response.body;
          assert.equal(respnseData.total, 5);
          assert.equal(respnseData.data.length, 5);
          assert.equal(Object.keys(respnseData.data[0]).length, expectedDataLength);
        });
  });

  it(`Custom skip and limit query should be in response`, () => {
    return request(app)
        .get(`/api/offers?skip=5&limit=8`)
        .set(`Accept`, `application/json`)
        .expect(200)
        .expect(`Content-Type`, /json/)
        .then((response) => {
          const respnseData = response.body;
          assert.equal(respnseData.total, 3);
          assert.equal(respnseData.data.length, 3);
          assert.equal(Object.keys(respnseData.data[0]).length, expectedDataLength);
        });
  });

  it(`Offer by date is expected`, () => {
    return request(app)
        .get(`/api/offers/121`)
        .expect(200)
        .expect(`Content-Type`, /json/);
  });

  it(`Offer's avatar by date is expected`, () => {
    return request(app)
        .get(`/api/offers/1519472613744/avatar`)
        .expect(200);
  });

  it(`404 - unknown address is expected`, () => {
    return request(app)
        .get(`/api/offersfes`)
        .set(`Accept`, `application/json`)
        .expect(404)
        .expect(`Content-Type`, /html/);
  });
});

describe(`POST /api/offers`, function () {
  it(`An offer should be saved`, () => {
    return request(app).post(`/api/offers`).
        send({
          name: `Pavel`,
          title: `Маленькая квартирка рядом с парком`,
          address: `102-0075 Tōkyō-to, Chiyoda-ku, Sanbanchō`,
          description: `Маленькая чистая квратира на краю парка. Без интернета, регистрации и СМС.`,
          price: 30000,
          type: `flat`,
          rooms: 1,
          guests: 1,
          checkin: `9:00`,
          checkout: `7:00`,
          features: [`elevator`, `conditioner`]
        }).
        expect(200, {
          name: `Pavel`,
          title: `Маленькая квартирка рядом с парком`,
          address: `102-0075 Tōkyō-to, Chiyoda-ku, Sanbanchō`,
          description: `Маленькая чистая квратира на краю парка. Без интернета, регистрации и СМС.`,
          price: 30000,
          type: `flat`,
          rooms: 1,
          guests: 1,
          checkin: `9:00`,
          checkout: `7:00`,
          features: [`elevator`, `conditioner`]
        });
  });

  it(`Form-data should be passed`, () => {
    return request(app).post(`/api/offers`).
        field(`name`, `Pavel`).
        field(`title`, `Маленькая квартирка рядом с парком`).
        expect(200, {
          name: `Pavel`,
          title: `Маленькая квартирка рядом с парком`,
        });
  });

  it(`Avater form-data should be passed`, () => {
    return request(app).post(`/api/offers`).
        field(`name`, `Pavel`).
        field(`title`, `Маленькая квартирка рядом с парком`).
        attach(`avatar`, `test/fixtures/keks.png`).
        expect(200, {
          name: `Pavel`,
          title: `Маленькая квартирка рядом с парком`,
        });
  });
});