import { Router } from "express";
import { addMessage } from "../db";
const newMessageRouter = Router();

newMessageRouter.get("/new" , (req , res) => {
    res.render("newMessage")
})
newMessageRouter.post("/new" , (req , res) => {
    const { name , message } = req.body;
    addMessage(name , message)
    res.redirect("/")
})

export default newMessageRouter;