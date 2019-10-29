
const mysql = require('mysql')
const jwt = require('jsonwebtoken')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3306",
    password: "250599duy",
    database: "testuser"
})

exports.logout = (req,res)=>{
    console.log(req.session.userid)
    if(req.session){req.session.destroy((err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('logout success')
        }
    })}
}

exports.loginadmin = (req,res) => {
    const username = '"'+req.body.username+'"'
    const password = '"'+req.body.password+'"'

    connection.query("select * from usertab where username = "+ username+" and password = "+password,(err,row)=>{
        if(err){
            console.log("login failed")
        }else{
            if(row.length < 1){
                res.sendStatus(404).json(token)
            }else{              
                const user = {
                    user: row[0].username,
                    author: row[0].role,
                    role: "admin"
                }
                jwt.sign(user, 'asdfawieunc',{ expiresIn: 60 * 5 }, (err, token)=>{
                    res.json(token)
                })
            }
        }
    })
}
exports.logincus = (req,res) => {
    const username = '"'+req.body.username+'"'
    const password = '"'+req.body.password+'"'

    connection.query("select * from customerinfo where username = "+username+" and password = "+password,(err,row)=>{
        if(err){
            console.log("login failed")
        }else{
            if(row.length < 1){
                res.sendStatus(404)
            }else{
                const user = {
                    id: row[0].cusid,
                    user: row[0].username,
                    role: "customer"
                }
                jwt.sign(user, 'sadaweqwcmszmcoiwq', (err, token)=>{
                    res.json(token)
                })
            }
        }
    })
}
//forgot
exports.confirmEmail = (req, res) => {
    const email = req.params.email

    connection.query(" select * from customerinfo where email = ?",email ,(err, row)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("success")
            if(row.length === 1){
                console.log("confirm")
                res.sendStatus(200)
            }else{
                console.log("does not exist")
                res.sendStatus(404)
            }
        }
    })
} 
exports.confirmSingUpEmail = (req, res) => {
    const email = req.params.email

    connection.query(" select * from customerinfo where email = ?",email ,(err, row)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("success")
            if(row.length === 1){
                console.log("exist")
                res.sendStatus(404)
            }else{
                console.log("confirm")
                res.sendStatus(200)
            }
        }
    })
}

exports.confirmPhone = (req,res)=>{
    const phone = req.params.phone

    connection.query("select * from customerinfo where phone = ?", parseInt(phone), (err,row)=>{
        if(err){
            console.log(err)
            console.log(req.params)
        }else{
            console.log("success")
            if(row.length === 1){
                res.sendStatus(404)
            }else{
                res.sendStatus(200)
            }
        }
    })
}

exports.confirmUsername = (req, res) => {
    const username = req.params.username

    connection.query(" select * from customerinfo where username = ?",username ,(err, row)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("success")
            if(row.length === 1){
                console.log("confirm")
                res.sendStatus(200)
            }else{
                console.log("does not exist")
                res.sendStatus(404)
            }
        }
    })
} 
exports.confirmSignUpUsername = (req, res) => {
    const username = req.params.username

    connection.query(" select * from customerinfo where username = ?",username ,(err, row)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("success")
            if(row.length === 1){
                console.log("exist")
                res.sendStatus(404)
            }else{
                console.log("confirm ")
                res.sendStatus(200)
            }
        }
    })
} 

exports.changeforgot = (req, res) =>{
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password

    connection.query("update customerinfo set password = ? where email = ? and username = ? ",[password, email, username] ,(err, row)=>{
        if(err){
            console.log(err)
        }else{
            console.log("success")
        }
        res.sendStatus(200)
    })

}

exports.confirmpassword = (req,res) =>{
    const id = req.body.id
    const password = req.body.password

    connection.query("select * from customerinfo where cusid = ? and password = ?", [id, password], (err,row)=>{
        if(err){
            console.log(err)
        }else{
            console.log("success")
            if(row.length === 1){
                res.sendStatus(200)
            }else{
                res.sendStatus(404)
            }
        }
    })
}

exports.changepasswordlogin = (req,res) =>{
    const id = req.body.id
    const password = req.body.newpass

    connection.query("update customerinfo set password = ? where cusid = ?", [password, id], (err, row)=>{
        if(err){
            console.log(err)
        }else{
            console.log("success")
            res.sendStatus(200)
        }
    })
}
