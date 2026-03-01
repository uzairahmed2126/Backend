import express from 'express'
const router = express.Router()

// middleware that is specific to this router
const timeLog = (req, res, next) => {
    const date = new Date()
    console.log('Time: ', `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`)
    next()
}
router.use(timeLog)

// define the home page route
router.get('/', (req, res) => {
    res.send('Blog home page')
})
// define the about route
router.get('/about', (req, res) => {
    res.send('About Blog')
})
router.get("/blogpost/:slug", (req, res) => {
    res.send(`fetch the blogpost for ${req.params.slug}`)
})


export default router