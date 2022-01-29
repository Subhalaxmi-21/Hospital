const mysql= require('mysql');
var express = require('express');
const bodyparser=require('body-parser')
var app = express();
var cors = require('cors');
const dotenv = require('dotenv').config()
var port =process.env.port || 3001;

// Pre config-----------------------------------------------
// cross-origin sharing
app.use(cors())

// api parsing json
app.use(express.json())

// to access  data from client
app.use(express.urlencoded({
    extended: true
}))


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))

// DB create connection
const db = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password :process.env.pswd,
    database : 'hospital'
});
// Check db connection
try{
    db.connect()
    console.log('Working',port);
}catch(err){console.log(err)}


// Main part of code-----------------------------------
app.post('/preg', async (req,res)=>{
    // console.log("HI");
    const id = req.body.id
    const name =req.body.name
    const pswd =req.body.pswd
    const phone=req.body.phone
    const email=req.body.email
    const sex=req.body.sex
    const age =req.body.age
    const blood=req.body.blood
    const sql= `insert into preg values ('${id}','${name}','${pswd}','${phone}','${email}','${sex}','${age}','${blood}');`

    db.query(sql,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(200)
        }
    })
})

// Post for login-------------------------------
app.post('/dlog',async (req,res)=>{
    const type=req.body.type
    const unique = req.body.unique
    const pswd =req.body.pswd
    
    if(type=='Patient'){
        const sql = `select name from preg where id='${unique}' and pswd='${pswd}'`
        db.query(sql,(err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                if(result.length>0){
                    res.json(result);
                }
                else{
                    res.send(500)
                }
                
            }
        })
    }


    if(type=='Doctor'){
        const sql = `select email from dreg where id='${unique}' and pswd='${pswd}'`
        db.query(sql,(err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                if(result.length>0){
                    res.json(result);
                }
                else{
                    res.send(500)
                }
                
            }
        })
    }
    
})

app.post('/dreg', async (req,res)=>{
    const id=req.body.id
    const email=req.body.email
    const pswd=req.body.pswd
    const phn=req.body.phn
    const lic=req.body.lic
    const spec=req.body.spec
    const hemail=req.body.hemail
    const hphn=req.body.hphn
    const hlic=req.body.hlic
    const hcity=req.body.hcity

    const sql= `insert into dreg values ('${email}','${pswd}','${phn}','${lic}','${spec}','${hemail}','${hphn}','${hlic}','${hcity}','${id}');`

    db.query(sql,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json()
        }
    })
})



app.listen(port, ()=> console.log("Listening at port ",port))