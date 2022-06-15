const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "sagar") {
    req.user = {
      id: new Date().getTime().toString(),
      name: user.toUpperCase(),
    };
    console.log("authorized");
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};
module.exports = { authorize };
