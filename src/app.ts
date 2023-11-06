import express, { Application } from "express";
import router from "./routes";

const app: Application = express();
const port: number = Number(process.env.PORT) || 3000;

app.use("/", router);

app.use("/", router);
app.use("/", router);
app.use("/", router);
app.use("/", router);
app.use("/", router);

app.use((req, res) => {
  return res.send("Not Found");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
