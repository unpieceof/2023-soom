import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/src/views");

console.log("hello");

app.listen(3000);