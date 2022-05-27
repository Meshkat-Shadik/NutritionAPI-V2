const axios = require("axios");

const requestAPI = async(req, res, next) => {
    const names = req.query.name.split(",");
    req.names = names;
    next();
};

const requestOne = async(req, res) => {
    console.log("Req ashtese = " + req.names);

    let reqArr = [];

    for (let i = 0; i < req.names.length; i++) {
        reqArr.push(
            axios.get(
                "https://nutritionapiv2.herokuapp.com/test/q?name=" + req.names[i]
            )
        );
    }

    for (let i = 0; i < reqArr.length; i++) {}
    let concatedArr = [];
    axios
        .all(reqArr.map((e) => e))
        .then(
            axios.spread((...responses) => {
                for (let i = 0; i < responses.length; i++) {
                    concatedArr.push(responses[i].data);
                }
                console.log(concatedArr);
                res.status(200).send(concatedArr);
            })
        )
        .catch((errors) => {
            // react on errors.
        });
};

module.exports = {
    requestOne,
    requestAPI,
};