import express from "express"

import ejs from "ejs"
import client from "./database.js"
const app = express();
app.use(express.json())
const port = process.env.PORT || 9000;

app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs");


app.get('/', (req, res) => {
    res.render("index")
})
// app.get('/users', async (req, res) => {
//     try {
//         const result = await client.query("SELECT * FROM users");
//         res.json(result.rows)
//     } catch (err) {
//         res.status(500).json({ error: err.message })
//     }
// })
app.post("/add-user", async (req, res) => {
    try {
        const { name, email } = req.body;

        const result = await client.query(
            "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
            [name, email]
        );
        // res.redirect("/users");
        // res.json(result.rows[0]);
        res.render("users", { users: result.rows });

    } catch (err) {
        res.status(500).json({ error: err.message || "insert error" });
    }
});

app.listen(port, () => {
    console.log("server listen port: ", port)
})