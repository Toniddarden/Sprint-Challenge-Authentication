/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const secrets = require('./secrets');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (token) {
    
    jwt.verify(token, secrets.jwtSecret, (error, decodedJwt) => {
      if (error) {
        res.status(401).json({ message: "no token" });
      } else {
        req.decodedJwt = decodedJwt;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "shall not pass" });
  }
};
