import express from "express";
import asyncHandler from "express-async-handler";
import { trending } from "./trendingData";
import trendingModel from "./trendingModel";

const router = express.Router();
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const trending = await trendingModel.find();
    res.status(200).json(trending);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const trending = await trendingModel.findByMovieDBId(id);
    if (trending) {
      res.status(200).json(trending);
    } else {
      res.status(404).json({
        message: "The resource you requested could not be found.",
        status_code: 404,
      });
    }
  })
);
export default router;
