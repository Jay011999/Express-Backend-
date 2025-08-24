const express = require("express");
const router = express.Router();

// router.post('/', handlegenerateNewShortURL);

router.get('/', (req, res)=>{
    return res.render("home")
})

module.exports = router;