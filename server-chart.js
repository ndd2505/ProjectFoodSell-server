const mysql = require('mysql')
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3306",
    password: "250599duy",
    database: "testuser"
})

exports.getcharttotal = (req, res) =>{
    const date = "%"+req.query.date+"%"

    connection.query(" select total,timeorder from orders where timeorder like ?",date ,(err, row)=>{
        if(err){
            console.log(err)
        }else{
            console.log("get chart data success")
        }
        res.json(row)
    })
}