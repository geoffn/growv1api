
This is create
[
    "FoodBankName": "FoodbankTest",
        "Address1": "1212 some street",
            "Address2": null,
                "City": "Bellingham",
                    "StateRegion" : "WA",
                        "CountryId" : "01",
                            "addressCode" : "98229",
                                "Other" : null,
                                    "Latitude" : null,
                                        "Longitude" : null
]

update
{
    "FoodBankId" : 5
    "FoodBankName": "FoodbankTestUYpdated",
        "Address1": "1212 some street",
            "Address2": null,
                "City": "Bellingham",
                    "StateRegion" : "WA",
                        "CountryId" : "01",
                            "addressCode" : "98229",
                                "Other" : null,
                                    "Latitude" : null,
                                        "Longitude" : null

}


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
    Date(),
    Date(),
    true


insert into FoodBank(FoodBankParentId, FoodBankName, Address1, Address2, City, StateRegion, CountryId, addressCode, Other, Latitude, Longitude, CreateDate, ModifyDate, IsDeleted values
    (0, 'FoodbankTest', '1212 some street', NULL, 'Bellingham', 'WA', '01', '98229',
        NULL, NULL, NULL, '2020-04-14  16:05:51.000', '2020-04-14  16:05:51.000', true)