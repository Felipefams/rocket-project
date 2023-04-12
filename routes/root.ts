import express from "express";
const router = express.Router();

const root = 
router.get("^/$/index(.html)?", (req, res) =>{
    res.sendFile(__dirname);
});

export default root;