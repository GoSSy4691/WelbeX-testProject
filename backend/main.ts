import express, { json } from "express";
import cors from "cors";
import itemsRouter from "./routes/items.routes";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/api", itemsRouter);

app.listen(PORT, () => console.log(`server is working on ${PORT}`));
