import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PeopleSchema = new Schema({
  adult: { type: Boolean },
  gender: { type: Number },
  id: { type: Number, required: true, unique: true },
  known_for: [
    {
      backdrop_path: { type: String },
      vote_count: { type: Number },
      vote_average: { type: Number },
      media_type: { type: String },
      first_air_date: { type: String },
      genre_ids: [{ type: Number }],
      id: { type: Number, unique: false },
      name: { type: String },
      origin_country: [{ type: String }],
      original_name: { type: String },
      original_language: { type: String },
      poster_path: { type: String },
      overview: { type: String },
    },
  ],
  known_for_department: { type: String },
  popularity: { type: Number },
  profile_path: { type: String },
  name: { type: String },
});

PeopleSchema.statics.findByMovieDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model("People", PeopleSchema);
