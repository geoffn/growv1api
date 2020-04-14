const foodBankPool = require("../../config/foodBankdatabase");

module.exports = {

    getFoodBankAll: callBack => {
        foodBankPool.query(
            "select * from FoodBank;",
            [],
            (errors, results, fields) => {
                if (errors) {
                    return callBack(errors);
                }

                callBack(null, results);

            });

    }
}
