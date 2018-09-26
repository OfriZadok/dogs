
let express = require("express");
const app = express();
app.listen('3000');

app.use(express.static(__dirname+'/public'))
app.use(express.static(__dirname+'/node_modules'))

app.get("/dogs", function (req, res) {
    res.send([
        { name: "Chiko", age: "10" },
        { name: "Tomas", age: "5" },
        { name: "Lilo", age: "11" },
        { name: "Ketem", age: "4" }
    ])
});
