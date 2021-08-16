const mongoose = require('mongoose');

const {DB_HOST, MONGODB_DB} = process.env;
const URI = `mongodb://${DB_HOST}/${MONGODB_DB}`;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex : true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(db => console.log('DB esta conectada'))
    .catch(err => console.log(err));
 