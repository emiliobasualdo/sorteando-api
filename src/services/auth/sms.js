const {infobip} = require("./../../../settings");
const axios = require('axios');
const url = "https://293e6.api.infobip.com/sms/2/text/single";

const send = (text, phoneNumber) => {
  const config = {
    headers: {
      Authorization: `App ${infobip.publicKey}`
    }
  };
  const data = {
    from: "Sorteando",
    to: phoneNumber,
    text: text
  };
  console.log(`Enviando a ${phoneNumber} ${text}`);
  /*axios.post(url,data, config)
    .then(r => console.log(r.data))
    .catch(e => console.log(e));*/
  
};

module.exports = {
  send,
};