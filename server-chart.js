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
exports.getChartStatus = (req,res) =>{
    connection.query("select orderstatus,sum(total) as total from orders group by orderstatus", (err,row) =>{
        if(err){
            console.log(err)
        }else{
            console.log("get chart Status Success")
        }
        res.json(row)
    })
}
exports.getchartmonth = (req, res) => {
    connection.query("select month(timeorder) as month ,sum(total) as total from orders where orderstatus = 'Done' group by month(timeorder)", (err, row)=>{
        if(err){
            console.log(err)
        }else{
            console.log("get chart month success")
        }
        res.json(row)
    })
}

exports.getchartyear =(req, res) =>{
    connection.query("select year(timeorder)  as year, sum(total) as total from orders where orderstatus = 'Done' group by year(timeorder)", (err,row) =>{
        if(err){
            console.log(err)
        }else{
            console.log("get chart year success")
        }

        res.json(row)
    })
}