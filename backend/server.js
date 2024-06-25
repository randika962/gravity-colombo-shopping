// --------------------------------------------------Database Connecting Code---------------------------------------------------

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gravitycolombomarket",
});

db.connect((err) => {
    if (err) {
      console.error("Error connecting to database: " + err.stack);
      return;
    }
    console.log("Connected to database as id " + db.threadId);
  });

// ---------------------------------------Add a new endpoint to Vendor SignUp section--------------------------------------------

// Function to validate email format

const validateEmail = (email) => {
  // Regular expression for email validation
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return emailRegex.test(email);
};

app.post("/vendorsignup", (req, res) => {
  console.log(req.body);

  // Check if any of the values are empty
  const hasEmptyValues = Object.values(req.body).some(
    (val) => val.trim() === ""
  );
  if (hasEmptyValues) {
    console.log("Empty values detected. Data not saved.");
    return res.json("Error: Empty values detected");
  }

  // Validate email format
  if (!validateEmail(req.body.email)) {
    console.log("Invalid email format. Data not saved.");
    return res.json("Error: Invalid email format");
  }

  const sql =
    "INSERT INTO vendor_registration (first_name, last_name, dob, email, mobile_number, id_number, id_image, address, pickup_address, return_address, profile_photo, user_name, password, confirm_password) VALUES ?";
  const values = [
    [
      req.body.first_name,
      req.body.last_name,
      req.body.dob,
      req.body.email,
      req.body.mobile_number,
      req.body.id_number,
      req.body.id_image,
      req.body.address,
      req.body.pickup_address,
      req.body.return_address,
      req.body.profile_photo,
      req.body.user_name,
      req.body.password,
      req.body.confirm_password,
    ],
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.error("Error in signup: " + err.message);
      return res.json("Error");
    }
    console.log("Signup successful");
    return res.json(data);
  });
});

// ---------------------------------------Add a new endpoint to Member SignUp section--------------------------------------------

app.post("/membersignup", (req, res) => {
  console.log(req.body);

  // Check if any of the values are empty
  const hasEmptyValues = Object.values(req.body).some(
    (val) => val.trim() === ""
  );
  if (hasEmptyValues) {
    console.log("Empty values detected. Data not saved.");
    return res.json("Error: Empty values detected");
  }

  // Validate email format
  if (!validateEmail(req.body.email)) {
    console.log("Invalid email format. Data not saved.");
    return res.json("Error: Invalid email format");
  }

  const sql =
    "INSERT INTO member_registration (first_name, last_name, dob, email, mobile_number, id_number, address, profile_photo, password, confirm_password) VALUES ?";
  const values = [
    [
      req.body.first_name,
      req.body.last_name,
      req.body.dob,
      req.body.email,
      req.body.mobile_number,
      req.body.id_number,
      req.body.address,
      req.body.profile_photo,
      req.body.password,
      req.body.confirm_password,
    ],
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.error("Error in signup: " + err.message);
      return res.json("Error");
    }
    console.log("Signup successful");
    return res.json(data);
  });
});

// ---------------------------------------Add a new endpoint to User Login section--------------------------------------------

app.post("/login", (req, res) => {
  const sql =
    "SELECT * FROM registrations WHERE email = ? AND password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Login Success");
    } else {
      return res.json("Login Fail");
    }
  });
});

  app.listen(3001, () => {
    console.log("Server is running on port 3001");
  });