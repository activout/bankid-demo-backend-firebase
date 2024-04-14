const BankIdClientV6 = require("bankid").BankIdClientV6;

const logger = require("firebase-functions/logger");
const {onCall} = require("firebase-functions/v2/https");

const client = new BankIdClientV6({
  production: false,
  qrEnabled: false,
});

exports.auth = onCall(async (request) => {
  const data = request.data;
  logger.info("auth request", data);
  const result = await client.authenticate({
    endUserIp: request.rawRequest.ip,
  });
  logger.info("auth result", result);
  return {
    autoStartToken: result.autoStartToken,
    orderRef: result.orderRef,
  };
});

exports.sign = onCall(async (request) => {
  const data = request.data;
  logger.info("sign request", data);
  const result = await client.sign({
    endUserIp: request.rawRequest.ip,
    userVisibleData: "This is a demo from Activout AB.",
  });
  logger.info("sign result", result);
  return {
    autoStartToken: result.autoStartToken,
    orderRef: result.orderRef,
  };
});

exports.collect = onCall(async (request) => {
  const data = request.data;
  logger.debug("collect request", data);
  const result = await client.collect({orderRef: data.orderRef});
  if (result.status !== "pending") {
    logger.info("collect result", result);
  }
  // FYI
  // Serialize JSON to workaround issue with nested objects in Flutter client
  return JSON.stringify(result);
});

exports.cancel = onCall(async (request) => {
  const data = request.data;
  logger.debug("cancel request", data);
  try {
    await client.cancel({orderRef: data.orderRef});
  } catch (e) {
    console.error(e);
  }
  return {};
});
