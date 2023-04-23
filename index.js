const express = require("express");
const app = express();
const port = 8000;
const db = require("./config/mongoose");
const Task = require("./modals/task");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded());
app.use(express.static("assests"));

app.get("/", (req, res) => {
    Task.find({})
        .then((tasks) => res.render("home", { title: "Home Page", task_list: tasks }));
    // .catch((err) => console.log("there was an error while data from the database", err));
})



app.post("/create-task", (req, res) => {
    Task.create({
        desc: req.body.desc,
        category: req.body.category,
        date: req.body.date
    }).then((data) => {
        console.log(data);
        res.redirect("/");
    }).catch((err) => {
        console.log("There was a err while pushing the data in the database")
    })
})

app.get("/delete-task", (req, res) => {
    const id = req.query.id;

    Task.findByIdAndDelete(id)
        .then((data) => res.redirect("/"))
        .catch((err) => console.log("there was a error while deleting the task"));
})


app.listen(port, function (err) {
    if (err) {
        console.log("There was an express while running the server");
        return;
    }

    console.log("The server is running on port: ", port);
})

