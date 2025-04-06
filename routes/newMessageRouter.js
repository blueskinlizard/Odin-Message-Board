import { Router } from "express";
import { addMessage } from "../db.js";
const newMessageRouter = Router();

newMessageRouter.get("/new" , (req , res) => {
    console.log("Arrived at new message endpoint");
    res.render("newMessage")
})
newMessageRouter.post("/new" , (req , res) => {
    const {message, name} = req.body;
    addMessage(message, name)
    res.redirect("/")
})

export default newMessageRouter;