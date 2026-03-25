import express from 'express';
import cors from 'cors';
import {
  dbconnection
} from './dbconnection.js';
import schema from './Schemas.js';
import router from './Payment.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors({
  origin: 'https://cinemablizzz.onrender.com'
}));
app.use(express.json());

// connect DB
dbconnection();



// Fetch Bollywood Movies
app.get('/bollywood/movies', async (req, res) => {
  try {
    const movies = await schema.getBollywoodMovies();
    console.log("Fetched Bollywood movies:", movies);
    res.json(movies);
  } catch (error) {
    console.error("Error retrieving movies:", error);
    res.status(500).send({ error: "Error retrieving movies" });
  }
});

// Fetch Hollywood Movies
app.get('/hollywood/movies', async (req, res) => {
  try {
    const movies = await schema.getHollywoodMovies();
    console.log("Fetched Hollywood movies:", movies);
    res.json(movies);
  } catch (error) {
    console.error("Error retrieving movies:", error);
    res.status(500).send({ error: "Error retrieving movies" });
  }
});

// Fetch Web Series
app.get('/webseries', async (req, res) => {
  try {
    const series = await schema.getwebSeries();
    console.log("Series Fetched:", series);
    res.json(series);
  } catch (error) {
    console.error("Error Retrieving Series:", error);
    res.status(500).send({ error: "Error Retrieving Series" });
  }
});

// Fetch Web Series Seasons
app.get("/webseries/:title/seasons", async (req, res) => {
  try {
    const { title } = req.params;
    const series = await schema.getwebSeriesSeasonsByTitle(title);
    if (!series) {
      return res.status(404).json({ message: "Series not found" });
    }
    res.json(series);
  } catch (error) {
    console.error("Error fetching series:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Fetch Cartoons
app.get('/cartoons', async (req, res) => {
  try {
    const cartoons = await schema.getCartoons();
    res.json(cartoons);
  } catch (error) {
    console.error("Error retrieving Cartoons:", error);
    res.status(500).send({ error: "Error retrieving Cartoons" });
  }
});

// Fetch Cartoon Seasons
app.get('/cartoons/:title/seasons', async (req, res) => {
  try {
    const { title } = req.params;
    const cartoons = await schema.getCartoonsSeasonsByTitle(title);
    if (!cartoons) {
      return res.status(404).json({ message: "Cartoon not found" });
    }
    res.json(cartoons);
  } catch (error) {
    console.error("Error fetching cartoon seasons:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// POST routes for adding movies
app.post('/bollywood/movies', async (req, res) => {
  try {
    const newMovie = req.body;
    const insertedMovie = await db.insertBollywoodMovie(newMovie);
    res.status(201).json(insertedMovie);
  } catch (err) {
    console.error("Error adding movie:", err);
    res.status(500).json({ error: "Error in adding movie" });
  }
});

app.post('/hollywood/movies', async (req, res) => {
  try {
    const newMovie = req.body;
    const insertedMovie = await db.insertHollywoodMovie(newMovie);
    res.status(201).json(insertedMovie);
  } catch (err) {
    console.error("Error adding movie:", err);
    res.status(500).json({ error: "Error in adding movie" });
  }
});

// DELETE routes for deleting movies
app.delete('/bollywood/movies/:title', async (req, res) => {
  try {
    const { title } = req.params;
    const deletedMovie = await db.deleteBollywoodMovieByTitle(title);
    if (deletedMovie) {
      res.status(200).json({ message: 'Movie Deleted Successfully' });
    } else {
      res.status(404).json({ message: 'Movie Not Found' });
    }
  } catch (error) {
    console.error("Error Deleting Movie:", error);
    res.status(500).json({ error: 'Failed To Delete Movie' });
  }
});

app.delete('/hollywood/movies/:title', async (req, res) => {
  try {
    const { title } = req.params;
    const deletedMovie = await db.deleteHollywoodMovieByTitle(title);
    if (deletedMovie) {
      res.status(200).json({ message: 'Movie Deleted Successfully' });
    } else {
      res.status(404).json({ message: 'Movie Not Found' });
    }
  } catch (error) {
    console.log("Error Deleting Movie:", error);
    res.status(500).json({ error: 'Failed To Delete Movie' });
  }
});

app.use("/api", router);

// Start the server
app.listen(process.env.PORT, () => {
  console.log("Server is running on port 8000");
});
