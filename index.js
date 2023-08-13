import mongoose from "mongoose";
import app from "./app";

import config from "./config/index";

(async () => {
  try {
    await mongoose.connect(config.MONGODB_URL);
    console.log("db connected");
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    const onListening = () => {
      console.log(`Listening on ${config.PORT}`);
    };
    app.listen(config.PORT, onListening);
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
})();
