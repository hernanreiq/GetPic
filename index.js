const moongose = require('mongoose');

// Initializations
const app = require('./app');
const PORT = process.env.PORT || 3700;

moongose.Promise = global.Promise;
moongose.connect('mongodb://localhost:27017/getpic')
.then(() => {
    console.log('Database ready!');

    app.listen(PORT, () => {
        console.log('Server ready!');
    })
})
.catch(err => {
    console.log('Failed to connect to database:', err);
});