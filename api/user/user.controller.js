const { createUser, getUsersAll, getUserById, updateUser, deleteUser } = require("./user.service");

module.exports = {
    createUser: (req, res) => {
        const userBody = req.body;
        createUser(userBody, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error creating record"
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Record Created"
            });

        });
    },

    getUsersAll: (req, res) => {
        getUsersAll((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Error getting active users"
                })
            };
            return (res.status(200).json({
                succee: 1,
                data: results
            }));
        });
    },

    getUserById: (req, res) => {
        const userId = req.params.id;

        getUserById(userId, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error getting user by id"
                });

            }
            return res.status(200).json({
                success: 0,
                data: results
            });
        });
    },

    updateUser: (req, res) => {
        const body = req.body;

        updateUser(body, (err, callBack) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error updating user"
                });

            }
            return res.status(200).json({
                success: 1,
                message: "User Updated"
            });
        });
    },

    deleteUser: (req, res) => {
        const UserId = req.params.id;

        deleteUser(UserId, (error, results) => {
            if (error) {
                return res.status(500).json({
                    success: 0,
                    message: "Error deleting user"
                });

            }
            return res.status(200).json({
                success: 1,
                message: "User Deleted"
            });
        })
    }

}