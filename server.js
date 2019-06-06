const app = require('./app');
const debug = require('debug')('app:server');
const db = require('./db');

module.exports = {
    start() {
        db(app);
        app.listen(process.env.APP_PORT, () => {
            debug(`Server is running on the port: ${process.env.APP_PORT}`);
        });
    }
};
