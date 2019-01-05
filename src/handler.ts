import * as child_process from "child_process";

module.exports = (_event: Event, url: string, console: Console) => {
    console.log("Handle", url);
    child_process.spawn(`open`, ["-a", "Firefox", url]);
    console.log("Opened", url);
};
