export function enableMSW() {
  if (typeof window === "undefined") {
    const { server } = require("./configs/server");
    server.listen();
  } else {
    const { worker } = require("./configs/browser");
    worker.start();
  }
}
