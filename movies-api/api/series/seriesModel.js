import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SeriesSchema = new Schema({
  first_air_date: { type: String },
  id: { type: Number, required: true, unique: true },
  backdrop_path: { type: String },
  overview: { type: String },
  origin_country: { type: String },
  origin_name: { type: String },
  genre_ids: [{ type: Number }],
  original_language: { type: String },
  name: { type: String },
  poster_path: { type: String },
  popularity: { type: Number },
  vote_count: { type: Number },
  vote_average: { type: Number }
});

SeriesSchema.statics.findByMovieDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model("TV Series", SeriesSchema);
