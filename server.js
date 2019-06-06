const app = require('./app');
const debug = require('debug')('app:server');

module.exports.start = () => {
    app.listen(process.env.APP_PORT, () => {
        debug(`Server is running on the port: ${process.env.APP_PORT}`);
    });
};