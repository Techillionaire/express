const express = require("express")
const app = express()
const port = 4000;
const fs = require("fs")

const home = fs.readFileSync("./pages/index.html", "utf-8")

// importing the route for product
const productRouter = require("./routes/productRoute")

// app.get("/", (req, res) => {
//     res.send("welcome to home")
// })

app.get("/", (req, res) => {
    res.status(200)
    res.send(home)
})

// server will now  handle json data
app.use(express.json())

// using the product in the server
app.use(productRouter);



// app.get("/about", (req, res) => {
//     res.send("welcome to my about")
// })

// app.get("/project", (req, res) => {
//     res.send("welcome to my project")
// })

// app.get("/service", (req, res) => {
//     res.send("welcome to my service")
// })

// app.get("/contact", (req, res) => {
//     res.send("welcome to my contact")
// })

app.listen(port, () => {
    console.log(`server started successfully. click http://localhost:${port} to open website`)
})
