const mongoose = require('mongoose');

const connection = mongoose.connect(process.env.dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;