
const mysql = require('mysql')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

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
                res.sendStatus(400)
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
                res.sendStatus(400)
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
//signup validate
exports.validsignup = (req, res)=>{
    const email = req.body.email
    const username = req.body.username
    const phone = req.body.phone
    const sql = "select (select count(*) from customerinfo  where email = ?) as email, (select count(*) from customerinfo  where username = ?) as username, (select count(*) from customerinfo  where phone = ?) as phone"
    const error = {
        email: "",
        username: "",
        phone: ""
    }

    connection.query(sql, [email, username, phone], (err,row)=>{
        if(err){
            console.log(err)
        }else{
            console.log("success")
            if(row[0].email > 0){
                error.email = "email đã tồn tại "
            }
            if(row[0].username > 0){
                error.username = "username đã tồn tại "
            }
            if(row[0].phone > 0){
                error.phone = "số điện thoại đã tồn tại "
            }
        }
        console.log(row)
        res.json(error)
    })
    
}

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
                res.sendStatus(401)
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
                res.sendStatus(401)
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
                res.sendStatus(401)
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
let token = []
//forgot

exports.confirmcode = (req,res) => {
    const user = {mes:"OK"}
    jwt.sign(user, 'sadaweqwcmszmcoiwq', (err, some)=>{
        token.pop()
        token.push(some)
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: 'duyndps07538@fpt.edu.vn',
            pass: 'duydeptrai1999'
            }
        }
        )
        var mailOptions = {
            from: 'duyndps07538@fpt.edu.vn',
            to: 'duy2551999@gmail.com',
            subject: 'Sending Email using Node.js',
            html : '<h1>This is your code to get your password</h1><p>'+token[0]+'</p>'
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
            console.log(error);
            } else {
            console.log('Email sent: ' + info.response);
            res.sendStatus(201)
            }
        })  
        console.log(token)
    })
        
}
exports.confirmcode2 = (req,res) =>{
        if(req.body.codeconf == token[0]){
        res.sendStatus(200)
        token.pop()
    }else{
        console.log(token[0])
        res.sendStatus(400)
    }
    
}