const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");

const uri = "mongodb+srv://sonika:asta123@cluster0.4gukui3.mongodb.net/?retryWrites=true&w=majority"; // Replace this with your actual URI

const user = {
  username: "soni",
  email: "sonithangapandi@gmail.com",
  password: "1234", // Plain password
};

async function insertUser() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db("test"); // Use your actual DB name
    const users = db.collection("users");

    // Check if user already exists
    const existing = await users.findOne({ email: user.email });
    if (existing) {
      console.log("⚠️ Email already exists in database.");
      return;
    }

    // Encrypt password
    const hashedPassword = await bcrypt.hash(user.password, 10);

    // Insert new user
    const result = await users.insertOne({
      username: user.username,
      email: user.email,
      password: hashedPassword,
    });

    console.log("✅ User inserted successfully:", result.insertedId);
  } catch (error) {
    console.error("❌ Failed to insert user:", error);
  } finally {
    await client.close();
  }
}

insertUser();
