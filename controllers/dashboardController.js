const axios = require("axios");

exports.getDashboard = async (req, res) => {
  try {
    const city = req.query.city;

    const weather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );

    const aqi = await axios.get(
      `https://api.waqi.info/feed/${city}/?token=${process.env.AQI_API_KEY}`
    );

    const cityInfo = await axios.get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${city}`
    );

    const news = await axios.get(
      `https://newsapi.org/v2/everything?q=${city}&apiKey=${process.env.NEWS_API_KEY}`
    );

    res.json({
      weather: weather.data.main,
      aqi: aqi.data.data,
      description: cityInfo.data.extract,
      news: news.data.articles
    });

  } catch (error) {
    res.status(500).json("Dashboard data error");
  }
};