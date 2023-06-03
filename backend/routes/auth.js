const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const Learner = require('../models/Learner');
const Farmer = require('../models/Farmer');
const Volunteer = require('../models/Volunteer');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "loveeveryb$eing";
const fetchuser = require('../middleware/fetchUser');
const fetchfarmeruser = require('../middleware/fetchfarmer');
const fetchlearneruser = require('../middleware/fetchlearner');
const fetchvolunteeruser = require('../middleware/fetchvolunteer');
// Route1
router.post("/createuser", [
    body('name', "Enter a valid name").isLength({ min: 3 }),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password must be atleast 5 characters").isLength({ min: 5 }),
    body('age', "Enter a valid age please").isLength({ min: 1 }),
    // body('address', "Please fill it").isLength({ min: 1 }),
],
    async (req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        const salt = await bcrypt.genSaltSync(10);
        const secPass = await bcrypt.hashSync(req.body.password, salt);
    
        try{
            let user =await User.findOne({email:req.body.email});
            if(user){
                return res.status(400).json({error:"Sorry a user with this email already exists"})
            }
            user = await User.create({
                name:req.body.name,
                email:req.body.email,
                password:secPass,
                age:req.body.age
                // address:req.body.address
              
            }).then(res.json({ success: true}))
            const data = {
                user: {
                    id: user.id
                }
            }
            res.json(user);
            const authtoken = jwt.sign(data, JWT_SECRET);
        console.log(authtoken);
        // return res.json({ authtoken});
        }catch{errors}{
            console.error(errors.message);
            res.status(500).send("Some error occured");
        }
    
    })

// Route:2
// Authenticate a user with  email and password using:POST "/api/auth/login"
//  no-login required no-registration required
router.post("/Login", [
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password must be atleast 5 characters").isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            let success = false;
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }
        const passwordCompare = await bcrypt.compareSync(password, user.password)
        if (!passwordCompare) {
            let success = false;
            return res.status(400).json({ success, error: "please try to login wit correct credentials" });
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        let success = true;
       return res.json({ success, authtoken });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal server's error occured");
    }
});
// Route3 :Get loggedin user details using: POST "/api/auth/getuser".Login is  required.
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Please authenticate using a valid token");
    }
})



router.post("/learneruser", [
    body('name', "Enter a valid name").isLength({ min: 3 }),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password must be atleast 5 characters").isLength({ min: 5 }),
    body('age', "Enter a valid age please").isLength({ min: 1 }),
    body('city','Donot keep it empty').isLength({min:1}),
    body('state','Donot keep it empty').isLength({min:1}),
    body('zip','Donot keep it empty').isLength({min:4}),
    body('phonenumber','Donot keep it empty').isLength({min:10})
],
    async (req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        const salt = await bcrypt.genSaltSync(10);
        const secPass = await bcrypt.hashSync(req.body.password, salt);
    
        try{
            let learneruser =await Learner.findOne({email:req.body.email});
            if(learneruser){
                return res.status(400).json({error:"Sorry a user with this email already exists"})
            }
            learneruser = await Learner.create({
                name:req.body.name,
                email:req.body.email,
                password:secPass,
                age:req.body.age,
                city:req.body.city,
                state:req.body.state,
                zip:req.body.zip,
                phonenumber:req.body.phonenumber
            }).then(res.json({ success: true }))
            const data = {
                learneruser: {
                    id: learneruser.id
                }
            }
            res.json(learneruser);
            const authtoken = jwt.sign(data, JWT_SECRET);
        console.log(authtoken);
        return res.json({ authtoken });
        }catch{errors}{
            console.error(errors.message);
            res.status(500).send("Some error occured");
        }
    
    })

    // Route4:
    // Farmersignup for farmerlgin and  dashboard access
    router.post("/farmeruser", [
        body('name', "Enter a valid name").isLength({ min: 3 }),
        body('email', "Enter a valid email").isEmail(),
        body('password', "Password must be atleast 5 characters").isLength({ min: 5 }),
        body('age', "Enter a valid age please").isLength({ min: 1 }),
        body('city','Donot keep it empty').isLength({min:1}),
        body('state','Donot keep it empty').isLength({min:1}),
        body('zip','Donot keep it empty').isLength({min:4}),
        body('phonenumber','Donot keep it empty').isLength({min:10}),
    ],
        async (req,res)=>{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors:errors.array()});
            }
            const salt = await bcrypt.genSaltSync(10);
            const secPass = await bcrypt.hashSync(req.body.password, salt);
        
            try{
                let farmeruser =await Farmer.findOne({email:req.body.email});
                if(farmeruser){
                    return res.status(400).json({error:"Sorry a user with this email already exists"})
                }
                farmeruser=await Farmer.create({
                    name:req.body.name,
                    email:req.body.email,
                    password:secPass,
                    age:req.body.age,
                    city:req.body.city,
                    state:req.body.state,
                    zip:req.body.zip,
                    phonenumber:req.body.phonenumber
                }).then(res.json({ success: true }))
                const data = {
                    farmeruser: {
                        id: farmeruser.id
                    }
                }
                res.json(farmeruser);
                const authtoken = jwt.sign(data, JWT_SECRET);
            console.log(authtoken);
            return res.json({ authtoken });
            }catch{errors}{
                console.error(errors.message);
                res.status(500).send("Some error occured");
            }
        })


        // Route:5 :volunteer signup
    router.post("/volunteeruser", [
        body('name', "Enter a valid name").isLength({ min: 3 }),
        body('email', "Enter a valid email").isEmail(),
        body('password', "Password must be atleast 5 characters").isLength({ min: 5 }),
        body('age', "Enter a valid age please").isLength({ min: 1 }),
        body('city','Donot keep it empty').isLength({min:1}),
        body('state','Donot keep it empty').isLength({min:1}),
        body('zip','Donot keep it empty').isLength({min:4}),
        body('phonenumber','Donot keep it empty').isLength({min:10}),
    ],
        async (req,res)=>{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors:errors.array()});
            }
            const salt = await bcrypt.genSaltSync(10);
            const secPass = await bcrypt.hashSync(req.body.password, salt);
        
            try{
                let volunteeruser =await Volunteer.findOne({email:req.body.email});
                if(volunteeruser){
                    return res.status(400).json({error:"Sorry a user with this email already exists"})
                }
                volunteeruser=await Volunteer.create({
                    name:req.body.name,
                    email:req.body.email,
                    password:secPass,
                    age:req.body.age,
                    city:req.body.city,
                    state:req.body.state,
                    zip:req.body.zip,
                    phonenumber:req.body.phonenumber
                }).then(res.json({ success: true }))
                const data = {
                    volunteeruser: {
                        id:volunteeruser.id
                    }
                }
                res.json(volunteeruser);
                const authtoken = jwt.sign(data, JWT_SECRET);
            console.log(authtoken);
            return res.json({ authtoken });
            }catch{errors}{
                console.error(errors.message);
                res.status(500).send("Some error occured");
            }
        })

        // Route:6
// Authenticate a user with  email and password using:POST "/api/auth/Farmerlogin"
//  no-login required no-registration required
router.post("/FarmerLogin", [
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password must be atleast 5 characters").isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let farmeruser = await Farmer.findOne({ email });
        if (!farmeruser
            ) {
            let success = false;
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }
        const passwordCompare = await bcrypt.compareSync(password, farmeruser.password)
        if (!passwordCompare) {
            let success = false;
            return res.status(400).json({ success, error: "please try to login wit correct credentials" });
        }
        const data = {
            farmeruser: {
                id: farmeruser.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        let success = true;
       return res.json({ success, authtoken });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal server's error occured");
    }
});





// Route:7
// Authenticate a user with  email and password using:POST "/api/auth/Learnerlogin"
//  no-login required no-registration required
router.post("/LearnerLogin", [
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password must be atleast 5 characters").isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let learneruser = await Learner.findOne({ email });
        if (!learneruser) {
            let success = false;
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }
        const passwordCompare = await bcrypt.compareSync(password, learneruser.password)
        if (!passwordCompare) {
            let success = false;
            return res.status(400).json({ success, error: "please try to login wit correct credentials" });
        }
        const data = {
            learneruser: {
                id: learneruser.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        let success = true;
       return res.json({ success, authtoken });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal server's error occured");
    }
});




// Route8 :Get farmerloggedin user details using: POST "/api/auth/getfarmeruser".farmerLogin is  required.
router.post('/getfarmeruser', fetchfarmeruser, async (req, res) => {
    try {
        farmeruserId = req.farmeruser.id;
        const farmeruser = await Farmer.findById(farmeruserId).select("-password");
        res.send(farmeruser);
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Please authenticate using a valid token");
    }
})




// Route9 :Get volunteerloggedin user details using: POST "/api/auth/getvolunteeruser".volunteerLogin is  required.
router.post('/getvolunteeruser', fetchvolunteeruser, async (req, res) => {
    try {
        volunteeruserId = req.volunteeruser.id;
        const volunteeruser = await Volunteer.findById(volunteeruserId).select("-password");
        res.send(volunteeruser);
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Please authenticate using a valid token");
    }
})




// Route10 :Get loggedin learneruser details using: POST "/api/auth/getuser".learnerLogin is  required.
router.post('/getfarmeruser', fetchlearneruser, async (req, res) => {
    try {
        learneruserId = req.learneruser.id;
        const learneruser = await Learner.findById(learneruserId).select("-password");
        res.send(learneruser);
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Please authenticate using a valid token");
    }
})


module.exports = router;