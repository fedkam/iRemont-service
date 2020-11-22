
require("babel-register")({
    presets: ["es2015", "react"]
  });



const router = require('../routing/clear-routing').default;
const Sitemap = require('react-router-sitemap').default;



(
    new Sitemap(router)
        .build('https://fedoskamcha.com')
        .save('./public/sitemap.xml')
);