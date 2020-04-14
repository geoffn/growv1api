const foodBankPool = require("../../config/foodBankDatabase");
const MOMENT = require("moment");

//FoodBankParentId,FoodBankName,Address1,Address2,City,StateRegion,CountryId,addressCode,Other,Latitude,Longitude,
//CreateDate,ModifyDate,IsDeleted

module.exports = {

    getFoodBankAll: callBack => {
        foodBankPool.query(
            "select FoodBankParentId, FoodBankName, Address1, Address2, City, StateRegion, CountryId, addressCode, Other, Latitude, Longitude, CreateDate, ModifyDate, IsDeleted from FoodBank;",
            [],
            (errors, results, fields) => {
                if (errors) {
                    return callBack(errors);
                }

                return callBack(null, results);

            }
        )

    },

    createFoodBank: (data, callBack) => {
        //if parentid is not provided then set to 0
        if (!data.FoodBankParentId) {
            data.FoodBankParentId = 0;
        }
        console.log("inside creategoodbank");

        foodBankPool.query(
            "insert into FoodBank (FoodBankParentId, FoodBankName, Address1, Address2, City, StateRegion, CountryId, addressCode, Other, Latitude, Longitude, CreateDate, ModifyDate, IsDeleted) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [
                data.FoodBankParentId,
                data.FoodBankName,
                data.Address1,
                data.Address2,
                data.City,
                data.StateRegion,
                data.CountryId,
                data.addressCode,
                data.Other,
                data.Latitude,
                data.Longitude,
                MOMENT().format('YYYY-MM-DD  HH:mm:ss.000'),
                MOMENT().format('YYYY-MM-DD  HH:mm:ss.000'),
                true
            ],
            (errors, results, fields) => {
                if (errors) {
                    return callBack(errors)
                }
                return callBack(null, results)

            }
        )
    }

}


