import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TrendingSchema = new Schema({
  adult: { type: Boolean },
  id: { type: Number, required: true, unique: true },
  poster_path: { type: String },
  overview: { type: String },
  release_date: { type: String },
  original_title: { type: String },
  genre_ids: [{ type: Number }],
  original_language: { type: String },
  title: { type: String },
  backdrop_path: { type: String },
  popularity: { type: Number },
  vote_count: { type: Number },
  video: { type: Boolean },
  vote_average: { type: Number },
  media_type: { type: String },
});

TrendingSchema.statics.findByMovieDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model("Trending", TrendingSchema);
