import express from "express"
import blog from "./routes/blog.js"
import about from "./routes/about.js"
const app = express();



const port = process.env.PORT || 9000;
app.use('/blog', blog)
app.use('/about',about)
app.get("/", (req, res) => {
    // res.send("Hello world");
    res.json({ a: "asdf", b: "adfasdfasdf", payload: { a: "asdfasdf", b: "asdfasd" } })
})
const val= null;
const isvalid = !!val;
console.log(isvalid)
app.listen(port, () => {
    console.log("server listen port: ", port)
})