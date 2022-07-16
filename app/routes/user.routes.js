const { authJwt } = require("../middleware");
const { verifySignUp } = require("../middleware");
const controller = require("../controllers/user.controller");
const db = require("../models");
const User = db.user;
module.exports = function(app) {
  var router = require("express").Router()
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  // var router = require("express").Router();  /////after user//////
  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  app.post(
    "/api/user/create",
    // [
    //   verifySignUp.checkDuplicateUsernameOrEmail,
    //   verifySignUp.checkRolesExisted
    // ],
    controller.create
  );
  
  // app.post("api/student/add",controller.create);

  app.get("/api/user/watch",controller.findAll);

  app.get("/api/user/search/:id", controller.findOne);
 
  app.put("/api/user/update/:id", controller.update);

  app.delete('/api/user/:id', function (req, res) {
    const id = req.params.id;

    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  });

  // app.delete("/api/user/delete/:id", controller.delete);
  
  app.delete("/api/user/delete", function (req, res) {
    User.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Tutorials were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  });

  app.use("/api/user",router)
};