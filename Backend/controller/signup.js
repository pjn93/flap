const connection = require("../modal/Dbconnect")
const jwt = require('jsonwebtoken')



const viewUser= async function(req, res){
    let sqlquery = "SELECT * FROM signup";
    await connection.query(sqlquery, function(error, result){
        if(error)
        console.log(error.sqlMessage);
        else
         res.send(result);  
         console.log(result);
    })
}

const login = async (req, res) => {
    try {
        let { email, password } = req.body;
        console.log({ email, password });
        let sqlQuery = "SELECT * from signup where email= ?";
        let a = await connection.query(sqlQuery, email, async function (error, result) {
            console.log("object ", a.sql);
            console.log("object123 ", result);
            const secretKey = 'your-secret-key';
            const options = {
                expiresIn: '1m', // Token expiration time
            };
            const token = jwt.sign({email}, secretKey, options);
            console.log("token ",token);
            const userVer = await jwt.verify(token, secretKey)
            console.log(userVer)
            if (error) {
                return res.json({ status: 400, response: error.message })
            }
            if (result.length == 0) {
                return res.json({ status: 400, response: "user not found " })
            }
            if (result[0].password == password) {
              return res.json({ status: 200, response: "user logged in", token, user: result[0] })
                }
             else {
                res.json({ status: 400, response: "invalid credential" })
            }

        })
    } catch (error) {
        res.json({ status: 400, response: error.message })
    }
}


const addUser = async function(req,res){
    let userdata = req.body;
    console.log(userdata);
    let sqlquery = "INSERT INTO signup set ?";
    await connection.query(sqlquery, userdata ,function(error, result){
        if(error){
            console.log(error.sqlMessage);
        }
        else{
            res.send(result);
            console.log(result);
        } 
    })
}


module.exports={viewUser, addUser,  login}