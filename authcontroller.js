const User = require("D:/ecommerce/backend/models/user.js");
const bcrypt = require("bcryptjs");

exports.loginUser = async (req, res) => {
  const { username, email, password } = req.body;

  // Check required fields
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  try {
    let user = await User.findOne({ email });

    if (!user) {
      // Register new user
      if (!username) {
        return res.status(400).json({ message: "Username is required for new user registration." });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      user = new User({ username, email, password: hashedPassword });
      await user.save();

      return res.status(201).json({ message: "User registered successfully." });
    }

    // Compare provided password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // Successful login
    res.status(200).json({
      message: "Login successful.",
      user: {
        username: user.username,
        email: user.email,
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error." });
  }
};
