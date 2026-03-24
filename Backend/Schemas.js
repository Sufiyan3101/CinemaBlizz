import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
  title: String,
  description: String,
  thumbnail: String,
  videoUrl: String,
});

const BollywoodMovie = mongoose.model("Bollywood", MovieSchema, "Bollywood");
const HollywoodMovie = mongoose.model("Hollywood", MovieSchema, "Hollywood");

const getBollywoodMovies = () => {
  return BollywoodMovie.find({});
};

const getHollywoodMovies = () => {
  return HollywoodMovie.find({});
};

const episodeSchema = new mongoose.Schema({
  episodeTitle: String,
  episodeThumbnail: String,
  description: String,
  videoUrl: String,
});

const seasonSchema = new mongoose.Schema({
  seasonNumber: Number,
  episodes: [episodeSchema],
});

const webSeriesSchema = new mongoose.Schema({
  title: String,
  thumbnail: String,
  description: String,
  seasons: [seasonSchema],
});

const WebSeries = mongoose.model("WebSeries", webSeriesSchema, "Series");

const getwebSeries = () => {
  return WebSeries.find({});
};


const getwebSeriesSeasonsByTitle = async (title) => {
  try {
    const series = await WebSeries.findOne({ title }).select("title seasons");
    return series;
  } catch (error) {
    console.error("Error finding series seasons by title:", error);
    throw new Error("Series not found");
  }
};

const cartoonsSchema = new mongoose.Schema({
  title: String,
  thumbnail: String,
  description: String,
  seasons: [seasonSchema],
})


const Cartoons = mongoose.model("Cartoons", cartoonsSchema, "Cartoons")

const getCartoons = () =>{
  return Cartoons.find({});
}

const getCartoonsSeasonsByTitle = async(title)=>{
  try{
    const cartoons = await Cartoons.findOne({title}).select("title seasons");
    return cartoons;
  }
  catch(error){
    console.log(error);
    console.error("Error finding series seasons by title:", error);
    throw new Error("Series not found");
  }
}


export default {
  BollywoodMovie,
  HollywoodMovie,
  getBollywoodMovies,
  getHollywoodMovies,
  Cartoons,
  getCartoons,
  getCartoonsSeasonsByTitle,
  getwebSeries,
  getwebSeriesSeasonsByTitle,
};