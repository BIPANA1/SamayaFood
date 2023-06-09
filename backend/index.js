import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "bipana123",
    database:"menu"
})

app.use(express.json())
app.use(cors())


app.get("/", (req,res)=>{
    res.json("Hello this is backend") 
})

app.get("/book", (req,res)=>{
    const q ="SELECT * FROM items"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/book", (req,res)=>{
    const q = "INSERT INTO items(`name`,`price`,`cover`) VALUES (?)"
    const values =[
        req.body.name,
        req.body.price,
        req.body.cover,
    ];
    

    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err);
        return res.json("Menu successfully added");
    });
});
app.delete("/book/:id", (req,res) => {
    const bookId =req.params.id;
    const q="DELETE FROM items WHERE id= ?";

    db.query(q,[bookId], (err,data)=>{
        if(err) return res.json(err);
        return res.json("Menu successfully deleted");
    });
});

app.put("/book/:id", (req,res) => {
    const bookId =req.params.id;
    const q="UPDATE items SET `name` = ?, `price` = ?, `cover` = ? WHERE id = ?";

    const values=[
        req.body.name,
        req.body.price,
        req.body.cover,
    ]

    db.query(q,[...values,bookId], (err,data)=>{
        if(err) return res.json(err);
        return res.json("Menu successfully Updated.");
    });
});


app.listen(8800, ()=>{ 
    console.log("Connected to backend!!!");
});