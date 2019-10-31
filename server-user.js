
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
    const updaterole = req.body.role

    connection.query("Update usertab Set username = ?, password = ?, hoten = ?, email = ?, role = ? where id = ?",[updateuser, updatepass, updatename, updateemail, updaterole, parseInt(updateitem)], (err, result) =>{
        if (err){
            console.log('failedddd', err)
        }else{
            console.log("Update Item Success")
        }
        res.sendStatus(200)
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
        res.redirect('/users/?orderby=id&sort=ASC&offset=0&max=6')
    })
}

exports.adduser = (req,res)=>{

    const createuser=req.body.username
    const createpass=req.body.password
    const createname=req.body.hoten
    const createemail=req.body.email
    const createrole = req.body.role

    connection.query("insert into usertab values (null,?,?,?,?,?)", [createuser, createpass, createname, createemail, createrole], (err, result)=>{
        if(err){
            console.log(err)
        }else{
            console.log('insert Success')
        }
        res.sendStatus(200)
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

//valid
exports.validadding = (req, res) =>{

    const username = req.body.username
    const email = req.body.email

    const error = {
        username: '',
        email: ""
    }

    connection.query("select (select count(*) from usertab  where email = ?) as email, (select count(*) from usertab  where username = ?) as username",[email, username],(err, row)=>{
        if(err){
            console.log(err)
        }else{
            console.log(row)
            if(row[0].email === 1){
                error.email = "Email đã được sử dụng. Vui lòng sử dụng email khác"
            }
            if(row[0].username === 1){
                error.username = "Username đã được sử dụng. Vui lòng sử dụng Username khác"
            }
            res.json(error)
        }
    })
}