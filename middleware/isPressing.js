const isPressing = (req, res, next) => {
  if (req.user.pressing == "pressing") {
    next();
  }
  return res.status(401).send("not authorized");
};

module.exports = isPressing;
