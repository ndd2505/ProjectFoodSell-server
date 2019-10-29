
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3306",
    password: "250599duy",
    database: "testuser"
})

exports.updateuser = (req, res)=>{
    const updateitem = req.params.id

    const updateuser=req.body.username
    const updatepass=req.body.password
    const updatename=req.body.hoten
    const updateemail=req.body.email

    connection.query("Update usertab Set username = ?, password = ?, hoten = ?, email = ? where id = ?",[updateuser, updatepass, updatename, updateemail, parseInt(updateitem)], (err, result) =>{
        if (err){
            console.log('failedddd', err)
        }else{
            console.log("Update Item Success")
        }
        res.redirect('/admin/user')
    })

}

exports.getupdateuser = (req, res)=>{
    const updateitem = req.params.id

    connection.query("Select * from usertab where id = ? ", parseInt(updateitem) ,(err, rows) =>{
        if (err){
            console.log('failedddd', err)
        }else{
            console.log("Filling Update Item Success")
        }
            res.json(rows)
    })
}

exports.deleteuser = (req, res)=>{
    const delitem = req.query.id

    connection.query('Delete from usertab where id =? ', parseInt(delitem), (err,rows)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Delete Success')
        }
        res.redirect('/users?offset=0&max=6')
    })
}

exports.adduser = (req,res)=>{
    console.log('success')
    const createuser=req.body.username
    const createpass=req.body.password
    const createname=req.body.hoten
    const createemail=req.body.email

    connection.query("insert into usertab values (null,?,?,?,?)", [createuser, createpass, createname, createemail], (err, result)=>{
        if(err){
            console.log(err)
        }else{
            console.log('insert Success')
        }
        res.redirect('/admin/user')
    })
}

exports.users = (req,res)=>{
    const offset = req.query.offset
    const max = req.query.max
    const orderby = req.query.orderby
    const sort = req.query.sort
    const searchobj ='%'+ req.query.search +'%'

    if(req.query.search==null || req.query.search=='')
    {
    if(offset==null, max==null){
            connection.query("Select * from usertab ORDER BY id asc",(err, rows) =>{
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
        connection.query("Select * from usertab ORDER BY id ASC limit ?,?",[parseInt(offset), parseInt(max)], (err, rows) =>{
        if (err){
            console.log('failedddd', err)
        }else{
            console.log("Success fetch MySQL")
        }
            res.json(rows)
    })//sort
    }else{
        if(sort==null){
            connection.query("Select * from usertab ORDER BY "+ orderby +" ASC limit ?,?",[parseInt(offset), parseInt(max)], (err, rows) =>{
            if (err){
                console.log('failedddd', err)
            }else{
                console.log("Success fetch MySQL")
            }
                res.json(rows)
            })  
        }else{
            connection.query("Select * from usertab ORDER BY "+ orderby +" "+sort+" limit ?,?",[parseInt(offset), parseInt(max)], (err, rows) =>{
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
            connection.query("SELECT * from usertab where username or hoten like ? ORDER BY id asc",searchobj,(err, rows) =>{
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
        connection.query("SELECT * from usertab where username or hoten like ? ORDER BY id ASC limit ?,?",[searchobj,parseInt(offset), parseInt(max)], (err, rows) =>{
        if (err){
            console.log('failedddd', err)
        }else{
            console.log("Success fetch MySQL")
        }
            res.json(rows)
    })//sort
    }else{
        if(sort==null){
            connection.query("SELECT * from usertab where username or hoten like ? ORDER BY "+ orderby +" ASC limit ?,?",[searchobj,parseInt(offset), parseInt(max)], (err, rows) =>{
            if (err){
                console.log('failedddd', err)
            }else{
                console.log("Success fetch MySQL")
            }
                res.json(rows)
            })  
        }else{
            connection.query("SELECT * from usertab where username or hoten like ? ORDER BY "+ orderby +" "+sort+" limit ?,?",[searchobj,parseInt(offset), parseInt(max)], (err, rows) =>{
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