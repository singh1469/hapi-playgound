'use strict'

module.exports = mongoose => {
    const types = mongoose.Schema.Types;
    let schema = new mongoose.Schema(
        {
            forename: {
                type: types.String,
                allowNull: true,
                default: ''
            },
            surname: {
                type: types.String,
                allowNull: true,
                default: ''
            },
            username: {
                type: types.String,
                lowercase: true,
                allowNull: true,
                default: ''
            },
            password: {
                type: types.String,
                allowNull: true,
                default: ''
            },
            date: {
                type: types.Date,
                default: () => {
                    return Date.now()
                }
            },
        },
        {
            collection: 'users'
        });

    return schema;
};
