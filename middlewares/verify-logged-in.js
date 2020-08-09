const jwt = require("jsonwebtoken");
const secret = process.env.SECRET || "Chuck-Norris";

// Verify logged in with token:
function verifyLoggedIn(request, response, next) {
  const token = request.headers.authorization;

  // If token doesn't exist:
  if (!token) {
    response.status(401).send("You are not logged-in");
    return;
  }

  //if token illegal or expired:
  jwt.verify(token, secret, (err) => {
    if (err) {
      response.status(401).send("You are not logged-in");
      return;
    }
    // if user is logged in:
    next();
  });
}

module.exports = verifyLoggedIn;
