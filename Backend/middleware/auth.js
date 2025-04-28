import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Not Authorized, Login again",
    });
  }

  try {
    const token = authHeader.split(" ")[1]; // Extract the token after "Bearer"
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.body.userId = decoded.id;
    next();
  } catch (error) {
    console.error("JWT Error:", error.message);
    res.status(401).json({
      success: false,
      message: "Invalid Token, Login again",
    });
  }
};

export default authMiddleware;
