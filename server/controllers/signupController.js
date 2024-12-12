const Signup = require("../model/signup")
const bcrypt = require("bcrypt")


const Signups = async(req,res) =>{
    const {name , email , password} = req.body;
    try{
        const sign = await Signup.findOne({email:email});
        const hashpassword = await bcrypt.hash(password,10)
        if (sign){
            res.status(400).json({message:"User already exists"})
        }else{
            const user = await Signup.create({
                name,
                email,

                password:hashpassword,
            })
            if(user){
                res.status(200).json({message:"User registered Successfully"})
                console.log("Registration Success")
            }else{
                res.status(400).json({message:"Error while registering"});
            }
        }
    } catch(error){
      console.log(error)
    }
    
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const login = await Signup.findOne({ email: email });
    if (!login || !(await bcrypt.compare(password, login.password))) {
      res.status(400).json({ message: "invalid mail or password" });
    } else {
      res.status(200).json({ message: "user login successful" });
    }
  } catch (error) {
    console.log(error);
  }
};








module.exports={Signups,Login};