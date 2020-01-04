const express = require("express");
const request = require("request");
const script = require("./script");

const router = express.Router();

/**
 * Send message to client
 * @param {string} id ID client
 * @param {string} text Content of message
 */
function send(id, text) {
  request({
    /** Api send message of Messenger */
    url: "https://graph.facebook.com/v2.6/me/messages",
    qs: {
      /** Access code token, get it at https://developers.facebook.com/apps/504492863527014/messenger/settings/*/
      access_token:
        "EAAHK1WXsGGYBAKwtrixva6KzgZBUKKvKAZB3S7ZCOZBCGFvaJxahkZBDvh2RWzzGrF8Jy8YyT4cZBRpV13SdtNkU7mdZBFrdAeNJBZCgko0Em1icTZAxWys6XG45nCS913q2H4BU0QSB9PZA2Ywvz9NgibZCBUV1fPwt773QrhXLlCgyoq02pDlcOUSPIpsUsF7rCoZD"
    },
    method: "POST",
    /** Message send in JSON type */
    json: {
      recipient: {
        id: id
      },
      message: {
        text: text
      }
    }
  });
}

// Authenticate
router.get("/", (req, res) => {
  if (req.query["hub.verify_token"] == "daomtthuan") {
    res.status(200).send(req.query["hub.challenge"]);
  } else {
    res.status(200).send("Error, wrong validation token");
  }
});

// Receive and analyze
router.post("/", (req, res) => {
  req.body.entry.forEach(entry => {
    entry.messaging.forEach(messaging => {
      if (messaging.message !== undefined) {
        if (messaging.message.text !== undefined) {
          const message = messaging.message.text.toLowerCase();
          send(messaging.sender.id, script[message] !== undefined ? script[message] : script.unknow);
        }
      }
    });
  });
  res.status(200).send("OK");
});

module.exports = router;