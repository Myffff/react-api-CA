import express from "express";
import seriesModel from "./seriesModel";
import asyncHandler from "express-async-handler";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const series = await seriesModel.find();
    res.status(200).json(series);
  })
);

// Get tv details
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const series = await seriesModel.findByMovieDBId(id);
    if (series) {
      res.status(200).json(series);
    } else {
      res.status(404).json({
        message: "The resource you requested could not be found.",
        status_code: 404
      });
    }
  })
);

export default router;
