const landingPageController = (req, res) => {
    res.status(200).json({
        data: "Hello",
    });
};

module.exports = {
    landingPageController,
};