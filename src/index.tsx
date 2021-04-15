import React from "react";
import { render } from "react-dom";

(async () => {
  if (process.env.NODE_ENV === "development") {
    // Parcel 2 dev-server needs to process the url to the file
    // to be able to serve it.
    // https://github.com/parcel-bundler/parcel/issues/5430
    const url = require("url:../dist/mockServiceWorker.js");

    const { worker } = await import("./mocks/browser");
    await worker.start({ serviceWorker: { url } });
  }

  render(<h1>No HMR works!</h1>, document.getElementById("root"));
})();
