require("dotenv").config() // load .env variables
const express = require("express") // import express
const morgan = require("morgan") //import morgan
const {log} = require("mercedlogger") // import mercedlogger's log function
const cors = require("cors") // import cors
const UserRouter = require("./routes/users") //import User Routes
const DepartmentRouter = require("./routes/department")

//DESTRUCTURE ENV VARIABLES WITH DEFAULT VALUES
const {PORT} = process.env

// Create Application Object
const app = express()

// GLOBAL MIDDLEWARE
app.use(cors()) // add cors headers
app.use(morgan("tiny")) // log the request for debugging
app.use(express.json()) // parse json bodies

//Adding Routes
app.use("/api/user", UserRouter) // send all "/user" requests to UserRouter for routing
app.use("/api/department", DepartmentRouter)

// Default Route
app.get("/", (req, res) => {
    res.send("Node Server is Up and Running ...")
})


// APP LISTENER
app.listen(PORT, () => log.green("SERVER STATUS", `Listening on port ${PORT}`))
