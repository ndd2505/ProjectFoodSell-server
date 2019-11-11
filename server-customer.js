
const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3306",
    password: "250599duy",
    database: "testuser"
})

exports.addcustomer = (req,res)=>{
    const addcusname=(req.body.firstname +' '+ req.body.lastname)
    const addgender=req.body.gender
    const addaddress=req.body.address
    const addemail=req.body.email
    const addusername=req.body.username
    const addpassword=req.body.password
    const addphone=req.body.phone

    connection.query("insert into customerinfo values (null,?,?,?,?,?,?,?)", [addcusname, addgender, addphone, addaddress, addemail,addusername,addpassword], (err, result)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Sign Up Success')
            res.sendStatus(200)
        }
        
    })
}

exports.deletecustomer = (req,res)=>{
    const delitem = req.query.id

    connection.query('Delete from customerinfo where cusid = ? ', parseInt(delitem), (err,rows)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Delete Success')
        }
        res.redirect('/customer?offset=0&max=6')
    })
}

exports.customer = (req,res) =>{
    const offset = req.query.offset
    const max = req.query.max
    const orderby = req.query.orderby
    const sort = req.query.sort
    const searchobj ='%'+ req.query.search +'%'

    if(req.query.search==null || req.query.search=='')
    {
    if(offset==null, max==null){
            connection.query("Select * from customerinfo ORDER BY cusid asc",(err, rows) =>{
        if (err){
            console.log('failedddd', err)
        }else{
            console.log("Success fetch MySQL")
        }
            res.json(rows)
    })
    }//pagination
    else{
    if(orderby==null){    
        connection.query("Select * from customerinfo ORDER BY cusid ASC limit ?,?",[parseInt(offset), parseInt(max)], (err, rows) =>{
        if (err){
            console.log('failedddd', err)
        }else{
            console.log("Success fetch MySQL")
        }
            res.json(rows)
    })//sort
    }else{
        if(sort==null){
            connection.query("Select * from customerinfo ORDER BY "+ orderby +" ASC limit ?,?",[parseInt(offset), parseInt(max)], (err, rows) =>{
            if (err){
                console.log('failedddd', err)
            }else{
                console.log("Success fetch MySQL")
            }
                res.json(rows)
            })  
        }else{
            connection.query("Select * from customerinfo ORDER BY "+ orderby +" "+sort+" limit ?,?",[parseInt(offset), parseInt(max)], (err, rows) =>{
            if (err){
                console.log('failedddd', err)
            }else{
                console.log("Success fetch MySQL")
            }
                res.json(rows)
            }) 
        }  
    }
    }
    }//search
    else{
        if(offset==null, max==null){
            connection.query("SELECT * from customerinfo where username or name like ? ORDER BY cusid asc",searchobj,(err, rows) =>{
        if (err){
            console.log('failedddd', err)
        }else{
            console.log("Success fetch MySQL")
        }
            res.json(rows)
    })
    }//pagination
    else{
    if(orderby==null){    
        connection.query("SELECT * from customerinfo where username or name like ? ORDER BY cusid ASC limit ?,?",[searchobj,parseInt(offset), parseInt(max)], (err, rows) =>{
        if (err){
            console.log('failedddd', err)
        }else{
            console.log("Success fetch MySQL")
        }
            res.json(rows)
    })//sort
    }else{
        if(sort==null){
            connection.query("SELECT * from customerinfo where username or name like ? ORDER BY "+ orderby +" ASC limit ?,?",[searchobj,parseInt(offset), parseInt(max)], (err, rows) =>{
            if (err){
                console.log('failedddd', err)
            }else{
                console.log("Success fetch MySQL")
            }
                res.json(rows)
            })  
        }else{
            connection.query("SELECT * from customerinfo where username or name like ? ORDER BY "+ orderby +" "+sort+" limit ?,?",[searchobj,parseInt(offset), parseInt(max)], (err, rows) =>{
            if (err){
                console.log('failedddd', err)
            }else{
                console.log("Success fetch MySQL")
            }
                res.json(rows)
            }) 
        }  
    }
    }
    }
}
exports.updatecus = (req, res) =>{
    const id = req.params.id
    const sqlquery = "select * from customerinfo where cusid = ?"

    connection.query(sqlquery, parseInt(id), (err, row)=>{
        if(err){
            console.log(err)
        }else{
            console.log("fecth success")
        }
        res.json(row)
    })
}

exports.updated = (req, res) =>{
    const id = req.params.id
    const name = req.body.name
    const gender = req.body.gender
    const phone = req.body.phone
    const address = req.body.address
    const email = req.body.email
    const username = req.body.username
    const sqlquery = "update customerinfo set name = ?,gender = ?, phone = ?, address = ?, email = ?, username = ? where cusid = ?"

    connection.query(sqlquery, [name, gender, phone, address, email, username, id], (err, row)=>{
        if(err){
            console.log(err)
        }else{
            console.log("update success")
            res.sendStatus(200)
        }
    })
}