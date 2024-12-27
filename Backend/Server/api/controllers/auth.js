import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  try {
    const token = req.body.token;
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const response = {
      data: decoded,
      success: true,
    };
    res.status(200).json(response);
  } catch (error) {
    return res.status(200).json({
      message: "Auth failed",
      success: false,
    });
  }
};
