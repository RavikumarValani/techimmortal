import mongoose from "mongoose";
import Blog from "../models/blog.js";

export const get_all = (req, res, next) => {
  Blog.find()
    .select("title author status description image date _id")
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        blogs: docs,
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
  const blog = new Blog({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    author: req.body.author,
    image: req.file.filename,
    description: req.body.description,
  });
  blog
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Blog added successfully.",
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
  const id = req.params.blogId;
  Blog.findById(id)
    .select("title author status description image date _id")
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
          blog: doc,
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
  const id = req.params.blogId;
  const updateOps = {};
  if (req.file) {
    req.body.image = req.file.filename;
  }
  for (const propName in req.body) {
    updateOps[propName] = req.body[propName];
  }
  Blog.updateOne({ _id: id }, { $set: updateOps })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Blog updated",
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({
        message: "Unable to update blog.",
        success: true,
      });
    });
};

export const deleteBlog = (req, res, next) => {
  const id = req.params.blogId;
  Blog.deleteOne({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Blog deleted",
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
