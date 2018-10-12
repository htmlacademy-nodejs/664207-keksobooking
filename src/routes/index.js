const offersRoute = require(`./offers`);
const {Router} = require(`express`);

const router = new Router();

router.get(`/`, (req, res) => res.send(`Hello World!`));

// API
router.get(`/api/offers`, offersRoute.all);
router.get(`/api/offers/:date`, offersRoute.date);
router.get(`/api/offers/:date/avatar`, offersRoute.avatar);

module.exports = router;
