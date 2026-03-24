import mongoose from 'mongoose';
import schema from './Schemas.js';
import dotenv from 'dotenv';
dotenv.config();

const dbconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};



const insertBollywoodMovie = (movieData) => {
  const newMovie = new schema.BollywoodMovie(movieData);
  return newMovie.save();
}

const insertHollywoodMovie = (movieData) => {
  const newMovie = new schema.HollywoodMovie(movieData);
  return newMovie.save();
}

const deleteBollywoodMovieByTitle = async (title) => {
  return await schema.BollywoodMovie.findOneAndDelete({ title });
};

const deleteHollywoodMovieByTitle = async (title) =>{
  return await schema.HollywoodMovie.findOneAndDelete({ title });
}

export {
  dbconnection,
  insertBollywoodMovie,
  insertHollywoodMovie,
  deleteBollywoodMovieByTitle,
  deleteHollywoodMovieByTitle
};
