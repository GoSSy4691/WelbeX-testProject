const express = require("express");
const itemsRouter = require("./routes/items.routes");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use("/api", itemsRouter);

app.listen(PORT, () => console.log(`server is working on ${PORT}`));
