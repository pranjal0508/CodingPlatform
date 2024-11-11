export default function (req, res, next) {
  if (req.session.isLogin) {
    next();
  } else {
    res.status(401);
    res.send({ message: "You are not authorized" })
  }
}