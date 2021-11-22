const express = require("express");
const router = express.Router();
const { landingPageController } = require("../controllers/main_controller");

//landing page
router.get("/", landingPageController);

module.exports = router;