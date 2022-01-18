const superagent = require("superagent");
require("dotenv").config();

function photo(obj) {
  this.imgUrl = obj.url;
  this.title = obj.title;
  this.date = obj.date;
  this.explanation = obj.explanation;
  this.credit = obj.copyright;
}

async function handler(req, res) {
  let url = `https://api.nasa.gov/planetary/apod?&start_date=2022-01-01&end_date=2022-01-18`;
  let data = await superagent
    .get(url)
    .query({ api_key: process.env.NASA_API_KEY })
    .catch();

  console.log(data);

  let photos = data.body.map(obj => new photo(obj));

  res.render("index", { photos: photos })
}
module.exports = handler;

// https://api.nasa.gov/planetary/apod?