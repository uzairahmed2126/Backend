import express from 'express'
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
    res.send('about home page')
})
// define the about route
router.get('/about', (req, res) => {
    res.send('About page')
})
router.get("/aboutslug/:slug", (req, res) => {
    res.send(`fetch the blogslug for ${req.params.slug}`)
})


export default router