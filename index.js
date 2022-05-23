const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mainHandler = require("./routes/main_handler");
const landingPageHandler = require("./routes/landing_page_handler");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();
const port = process.env.PORT || 3002;

app.use("/", landingPageHandler);
app.use("/test", mainHandler);
app.use(errorHandler);
//default error handler
function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ error: err, message: err.message });
}

app.listen(port, () => {
    console.log("App listening at port " + port);
});