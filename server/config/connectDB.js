const mongoose = require("mongoose")
const dotenv=require('dotenv')
dotenv.config()
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("database connected "))
.catch(err=>console.log(err))

// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.on("open", function() {
//   db.db.stats(function(err, stats) {
//     console.log(stats);
    
//   });
// });




// console.log("state",mongoose.connection.readyState);
// console.log("nbr",mongoose.connections);
// mongoose.runCommand(
//     {
//       connPoolStats: 1
//     }
//  )
// function getConnectionsNumber() {
//     return mongoose.connection.base.connections.length;
//     }
//    console.log("nbr",mongoose.connection.base.connections.length) ;