const mongoose = require("mongoose");

async function connectionMongoDB(url) {
    mongoose.connect(url).then(()=>{
  console.log("Mongodb conected")
}).catch((err)=>{
  console.log("Mongodb error",err);
})
}

module.exports = {
    connectionMongoDB,
};