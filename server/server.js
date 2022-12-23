const express = require("express")
const app = express()
// require("dotenv").config()
require("./config/connectDB")
app.use(express.json())
const cors=require("cors")
app.use(cors("http://localhost:3000"))

// app.use('/uploads',express.static('./uploads'))
app.use('/uploads',express.static('./uploads'))
// routes
app.use("/api/v1/users",require("./routes/userRoutes"))
app.use("/api/v1/posts",require("./routes/postRoutes"))
//

app.listen(process.env.PORT,()=>console.log(`server is running on port ${process.env.PORT}`))