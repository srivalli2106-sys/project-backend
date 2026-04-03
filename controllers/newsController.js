const axios = require("axios");

exports.getNews = async (req, res) => {
  const city = req.query.city;

  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=${city}&apiKey=${process.env.NEWS_API_KEY}`
  );

  res.json(response.data.articles);
};