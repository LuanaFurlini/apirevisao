import express from "express"
import cors from "cors"

const app = express(); //instancia o framework

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let lista = ["dia", "arroz", "feliz", "triste"]

app.get("/todos",(req, res)=>{
    return res.status(200).json(lista);
})

app.post("/novo", (req, res)=>{
    const { palavra } = req.body
    lista.push(palavra)
})

app.listen(3000, ()=>{
    console.log("api no ar");
}); //listen coloca no ar