const express = require("express");
const {
  Register,
  Login,
  Add_pressing,
  allUsers,
  All_pressings,
} = require("../controllers/user.controllers");
const {
  validation,
  registerValidate,
  loginValidate,
} = require("../middleware/validateUser");
const isAuth = require("../middleware/isAuth");
const isAdmin = require("../middleware/isAdmin");
const User = require("../models/User");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("testing...");
});
// annotation
/*
@method:post
@path:http:localhost:8080/api/user/register
@paramater:req.body
public
*/
userRouter.post("/register", registerValidate(), validation, Register);

/*
@method:post
@path:http:localhost:8080/api/user/login
@paramater:req.body
public
*/
userRouter.post("/login", loginValidate(), validation, Login);

/*
@method: GET
@ path:http:localhost:5000/api/user/current
@ parameter: req.headers  
public
*/
userRouter.get("/current", isAuth, (req, res) => {
  res.send({ msg: "authorized", user: req.user });
});

/*
@method: PUT
@ path:http:localhost:5000/api/user/update
@ parameter: req.body  
private
*/
userRouter.put("/update/:Id", async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  try {
    const id = req.params.Id;

    const user = await User.findOneAndUpdate(
      { _id: id },
      { $set: { ...req.body } }
    );
    // const token = jwt.sign(
    //   {
    //     id: user._id,
    //   },
    //   process.env.SECRET_KEY, // secret key est une variable d'environement
    //   { expiresIn: "5h" }
    // );
    res.status(200).send({ user });
  } catch (error) {
    res.status(500).send("gggggg");
  }
});

/*
@method: DELETE
@ path:http:localhost:5000/api/user/delete
@ parameter: req.body  
private
*/
userRouter.delete("/delete/Id", isAuth, async (req, res) => {
  try {
    const id = req.params.Id;
    const user = await User.findOneAndDelete({ _id: id });
    res.status(200).send({ msg: "User deleted succesfuly", user });
  } catch (error) {
    res.status(500).json({ msg: "user not found", error });
  }
});

/*
@method: GET
@ path:http:localhost:5000/api/user/users
@ parameter: req.Headers  
private
*/
userRouter.get("/utilisateurs", isAuth, isAdmin, allUsers);

/*
@method: GET
@ path:http:localhost:5000/api/user/users
@ parameter: req.Headers  
private
*/
userRouter.get("/pressings", isAuth, isAdmin, All_pressings);

/*
@method: POST
@ path:http:localhost:5000/api/user/add_pressing
@ parameter: req.body  
public
*/
userRouter.post("/add_pressing", isAuth, isAdmin, Add_pressing);

module.exports = userRouter;
