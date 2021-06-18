const User = require("../models/User");
const Pressing = require("../models/Pressing");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

exports.Register = async (req, res) => {
  try {
    //req.body : name email password ,phone
    const { email, password } = req.body;
    //test email
    const findUser = await User.findOne({ email });
    //ken mawjoud => email should be unique
    if (findUser) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Email should be unique" }] });
    }
    // sinon new user
    const newUser = new User({ ...req.body });

    // hashage password
    const hashedpassword = await bcrypt.hash(password, saltRounds);
    newUser.password = hashedpassword;

    //then wesave user
    await newUser.save();

    // on va créer notre tokenn :mefteeh
    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.SECRET_KEY, // secret key est une variable d'environement
      { expiresIn: "5h" }
    );
    //response
    res.status(200).send({ msg: "User saved", user: newUser, token });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "user not saved" }] });
  }
};

exports.Login = async (req, res) => {
  try {
    //req.body : email , password
    const { email, password } = req.body;
    //test email
    const findUserr = await User.findOne({ email });
    //si mawjoud
    if (!findUserr)
      return res.status(400).send({ errors: [{ msg: "bad credantial" }] });
    //test password
    const comparePass = await bcrypt.compare(password, findUserr.password);
    // si pas  compatible => bad credential
    if (!comparePass)
      return res.status(400).send({ errors: [{ msg: "bad credantial" }] });
    //sinn : login
    // on va créer notre tokenn :mefteeh
    const token = jwt.sign(
      {
        id: findUserr._id,
      },
      process.env.SECRET_KEY, // secret key est une variable d'environement
      { expiresIn: "5h" }
    );
    res.status(200).send({ msg: "Login successfully", user: findUserr, token });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "User not found" }] });
  }
};
exports.Add_pressing = async (req, res) => {
  try {
    //req.body : email password
    const { email, password } = req.body;
    //test email
    const findUser = await User.findOne({ email });
    //si exist => email should be unique
    if (findUser) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Email should be unique" }] });
    }
    // sinon new pressing
    const newUser = new User({ ...req.body });

    // hashage password
    const hashedpassword = await bcrypt.hash(password, saltRounds);
    newUser.password = hashedpassword;

    //then we save pressing
    await newUser.save();

    // on va créer notre tokenn :mefteeh
    // const token = jwt.sign(
    //   {
    //     id: newUser._id,
    //   },
    //   process.env.SECRET_KEY, // secret key est une variable d'environement
    //   { expiresIn: "20h" }
    // );
    // send email with the information
    // email password

    //response
    res.status(200).send({ msg: "Pressing saved", user: newUser });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "Pressing not saved" }] });
  }
};
exports.All_pressings = async (req, res) => {
  try {
    const pressing = await User.find({ role: "pressing" });
    res.status(200).send({ msg: "all pressings", pressing });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "No pressings found" }] });
  }
};
exports.allUsers = async (req, res) => {
  try {
    const user = await User.find();
    // if (req.user.role == "admin")
    res.status(200).send({ msg: "all users", user });
  } catch (error) {
    res.status(500).json({ msg: "erreur", error });
  }
};
