import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const user_signup = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "User already exist.",
          success: true,
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(200).json({
              message: err,
              success: false,
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash,
            });
            user
              .save()
              .then((result) => {
                console.log(result);
                res.status(201).json({
                  message: "User added successfully",
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(200).json({
                  message: err,
                  success: false,
                });
              });
          }
        });
      }
    });
};

export const user_login = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(200).json({
          message: "Email not found.",
          success: false,
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(200).json({
            message: "Incorrect Password.",
            success: false,
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              userId: user[0]._id,
            },
            process.env.JWT_KEY,
            {
              expiresIn: "1h",
            }
          );
          return res.status(200).json({
            message: "Login successful",
            token: token,
            success: true,
          });
        }
        res.status(200).json({
          message: "Incorrect Password.",
          success: false,
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({
        message: err,
        success: false,
      });
    });
};

// export const user_delete = (req, res, next) => {
//   User.deleteOne({ _id: req.params.userId })
//     .exec()
//     .then(result => {
//       res.status(200).json({
//         message: "User deleted"
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// };
