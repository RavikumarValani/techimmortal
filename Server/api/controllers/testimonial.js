import mongoose from "mongoose";
import Testimonial from "../models/testimonial.js";

export const get_all = (req, res, next) => {
  Testimonial.find()
    .select("name position rating status description image date _id")
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        testimonial: docs,
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
  const testimonial = new Testimonial({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    position: req.body.position,
    rating: req.body.rating,
    image: req.file ? req.file.filename : "default_review.jpeg",
    description: req.body.description,
  });
  testimonial
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Testimonial added successfully",
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
  const id = req.params.testimonialId;
  Testimonial.findById(id)
    .select("name position rating status description image date _id")
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
          testimonial: doc,
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
  const id = req.params.testimonialId;
  const updateOps = {};
  if (req.file) {
    req.body.image = req.file.filename;
  }
  for (const propName in req.body) {
    updateOps[propName] = req.body[propName];
  }
  Testimonial.updateOne({ _id: id }, { $set: updateOps })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Testimonial updated",
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

export const deleteBlog = (req, res, next) => {
  const id = req.params.testimonialId;
  Testimonial.deleteOne({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Testimonial deleted",
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
