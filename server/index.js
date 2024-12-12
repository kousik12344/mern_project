const express = require("express");
const cors = require("cors");
const Signup = require("./model/signup")
const UserRoute = require("./Routes/userRoutes");
const { default: mongoose } = require("mongoose");

const app = express();



mongoose.connect("mongodb://localhost:27017/")
        .then(()=>{console.log("mongodb connected Successfully")})
        .catch((error)=>console.log(error));
    


app.use(express.json());
const corsOptions = {
    origin: ["http://localhost:5173" , "http://localhost:5174"],
    methods: ["POST","GET"],
    allowHeaders: ["Content-Type","Authorization"],
    credentials:true,
}
app.use(cors());


app.get('/',(req,res) => { 
    res.send("Hello world")
}
);



app.use("/user",UserRoute)
app.listen(3000,()=>{
    console.log("server is running")
})