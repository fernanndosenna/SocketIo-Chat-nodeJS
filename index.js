var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

//settings
io.on("connection", socket => {
    
    //quando socket se disconectar da aplicacao 
    socket.on("disconnect", () => {
        console.log("X desconectou: " + socket.id);
    })

    //capturando algum evento com o nome msg do front end
    socket.on("msg", data => {
        io.emit("showmsg", data);
        console.log(data);
    })
})


app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.render("index");
})


const port = 8080
http.listen(port,'0.0.0.0', () => {
    console.log(`app rodando na ${port}`)
})