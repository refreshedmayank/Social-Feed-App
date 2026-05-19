const express = require('express');
const multer = require('multer');
const app = express();
const Feedmodel = require('./models/feed.model');
const Uploadfile = require("./services/storage.services");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const upload = multer({storage: multer.memoryStorage()});
app.post('/create-post', upload.single('Image'), async(req, res)=>{
const Buffer = req.file.buffer;
const Caption = req.body.Caption;
const result = await Uploadfile(Buffer);
await Feedmodel.create({
    Image: result.url,
    Caption: Caption,
})
res.status(201).json({message: "Post Created Successfully"});})
app.get("/feed", async(req,res)=>{
   const posts = await Feedmodel.find()
   res.status(200).json(
    {
        message: "Posts fetched successfully",
        posts: posts,
    }
   );
});

module.exports = app;

