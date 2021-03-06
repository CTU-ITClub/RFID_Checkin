import request = require("request");

/** Messenger chatbot */
const Messenger = {
  /**
   * Send message to client
   * @param {string} id ID client
   * @param {string} text Content of message
   */
  sendText: (id: string, text: string): void => {
    request({
      /** Api send message of Messenger */
      url: "https://graph.facebook.com/v2.6/me/messages",
      qs: {
        /** Access code token, get it at https://developers.facebook.com/apps/504492863527014/messenger/settings/*/
        access_token:
          "EAAHK1WXsGGYBAIHYrVz5aS1MyDI1oc2wijzxyFQr1piGHiyP15YZACYcBuyqpIddMVd8e6SKxLL245IF7cpqnu56rs10mzAho5b9eWIBUcYogSgoCBWEdkBfAWHT1RGepzFk5ZAaVNNpHBDTvQYvjTORoyY1ivom15T2nZAULGJxvZBsxzzcchNHYlMapx0ZD"
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
};

export = Messenger;
