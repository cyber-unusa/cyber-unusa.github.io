import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not Authorized. Login lagi broo",
    });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode.id) {
      req.userId = tokenDecode.id;
    } else {
      return res.status(401).json({
        success: false,
        message: "Not Authorized. Login lagi broo",
      });
    }

    next();
  } catch (error) {
    // Token verification failed or other auth error
    return res
      .status(401)
      .json({ success: false, message: "Not Authorized. Login lagi broo" });
  }
};

export default userAuth;
