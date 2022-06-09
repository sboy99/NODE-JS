const os = require("os");
const OS_RELEASE = os.release();
const OS_VERSION = os.version();
const USER = os.userInfo();
const UP_TIME = os.uptime();
module.exports = { OS_RELEASE, OS_VERSION, USER, UP_TIME };
