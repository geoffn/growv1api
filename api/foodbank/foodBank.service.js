const foodBankPool = require("../../config/foodBankDatabase");
const MOMENT = require("moment");

//FoodBankParentId,FoodBankName,Address1,Address2,City,StateRegion,CountryId,addressCode,Other,Latitude,Longitude,
//CreateDate,ModifyDate,IsDeleted

module.exports = {

    getFoodBankAll: callBack => {
        foodBankPool.query(
            "select FoodBankId, FoodBankParentId, FoodBankName, Address1, Address2, City, StateRegion, CountryId, addressCode, Other, Latitude, Longitude, CreateDate, ModifyDate, IsDeleted from FoodBank where IsDeleted = ?;",
            [false],
            (errors, results, fields) => {
                if (errors) {
                    console.log(errors);
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
                false
            ],
            (errors, results, fields) => {
                if (errors) {
                    return callBack(errors)
                }
                return callBack(null, results)

            }
        )
    },

    getFoodBankById: (id, callBack) => {
        foodBankPool.query(
            "select FoodBankParentId, FoodBankName, Address1, Address2, City, StateRegion, CountryId, addressCode, Other, Latitude, Longitude, CreateDate, ModifyDate, IsDeleted from FoodBank where FoodBankId = ?;",
            [id],
            (errors, results, fields) => {
                if (errors) {
                    return callBack(errors);
                }
                return callBack(null, results);
            }
        )
    },

    deleteFoodBank: (id, callBack) => {
        foodBankPool.query(
            "update FoodBank set IsDeleted = ?, ModifyDate = ?  where FoodBankId = ?",
            [
                true,
                MOMENT().format('YYYY-MM-DD  HH:mm:ss.000'),
                id
            ],
            (errors, results, fields) => {
                if (errors) {
                    return callBack(errors);
                }
                return callBack(null, results);
            }
        )
    },

    updateFoodBank: (data, callBack) => {
        foodBankPool.query(
            "update FoodBank set FoodBankName = ?, Address1 = ?, Address2 = ?, City = ?, StateRegion = ?, CountryId = ?, addressCode = ?, Other = ?, Latitude = ?, Longitude = ?,  ModifyDate = ?  where FoodBankId = ? ",
            [
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
                data.FoodBankId
            ],
            (errors, results, fields) => {
                if (errors) {
                    return callBack(errors);
                }
                return callBack(null, results);
            }
        )
    }
}



