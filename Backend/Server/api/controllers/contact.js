import mongoose from "mongoose";
import Contact from "../models/contact.js";

export const get_all = (req, res, next) => {
  Contact.find()
    .select(
      "name status description email status phone company message date _id"
    )
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        contact: docs,
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

export const get_status = async (req, res, next) => {
  const now = new Date();
  const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const previousMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const previousMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0);
  const currentMonthCount = await Contact.countDocuments({
    date: { $gte: currentMonthStart },
  });
  const previousMonthCount = await Contact.countDocuments({
    date: { $gte: previousMonthStart, $lt: previousMonthEnd },
  });
  let percentageIncrease = 0;
  if (previousMonthCount > 0) {
    percentageIncrease =
      ((currentMonthCount - previousMonthCount) / previousMonthCount) * 100;
  } else if (currentMonthCount > 0) {
    percentageIncrease = 100; // 100% increase when starting from 0
  }
  const count = await Contact.countDocuments();
  const response = {
    count: count,
    per: percentageIncrease,
  };
  res.status(200).json(response);
};

export const create = (req, res, next) => {
  const contact = new Contact({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
    company: req.body.company,
  });
  contact
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Contact added successfully",
        success: true,
      });
      console.log(1444);
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({
        message: err,
        success: false,
      });
    });
};

export const updateStatus = (req, res, next) => {
  const id = req.params.contactId;
  Contact.updateOne(
    { _id: id },
    { $set: { status: req.body.status, description: req.body.description } }
  )
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Contact status update successfully.",
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({
        message: "Something went wrong.",
        success: false,
      });
    });
};
