const express = require("express");
const {
    requestAPI,
    requestOne,
} = require("../controllers/multiple_main_controller");
const router = express.Router();
router.get("/", requestAPI, requestOne);
module.exports = router;

//localhost:3002/multi/?name=apple,mango,banana