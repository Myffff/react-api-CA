import express from "express";
import asyncHandler from "express-async-handler";
import { people } from "./peopleData";
import peopleModel from "./peopleModel";

const router = express.Router();
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const people = await peopleModel.find();
    res.status(200).json(people);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const people = await peopleModel.findByMovieDBId(id);
    if (people) {
      res.status(200).json(people);
    } else {
      res.status(404).json({
        message: "The resource you requested could not be found.",
        status_code: 404,
      });
    }
  })
);
export default router;
