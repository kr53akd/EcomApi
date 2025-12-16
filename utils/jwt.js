import jwt from "jsonwebtoken";
const jwtSecretKey = process.env.JWT_SECRET_KEY;

export const generateToken = async(value)=>{
    const token = jwt.sign(value, jwtSecretKey, {expiresIn: "20m"});
    return token;
};

export const verifyToken = (value) => {
  try {
    if (!value) {
      return null;
    }

    // Handle Bearer token
    const token = value.startsWith("Bearer ")
      ? value.split(" ")[1]
      : value;

    const decoded = jwt.verify(token, jwtSecretKey);
    return decoded;
  } catch (error) {
    return { error: error.message };
  }
};