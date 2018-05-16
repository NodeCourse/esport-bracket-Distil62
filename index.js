const express = require("express");
const bodyParser = require('body-parser')
const Database = require('./database.js');
const app = express();

const PORT = 8777;

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'pug');
app.use(express.static('public'))

app.get("/", (req, res) => {
    Database.getAllArticles((data)=>{
        Database.getAllResponse((responses) => {
            res.render("index", {data : data, resp : responses});
        })
    })
});

app.get("/index", (req, res) => {
    Database.getAllArticles((data)=>{
        Database.getAllResponse((responses) => {
            res.render("index", {data : data, resp : responses});
        })
    })
});

app.get("/write", (req, res) => {
    res.render("write");
});

app.post("/add", (req, res)=> {
    Database.createArticle(req.body);
    res.redirect("/");
});

app.post("/ask", (req, res)=>{
    Database.createResponse(req.body);
    res.redirect("/");
})

app.listen(PORT, console.log("The server is listen on http://localhost:" + PORT));