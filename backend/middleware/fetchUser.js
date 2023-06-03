const jwt = require('jsonwebtoken');
const JWT_SECRET = "loveeveryb$eing";
const fetchuser = (req, res, next) => {
    // get the user from the jwt token and add id to the required object.
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();

    }
    catch (error) {
        res.status(401).send({ error: "please authenticate using a valid token" })
    }

    // at first we wrote it here but then there exists a question that what if we get the  the token  that is not valid
    //  for our convenience we made a try catch block just above of it .
    // const data = jwt.verify(token,JWT_SECRET);
    // req.user = data.user;
    // next();
}

module.exports = fetchuser;

