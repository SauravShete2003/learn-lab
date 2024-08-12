import User from "../model/User.js";
import bcrypt from "bcrypt";

const postSignup = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    // const saltRounds = 10;
    // const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new User({
      name,
      email,
      password,
      role,
    });
    console.log(user);
      
    const saved = await user.save();
    console.log(saved);
    
    return res.status(201).json({
      message: "User created successfully",
      user: saved,
      success: true,
    });
  } catch (err) {
    return res.status(401).json({
      message: "Error creating user",
      error: err.message,
      success: false,
    });
  }
};




// const postLogin = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.json({
//         message: "User not found",
//         success: false,
//       });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {  // Fix the logic here
//       return res.status(401).json({
//         message: "Invalid email or password",
//         success: false,
//       });
//     }

//     return res.status(200).json({
//       message: "User logged in successfully",
//       user: user,
//       success: true,
//     });
//   } catch (err) {
//     return res.status(401).json({
//       message: "Error logging in",
//       error: err.message,
//       success: false,
//     });
//   }
// };

export { postSignup };
