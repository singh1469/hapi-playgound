'use strict';

const mongoose = require('mongoose');

/* const initHelper = {
    db: (() => {
        mongoose.connect(config.db.host);
        return mongoose;
    })()
}; */

const connect = (config) => {
    mongoose.connect(`mongodb://${config.db.host}:27017/app`)
        .then(db => db)
        .catch((err) => {
            setTimeout(() => connect(config), 500);
        });
    return mongoose;
};

module.exports = config => ({
    db: connect(config),
});
