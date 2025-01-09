import mongoose from "mongoose";
import Service from "../models/service.js";

export const get_all = (req, res, next) => {
    Service.find()
    .select("title sort_order date _id")
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        service: docs,
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

export const getServiceBySorting = (req, res, next) => {
    Service.find()
    .select("title slug")
    .sort({ sort_order: 1 })
    .exec()
    .then((docs) => {
      const response = {
        service: docs,
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
    console.log(req.body);
  const service = new Service({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    slug: req.body.title.toLowerCase().replace(/\s+/g, '-'),
    sort_order: req.body.sort_order,
  });
  service
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Service added successfully",
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
  const id = req.params.id;
  Service.findById(id)
    .select("title sort_order date _id")
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
          service: doc,
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
  const id = req.params.id;
  const updateOps = {};
  if(req.body.title){
    req.body.slug = req.body.title.toLowerCase().replace(/\s+/g, '-');
  }
  for (const propName in req.body) {
    updateOps[propName] = req.body[propName];
  }
  Service.updateOne({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Service updated",
        success: true
      });
    })
    .catch(err => {
      console.log(err);
      res.status(200).json({
        message: "Something went wrong.",
        success: false
      });
    });
};

export const deleteService = (req, res, next) => {
  const id = req.params.id;
  Service.deleteOne({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Service deleted",
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
