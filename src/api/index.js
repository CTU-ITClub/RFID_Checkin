const students = require("./students");

const apis = [students];

/**
 * Activate api for app
 * @param {any} app nodejs app
 */
function activate(app) {
  apis.forEach(api => app.use(api.uri, api.router));
}

module.exports = { activate };