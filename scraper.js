const rp = require('request-promise');
const cheerio = require('cheerio');
const URL = 'https://www.codewars.com/users/leaderboard';

const options = {
  uri: URL,
  transform: function (body) {
    return cheerio.load(body);
  }
};

rp(options)
  .then(($) => {
    console.log($);
    console.log($('a').text())
  })
  .catch((err) => {
    console.log(err);
  });
