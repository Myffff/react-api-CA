import userModel from "../api/users/userModel";
import genreModel from "../api/genres/genreModel";
import users from "./users";
import genres from "./genres";
import dotenv from "dotenv";
import movieModel from "../api/movies/movieModel";
import movies from "./movies.js";
import trendingModel from "../api/trending/trendingModel";
import trending from "./trending.js";
import peopleModel from "../api/people/peopleModel";
import people from "./people.js";

dotenv.config();

// deletes all user documents in collection and inserts test data
async function loadUsers() {
  console.log("load user Data");
  try {
    await userModel.deleteMany();
    await users.forEach((user) => userModel.create(user));
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}

async function loadGenres() {
  console.log("load genres Data");
  try {
    await genreModel.deleteMany();
    await genreModel.collection.insertMany(genres);
    console.info(`${genres.length} genres were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load genres Data: ${err}`);
  }
}

// deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log("load seed data");
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

export async function loadTrending() {
  console.log("load seed data");
  console.log(trending.length);
  try {
    await trendingModel.deleteMany();
    await trendingModel.collection.insertMany(trending);
    console.info(`${trending.length} Trending were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load trending Data: ${err}`);
  }
}

export async function loadPeople() {
  console.log("load seed data");
  console.log(people.length);
  try {
    await peopleModel.deleteMany();
    await peopleModel.collection.insertMany(people);
    console.info(`${people.length} people were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load people Data: ${err}`);
  }
}

if (process.env.SEED_DB) {
  loadUsers();
  loadGenres();
  loadMovies();
  loadTrending();
  loadPeople();
}
