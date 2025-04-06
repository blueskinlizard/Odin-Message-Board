import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import indexRouter from "./routes/indexRouter.js";
const app = express();

const PORT = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


app.use(indexRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
