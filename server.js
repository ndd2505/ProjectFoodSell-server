
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')


const serverorder = require('./server-order')
const servercustomer = require('./server-customer')
const serverproduct = require("./server-product")
const serveruser = require("./server-user")
const serveraccount = require("./server-account")
const serverchart = require("./server-chart")

app.use(bodyParser.urlencoded({extended: false}))

app.use(morgan("short"))
//homepage

//account
app.post('/loginadmin',bodyParser.json() ,(req,res)=>{
    serveraccount.loginadmin(req,res)
})
app.post('/logincus',bodyParser.json() ,(req,res)=>{
    serveraccount.logincus(req,res)
})

app.get('/logout', (req,res)=>{
    serveraccount.logout(req,res)
})

app.get('/confirmEmail/:email', (req,res)=>{
    serveraccount.confirmEmail(req,res)
})

app.get('/confirmUsername/:username', (req, res)=>{
    serveraccount.confirmUsername(req, res)
})

app.get('/confirmSignUpEmail/:email', (req,res)=>{
    serveraccount.confirmPhone(req, res)
})
app.get('/confirmSignUpUsername/:username', (req,res)=>{
    serveraccount.confirmPhone(req, res)
})
app.get('/confirmPhone/:phone', (req,res)=>{
    serveraccount.confirmPhone(req, res)
})

app.post('/changeforgot', bodyParser.json(), (req, res)=>{
    serveraccount.changeforgot(req,res)
})

app.post('/confirmpassword', bodyParser.json(), (req,res)=>{
    serveraccount.confirmpassword(req,res)
})

app.post('/passwordchangelogin', bodyParser.json(), (req,res)=>{
    serveraccount.changepasswordlogin(req,res)
})
//user
app.get('/users', (req,res)=>{
    serveruser.users(req,res)
})
app.post('/add-user',bodyParser.json(), (req,res)=>{
    serveruser.adduser(req,res)
})
app.get('/delete-user', (req, res)=>{
    serveruser.deleteuser(req,res)
})
app.get('/update-user/:id', (req, res)=>{
    serveruser.getupdateuser(req,res)
})
app.post('/updating-user/:id', (req, res)=>{
    serveruser.updateuser(req,res)
})
//Product
app.get('/product', (req,res)=>{
    serverproduct.product(req,res)
})
app.post('/add-product', (req,res)=>{
    serverproduct.addproduct(req,res)
})
app.get('/delete-product', (req, res)=>{
    serverproduct.delete(req,res)
})
app.get('/update-product/:id', (req, res)=>{
    serverproduct.getupdateproduct(req,res)
})
app.post('/updating-product/:id', (req, res)=>{
    serverproduct.updateproduct(req,res)
    })
//customer
app.get('/customer', (req,res)=>{
    servercustomer.customer(req,res)
})
app.get("/updatecus/:id", (req,res)=>{
    servercustomer.updatecus(req,res)
})
app.get('/delete-customer', (req, res)=>{
    servercustomer.deletecustomer(req,res)
})
app.post('/add-customer', (req,res)=>{
    servercustomer.addcustomer(req,res)
})
app.post('/updated/:id',bodyParser.json() ,(req, res)=>{
    servercustomer.updated(req , res)
})
//order
app.get('/orders', (req, res)=>{
    serverorder.orders(res)
})
app.get('/orderplacerdetail/:id', (req, res)=>{
    serverorder.orderplacerdetail(req.params.id,res)
})
app.get("/orderdetail/:id", (req,res)=>{
    serverorder.orderdetail(req,res)
})
app.get("/updatestatus", (req,res)=>{
    serverorder.updatestatus(req, res)
})
app.post("/addorderplacer",bodyParser.json() ,(req,res)=>{
    serverorder.addorderplacer(req, res)
})
app.get("/ordercusview/:id", (req,res)=>{
    serverorder.ordercusview(req,res)
})
//chart
app.get("/charttotal", (req, res)=>{
    serverchart.getcharttotal(req, res)
})

//localhost:3009
app.listen(3009, ()=>{
    console.log('Server online')
})