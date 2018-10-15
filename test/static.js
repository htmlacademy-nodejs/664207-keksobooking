const express = require(`express`);
const request = require(`supertest`);
const mockOffersRouter = require(`./mock-offers-router`);
const app = require(`express`)();
app.use(express.static(`static`));
app.use(`/api/offers`, mockOffersRouter);

describe(`Static resources should be in response`, () => {
  it(`Index html file is expected`, () => {
    return request(app)
        .get(`/`)
        .set(`Accept`, `text/html`)
        .expect(200)
        .expect(`Content-Type`, /html/);
  });

  it(`Styles should be in response`, () => {
    return request(app)
        .get(`/css/style.css`)
        .set(`Accept`, `text/css`)
        .expect(200)
        .expect(`Content-Type`, /css/);
  });

  it(`A picture should be in response`, () => {
    return request(app)
        .get(`/img/logo.png`)
        .set(`Accept`, `image/png`)
        .expect(200)
        .expect(`Content-Type`, /png/);
  });

  it(`Favicon is expected`, () => {
    return request(app)
        .get(`/favicon.ico`)
        .set(`Accept`, `image/x-icon`)
        .expect(200)
        .expect(`Content-Type`, /ico/);
  });
});
