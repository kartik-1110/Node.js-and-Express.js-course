// authorization setup
// providing access to specific links only when user is present

const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "Alex") {
    req.user = { name: "Alex", id: 3 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
