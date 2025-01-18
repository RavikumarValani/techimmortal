import mongoose from "mongoose";
import Career from "../models/career.js";
import JobRequest from "../models/jobRequest.js";

export const get_all = (req, res, next) => {
  Career.find()
    .select("title experience location salary about skill responsibility date _id")
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
    skill: req.body.skill,
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
    .select("title experience location salary about skill responsibility date _id")
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

export const job_rquest = (req, res, next) => {
  const jobrequest = new JobRequest({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    careerId: req.body.careerId,
    myFile: req.file.filename,
  });
  jobrequest
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Job request applied successfully.",
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

export const get_all_job_request = (req, res, next) => {
  JobRequest.find()
  .select("title myFile careerId status comment date _id")
  .exec()
  .then((docs) => {
      console.log(docs);
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

export const delete_job_request = (req, res, next) => {
  const id = req.params.id;
  JobRequest.deleteOne({ _id: id })
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

export const updateStatus = (req, res, next) => {
  const id = req.params.id;
  JobRequest.updateOne(
    { _id: id },
    { $set: { status: req.body.status, comment: req.body.description } }
  )
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Application status update successfully.",
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

export const get_job_count = (req, res, next) => {
  JobRequest.find()
  .select("_id")
  .exec()
  .then((docs) => {
      const response = {
        count: docs.length,
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