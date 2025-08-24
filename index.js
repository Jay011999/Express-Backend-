const express = require("express");
const {connectionMongoDB} = require("./connection");

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const url = require("./model/url")
const path = require("path")

const app = express();

MONGO_URI="mongodb://127.0.0.1:27017/urlshortener";

connectionMongoDB(MONGO_URI);

app.set("view engine","ejs");
app.set('views', path.resolve("./views"));

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use("/url", urlRoute);
app.use("/", staticRoute)

app.get('/url/:shortid',async (req,res)=>{
   const shortId = req.params.shortid;
   const entry= await url.findOneAndUpdate({
        shortId
   }, {
    $push:{
      visitHistory: { timestamp:Date.now()}
    }
   })
   res.redirect(entry.redirectURL);
  })

app.get("/test", async(req, res)=>{
   const allUrls = await url.find({});
   return res.render('home', {urls: allUrls})
})


app.listen(8001, () => {
  console.log("server started");
});
