const express = require("express");
const { requestAPI } = require("../controllers/main_controller");
const router = express.Router();

//hit with a fruit name
router.get("/:name", requestAPI);
module.exports = router;