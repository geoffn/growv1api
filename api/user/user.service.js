const UserPool = require("../../config/userdatabase");
const MOMENT = require("moment");

module.exports = {
    createUser: (data, callBack) => {

        UserPool.query(
            "insert into Users (Firstname, LastName, Address1, Address2, City, StateRegion, CountryId, AddressCode, Other, Latitude, Longitude,PhoneNumber,Password, PasswordDate, PasswordFailedAttempts, AllowPushNotications, AllowNewsLetter, AllowSMS, AllowEmail, CreateDate, ModifyDate, IsDeleted) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?); ",
            [
                data.FirstName,
                data.LastName,
                data.Address1,
                data.Address2,
                data.City,
                data.StateRegion,
                data.CountryId,
                data.AddressCode,
                data.Other,
                data.Latitude,
                data.Longitude,
                data.PhoneNumber,
                data.Password,
                MOMENT().format('YYYY-MM-DD  HH:mm:ss.000'),
                data.PasswordFailedAttempts,
                data.AllowPushNotications,
                data.AllowNewsLetter,
                data.ALLOWSMS,
                data.AllowEmail,
                MOMENT().format('YYYY-MM-DD  HH:mm:ss.000'),
                MOMENT().format('YYYY-MM-DD  HH:mm:ss.000'),
                false

            ],
            (errors, results, fields) => {
                if (errors) {
                    console.log(errors);
                    return callBack(errors);
                }
                return callBack(null, results);
            }
        )
    },

    getUsersAll: callBack => {

        UserPool.query(
            "select FirstName, LastName, Address1, Address2, City, StateRegion, CountryId, AddressCode, Other, Latitude, Longitude,PhoneNumber,AllowPushNotications, AllowNewsLetter, AllowSMS, AllowEmail, CreateDate from Users where IsDeleted=?",
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

    getUserById: (userId, callBack) => {
        UserPool.query(
            "select FirstName, LastName, Address1, Address2, City, StateRegion, CountryId, AddressCode, Other, Latitude, Longitude,PhoneNumber,AllowPushNotications, AllowNewsLetter, AllowSMS, AllowEmail, CreateDate from Users where UserId = ? and IsDeleted=?",
            [userId, false],
            (errors, results, fields) => {
                if (errors) {
                    console.log(errors);
                    return callBack(errors);
                }
                return callBack(null, results);
            }
        )
    }
}

