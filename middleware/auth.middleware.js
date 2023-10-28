const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  console.log("Time:", Date.now());
  // console.log("Request Type:", req.method);
  // console.log("Request URL:", req.originalUrl);
  // console.log(req.headers);
  if (
    req.originalUrl === "/users/login" ||
    (req.originalUrl === "/users" && req.method === "POST")
  )
    next();
  else if (req.headers.token) {
    try {
      var decoded = jwt.verify(req.headers.token, "singh");
      // console.log(decoded);
      req.user = decoded.name;
      next();
    } catch (e) {
      res.status(403).json({ message: "invalid token" });
    }
  } else res.status(403).json({ message: "invalid credentials" });
};

module.exports = auth;
