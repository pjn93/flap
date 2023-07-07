const connection = require("../modal/Dbconnect")

const getNews = async function(req, res){
    let sqlquery = "SELECT * FROM news";
    await connection.query(sqlquery, function(error, result){
        if(error)
        console.log(error.sqlMessage);
        else
         res.send(result);  
         console.log(result);
    })
}

const viewNews = async function(req, res){
    let id = req.query.uid;
    let sqlquery = "SELECT * FROM news where uid=?";
    await connection.query(sqlquery, id, function(error, result){
        if(error)
        console.log(error.sqlMessage);
        else
         res.send(result);  
         console.log(result);
    })
}


const createNews = async function(req,res){
    try {
        const sqlQuery =
        "INSERT INTO news SET?";
    const data = {
    uid: req.query.uid,
    eventname: req.body.eventname,
    starttime: req.body.starttime,
    endtime: req.body.endtime,
    city: req.body.city,
    description: req.body.description,
    category: req.body.category,
    bannerimage: req.file.location
    };
  
    await connection.query(sqlQuery, data, (error, result) => {
    console.log(result, "result");
    if (error) {
    res.send({ status: 400, Error: error.sqlMessage });
    } else {
    res.send({ status: 200, response: result });
    }
    });
    } catch (error) {
    res.send({ Error: error.sqlMessage });
    }
    };




module.exports={getNews, viewNews, createNews}