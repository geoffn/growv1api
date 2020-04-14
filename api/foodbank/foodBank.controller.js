const { getFoodBankAll } = require("./foodBank.service");


module.exports = {
    getFoodBankAll: (req, res) => {
        getFoodBankAll((err, results) => {
            res.status(200).json({
                message: "Success Get ALL"
            });
        });
    }
}