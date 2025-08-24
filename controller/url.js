const {nanoid} = require("nanoid");
const URL = require('../model/url')

async function handlegenerateNewShortURL(req, res) {
    const body= req.body;
    if(!body.url) return res.status(400).json({error: 'url is reqiured'})
    const shortID = nanoid(8);
     await URL.create({
        shortId: shortID,
        redirectURL:body.url,
        visitHistory:[], 
     })   

    return res.render('home', {
        id: shortID
    }) 
    // return res.json({id: shortID}); 
}


module.exports= {
    handlegenerateNewShortURL
}
