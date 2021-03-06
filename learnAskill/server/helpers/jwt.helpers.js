const jwt = require("jsonwebtoken");

module.exports = {
  signaccesstoken: async (id, email, mobile, role) => {
    return new Promise((resolve, reject) => {
      const payload = {
        email: email,
        id: id,
        mobile: mobile,
        role: role,
      };
      const secret = process.env.jwtkey;
      const optains = { expiresIn: "1h" };
      jwt.sign(payload, secret, optains, (err, token) => {
        if (token) {
          return resolve(token);
        }
        reject(err);
      });
    });
  },
  verifyaccesstoken: async (req, res, next) => {
    console.log(req.body);
    // console.log("imaage = ", req.body);
    if (!req.headers["authorization"])
      return next(new Error("jwt token not present"));
    const token = req.headers["authorization"].split(" ")[1];
    //console.log(token);
    jwt.verify(token, process.env.jwtkey, (err, payload) => {
      if (err) {
        return next(new Error("jwt token expired"));
      }
      req.payload = payload;
      next();
    });
  },
};
