import mongoose from "mongoose";
import Career from "../models/career.js";

export const get_all = (req, res, next) => {
  Career.find()
    .select("title experience location salary about responsibility date _id")
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        careers: docs,
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({
        message: err,
        success: false,
      });
    });
};

export const create = (req, res, next) => {
  const career = new Career({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    experience: req.body.experience,
    location: req.body.location,
    salary: req.body.salary,
    about: req.body.about,
    responsibility: req.body.responsibility,
    description: req.body.description,
  });
  career
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Career added successfully.",
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(201).json({
        message: err,
        success: false,
      });
    });
};

export const get_one = (req, res, next) => {
  const id = req.params.careerId;
  Career.findById(id)
    .select("title experience location salary about responsibility date _id")
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
          career: doc,
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

export const update = (req, res, next) => {
  const id = req.params.careerId;
  const updateOps = {};
  for (const propName in req.body) {
    updateOps[propName] = req.body[propName];
  }
  Career.updateOne({ _id: id }, { $set: updateOps })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Career updated",
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({
        message: "Unable to update career.",
        success: true,
      });
    });
};


export const deleteCareer = (req, res, next) => {
  const id = req.params.careerId;
  Career.deleteOne({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Career deleted",
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
