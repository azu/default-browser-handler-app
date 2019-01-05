import { app } from "electron";
import * as path from "path";

const logger = require("electron-log");
logger.transports.file.level = "silly";
// const isDevelopment = true;
// register https? protocol
const SCHEMES = ["http"];
SCHEMES.forEach(scheme => {
    app.setAsDefaultProtocolClient(scheme);
});
console.log("register", SCHEMES);
app.on("open-url", function(event, url) {
    const script = path.join(__dirname, "/lib/handler.js");
    delete require.cache[script];
    const handler = require(script);
    handler(event, url, {
        log: logger.verbose,
        info: logger.info,
        warn: logger.warn,
        error: logger.error,
        debug: logger.debug
    });
});
