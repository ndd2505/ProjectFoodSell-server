
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

exports.updateproduct = (req,res)=>{
    const updateitem = req.params.id

    const updateproducname=req.body.productname
    const updateproductimage=req.body.image
    const updateproductprice=req.body.price
    const updateproductpromotionprice=req.body.price
    const updateproductinfo=req.body.info
    const updateproducttype=req.body.type

    connection.query("Update productinfo Set productname = ?, image = ?, price = ?, promotionprice = ?, info = ?, type = ? where productid = ?",[updateproducname, updateproductimage, updateproductprice, updateproductpromotionprice,updateproductinfo,updateproducttype, parseInt(updateitem)], (err, result) =>{
        if (err){
            console.log('failedddd', err)
        }else{
            console.log("Update Item Success")
            res.sendStatus(200)
        }
        
    })
}

exports.getupdateproduct = (req,res)=>{
    const updateitem = req.params.id

    connection.query("Select * from productinfo where productid = ? ", parseInt(updateitem) ,(err, rows) =>{
        if (err){
            console.log('failedddd', err)
        }else{
            console.log("Filling Update Item Success")
        }
            res.json(rows)
    })
}

exports.delete = (req,res) =>{
    const delitem = req.query.id

    connection.query('Delete from productinfo where productid = ? ', parseInt(delitem), (err,rows)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Delete Success')
        }
        res.redirect('/product?offset=0&max=9')
    })
}

exports.addproduct =(req,res)=>{
    console.log('success')
    const addproducname=req.body.productname
    const addproductimage=req.body.image
    const addproductprice=req.body.price
    const addproductpromotionprice=req.body.price
    const addproductinfo=req.body.info
    const addproducttype=req.body.type

    connection.query("insert into productinfo values (null,?,?,?,?,?,?)", [addproducname, addproductimage, parseInt(addproductprice), parseInt(addproductpromotionprice),addproductinfo,addproducttype], (err, result)=>{
        if(err){
            console.log(err)
        }else{
            console.log('insert Success')
            res.sendStatus(200)
        }
    })
}

exports.product = (req,res)=>{
    const offset = req.query.offset
    const max = req.query.max
    const orderby = req.query.orderby
    const sort = req.query.sort
    const searchobj ='%'+req.query.search+'%'

    if(req.query.search==null || req.query.search=='')
    {
    if(offset==null, max==null){
            connection.query("Select * from productinfo ORDER BY productid asc ",(err, rows) =>{
        if (err){
            console.log('failedddd', err)
        }else{
            console.log(rows.total)
            console.log("Success fetch MySQL")
        }
            res.json(rows)
    })
    }//pagination
    else{
    if(orderby==null){    
        connection.query("Select * from productinfo ORDER BY productid ASC limit ?,?",[parseInt(offset), parseInt(max)], (err, rows) =>{
        if (err){
            console.log('failedddd', err)
        }else{
            console.log("Success fetch MySQL")
        }
            res.json(rows)
    })//sort
    }else{
        if(sort==null){
            connection.query("Select * from productinfo ORDER BY "+ orderby +" ASC limit ?,?",[parseInt(offset), parseInt(max)], (err, rows) =>{
            if (err){
                console.log('failedddd', err)
            }else{
                console.log("Success fetch MySQL")
            }
                res.json(rows)
            })  
        }else{
            connection.query("Select * from productinfo ORDER BY "+ orderby +" "+sort+" limit ?,?",[parseInt(offset), parseInt(max)], (err, rows) =>{
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
            connection.query("SELECT * from productinfo where productname like ? ORDER BY productid asc",searchobj,(err, rows) =>{
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
        connection.query("SELECT * from productinfo where productname like ? ORDER BY productid ASC limit ?,?",[searchobj,parseInt(offset), parseInt(max)], (err, rows) =>{
        if (err){
            console.log('failedddd', err)
        }else{
            console.log("Success fetch MySQL")
        }
            res.json(rows)
    })//sort
    }else{
        if(sort==null){
            connection.query("SELECT * from productinfo where productname like ? ORDER BY "+ orderby +" ASC limit ?,?",[searchobj,parseInt(offset), parseInt(max)], (err, rows) =>{
            if (err){
                console.log('failedddd', err)
            }else{
                console.log("Success fetch MySQL")
            }
                res.json(rows)
            })  
        }else{
            connection.query("SELECT * from productinfo where productname like ? ORDER BY "+ orderby +" "+sort+" limit ?,?",[searchobj,parseInt(offset), parseInt(max)], (err, rows) =>{
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