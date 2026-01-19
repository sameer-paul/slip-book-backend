import { app } from "./app.js";
import { ENV } from "./utils/env.js";
import { connectDB } from "./db/connectDB.js";

connectDB()
  .then(() => {
    app.listen(ENV.PORT || 8000, () => {
      console.log(`Server is running at port ${ENV.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed !!!", err);
  });
