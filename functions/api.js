const app = require("../index");
const serverless = require("serverless-http");
exports.handler = serverless(app);
