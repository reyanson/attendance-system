//import necessary package
import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'

//create an express app
const app = express()

//Enable CORS with specific origin and credentials
app.use(cors({
    origin:[""],
    credentials: true
}))

//parse income JSON request
app.use(express.json())

//parse cookies
app.use(cookieParser())

//Endpoint for user login
app.post("/login",(req,res) =>{
    const uname = "reyanson@gmail.com";
    const pw = "Password@123"

    const {username, password} = req.body;

    //check if user is alredy logged in
    const accessToken = req.cookies.accessToken;
    console.log(accessToken)

    if(!accessToken){
        if(username === uname){
            if(password === pw){
                //generate the access token
                const accessToken = jwt.sign({username:username},"jwt-access-token-secret-key", { expiresIn: '1m'});
                const refreshToken = jwt.sign({username:username},"jwt-refresh-token-secret-key", { expiresIn: '5m'});

                // set token as cookies in the response
                res.cookie('accessToken', accessToken, { maxAge: 60000});
                res.cookie('refreshToken', refreshToken, { maxAge: 300000, httpOnly:true, sameSite: 'strict'});

                res.json("Login Sucessfull");
            }else{
                res.json("Incorrect Password");
            }
        }else{
            res.json("No record existed. Please register first");
        }
    }else{
        //user is already logged in , redirect to home page
    }

});

//start the express server
app.listen(3001,() =>{
    console.log("Server is running on port 3001...")
});