import mongoose from "mongoose";
import Stats from "../models/stats.js";

export const get_stats = (req, res, next) => {
    Stats.findOne()
    .select("_id member_count project_count")
    .exec()
    .then((docs) => {
        if(!docs){
            docs = {project_count: 0, member_count: 0};
        }
        const response = {
            stats: docs,
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

export const update = (req, res, next) => {
  const id = req.params.id;
  if(id){
      const updateOps = {};
      for (const propName in req.body) {
        updateOps[propName] = req.body[propName];
      }
      Stats.updateOne({ _id: id }, { $set: updateOps })
        .exec()
        .then((result) => {
            Stats.findById(id)
            .exec()
            .then((response) => {
                res.status(200).json({
                    stats: response,
                    success: true,
                });
            })
        })
        .catch((err) => {
          console.log(err);
          res.status(200).json({
            message: "Something went wrong.",
            success: false
          });
        });
  } else {
    const stats = new Stats({
        _id: new mongoose.Types.ObjectId(),
        project_count: req.body.project_count || 0,
        member_count: req.body.member_count || 0,
      });
      stats
        .save()
        .then((result) => {
          console.log(result);
          res.status(201).json({
            stats: result,
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
  }
};
