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
  let startDate = new Date();
  let day = String(startDate.getDate()).padStart(2, '0');
  let month = String(startDate.getMonth() + 1).padStart(2, '0');
  let year = startDate.getFullYear();

  if(month == "01") {
    month = "12";
    year--;
  }

  startDate = year + '-' + month + '-' + day;

  let url = `https://api.nasa.gov/planetary/apod?&start_date=${startDate}`;
  let data = await superagent
    .get(url)
    .query({ api_key: process.env.NASA_API_KEY })
    .catch();

  let photos = data.body.reverse().map(obj => new photo(obj));

  res.render("index", { photos: photos })
}
module.exports = handler;