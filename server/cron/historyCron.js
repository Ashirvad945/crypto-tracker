import cron from "node-cron";
import { saveHistory } from "../controllers/coinController.js";

cron.schedule('0 * * * *', async () => {
  console.log("⏱ Running cron job to save history data...");
  await saveHistory();
});
