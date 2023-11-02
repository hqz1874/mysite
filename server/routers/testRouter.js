const express = require("express")
const router = express.Router()
// const {db,genid} = require("../db/DbUtils")



router.get("/test", async(req, res) =>{
    db.all("SELECT * FROM `admin`",[],(err,rows) =>{
        console.log(rows);
    })
    db.async.all("SELECT * FROM `admin`",[]).then((res) =>{
        console.log(res);
    })
    let out = await db.async.all("SELECT * FROM `admin`",[])
    res.send({
        msg:"test",
        id:genid.NextId(),
        out  
    })
})





module.exports = router