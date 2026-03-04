
import express from 'express'
import ejs from "ejs"
const router = express.Router()

express().set("view engine", ejs)

// define the home page route
router.get('/render-html', (req, res) => {
    const data = [{ a: "asdfadsf", b: "afasdf", c: "adsfasdf" }]
    res.render("index", { data: data })
})



export default router