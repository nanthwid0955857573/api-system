const { response } = require("express");
const db = require("../models");
const Student = db.student;

exports.add = (req, res) => {
    // Save User to Database
    Student.create({
    id:req.body.id,
    s_id:req.body.student_id,
    s_major:req.body.student_major,
    s_faculty:req.body.student_faculty,
    s_group:req.body.student_group,
    s_name:req.body.student_name,
    s_lastname:req.body.student_lastname
    }).then(user => {
      res.send({ message: "User registered successfully!" });
      // console.log('user',user);
      //   if (req.body.student_id) {
      //     Role.findAll({
      //       where: {
      //         name: {
      //           [Op.or]: req.body.student_id
      //         }
      //       }
      //     }).then(roles => {
      //       // user.setRoles(roles).then(() => {
      //         res.send({ message: "this user " + `${user}` + " has been registered" });
      //     });
      //   } else {
      //     // user role = 1
      //     // user.setRoles([1]).then(() => {
      //       res.send({ message: "User registered successfully! hello there" });
      //     // });
      //   }
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.getReader = (req, res) => {
    Student.findOne({
      where: {
        s_id:req.body.student_id
      }
    })
      .then(response => {
        if (!response) {
          return res.status(404).send({ message: "Reader Not found." });
        }
          res.status(200).send({
              response
          });
 
      }).catch(err => {
        res.status(500).send({ message: err.message });
      });
  };