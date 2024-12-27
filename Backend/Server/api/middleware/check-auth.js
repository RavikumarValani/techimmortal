import jwt from "jsonwebtoken";

const checkAuth = (req, res, next) => {
  try {
    console.log(req.headers.authorization);
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(200).json({
      message: "Authorization failed",
      success: false,
    });
  }
};

export default checkAuth;
