const { getFoodBankAll, createFoodBank, getFoodBankById } = require("./foodBank.service");


module.exports = {
    getFoodBankAll: (req, res) => {
        getFoodBankAll((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Error getting all from db"
                });

            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },

    createFoodBank: (req, res) => {
        const body = req.body;
        createFoodBank(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error creating in db"
                });
            }
            return res.status(200).json({
                success: 0,
                message: "inserted"
            });
        });
    },

    getFoodBankById: (req, res) => {
        const id = req.params.id;
        getFoodBankById(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Error getting food bank by id"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    }

}
