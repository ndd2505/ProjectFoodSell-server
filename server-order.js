
const mysql = require('mysql')
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3306",
    password: "250599duy",
    database: "testuser"
})

exports.orderdetail = (req,res)=>{
    const sqlquery = "Select ordersproduct.orderproductid, productinfo.productname, productinfo.price, ordersproduct.quantity, ordersproduct.totalprice from ordersproduct left join productinfo on ordersproduct.productid = productinfo.productid where ordersproduct.orderid = "
    const idorder = req.params.id
    connection.query(sqlquery+idorder, (err,row)=>{
        if(err){
            console.log(err)
        }else{
            console.log("fetch detail order success")
        }
        res.json(row)
    })
}
exports.orderplacerdetail = (orderid,res)=>{
    const sqlorder="select * from orders where orderid = "
    connection.query(sqlorder+orderid, (err, row)=>{
        if(err){
            console.log(err)
        }else{
            console.log("fetch orders success")
        }
        res.json(row)
    })
}
exports.orders = (res) =>{
    const sqlorder="select * from orders"
    connection.query(sqlorder, (err, row)=>{
        if(err){
            console.log(err)
        }else{
            console.log("fetch orders success")
        }
        res.json(row)
    })
}
exports.updatestatus = (req, res) =>{
    const orderid = req.query.id
    const orderstatus = req.query.status 
    connection.query("Update orders Set orderstatus = "+'"'+orderstatus+'"'+" where orderid = "+orderid, (err,row)=>{
        if(err){
            console.log(err)
        }else{
            console.log(row)
        }
        res.redirect('/orders')
    })
}

exports.addorderplacer = (req,res)=>{
    const userid = req.body.userid
    const name = '"'+req.body.name+'"'
    const total = req.body.total
    const promotion = req.body.promotion
    const address = '"'+req.body.address+'"'
    const phone = req.body.phone
    const email = '"'+req.body.email+'"'
    const timeorder = '"'+req.body.timeorder+'"'
    const status = '"'+req.body.status+'"'
    const sqlquery1 = "Insert into orders values (null, "+userid+", "+name+", "+total+", "+promotion+", "+address+", "+phone+", "+email+", "+timeorder+", "+status+" )"
    const product = req.body.product;
    
    connection.query(sqlquery1, (err, row)=>{
        if(err){
            console.log(err)
        }else{
            console.log(row)
            product.map((each)=>connection.query("Insert into ordersproduct values (null, "+row.insertId+", "+each.productid+", "+each.quantity+", "+each.price*each.quantity+" )", (err,result)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log(result)
                }
            }))
        }
        res.json(row)
    })
}
exports.ordercusview = (req,res) =>{
    const id = req.params.id
    const sqlquery = "select * from orders where userid = ?"

    connection.query(sqlquery,parseInt(id) ,(err, row)=>{
        if(err){
            console.log(err)
        }else{
            console.log("fetch success")
        }
        res.json(row)
    })
}

