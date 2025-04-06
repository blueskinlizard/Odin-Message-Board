import { getAllMessages, getMessage } from "../db.js";
import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res) =>{
    res.render("index", { messages: getAllMessages() });
})
indexRouter.get("/message/:id", (req, res) =>{
    const id = parseInt(req.params.id, 10);
    res.render("individualMessage", {messageContent: getMessage(id)});
})

export default indexRouter;