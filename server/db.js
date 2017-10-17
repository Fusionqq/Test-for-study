const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/', { useMongoClient: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('moongose connecting');
});

const userSchema = new mongoose.Schema({
    login: String,
    password: String,
});

const modelU = mongoose.model('modelUser', userSchema);

module.exports.createUser = (login, password) => {
    modelU.create({login, password});
};
