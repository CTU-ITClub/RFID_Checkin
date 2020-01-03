/**
 * @author Daomtthuan
 * @email dao.mt.thuan@gmail.com
 * @create date 2020-01-03 17:19:21
 * @modify date 2020-01-03 17:19:21
 * @desc Messages for reciving and sending
 */

const hello = require("./hello");
const unknow = require("./unknow");

/**
 * Messages
 */
const messages = {
  unknow: unknow,
  hello: hello,
  hi: hello
};

module.exports = messages;
