import { getAllMessages, getMessage } from "../db";
import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res) =>{
    res.render("index", { messages: getAllMessages() });
})
indexRouter.get("/message/:id", (req, res) =>{
    const id = req.params.id;
    res.render("individualMessage", {messageContent: getMessage(id)});
})

export default indexRouter;