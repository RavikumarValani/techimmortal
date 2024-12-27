import mongoose from "mongoose";
import Portfolio from "../models/portfolio.js";

export const get_all = (req, res, next) => {
  Portfolio.find()
    .select("title url service status description image date _id")
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        portfolio: docs,
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
  const portfolio = new Portfolio({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    url: req.body.url,
    service: req.body.service,
    image: req.file.filename,
    description: req.body.description,
  });
  portfolio
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Portfolio added successfully",
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
  const id = req.params.portfolioId;
  Portfolio.findById(id)
    .select("title url service status description image date _id")
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
          portfolio: doc,
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
  const id = req.params.portfolioId;
  const updateOps = {};
  if(req.file){
    req.body.image = req.file.filename;
  }
  for (const propName in req.body) {
    updateOps[propName] = req.body[propName];
  }
  Portfolio.updateOne({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Portfolio updated",
        success: true
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

export const deleteBlog = (req, res, next) => {
  const id = req.params.portfolioId;
  Portfolio.deleteOne({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Portfolio deleted",
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
