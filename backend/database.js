const mongoose = require('mongoose');

mongoose.connect(  (process.env.NODE_ENV === 'development') ? process.env.MONGODB_URI :  process.env.MONGODB_URI_PRODUCTION , {
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));