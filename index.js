const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify = require('slugify');
const replaceTemplate = require('./module/replaceTemplate');

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/overview.html`,
  `utf-8`
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/product.html`,
  `utf-8`
);
const tempCard = fs.readFileSync(`${__dirname}/templates/card.html`, `utf-8`);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, `utf-8`);
let dataObj = JSON.parse(data);

const newData = dataObj.map((product) => ({
  ...product,
  slug: slugify(product.productName, { lower: true }),
}));

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  console.log(query);

  if (pathname === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const cardsHtml = newData
      .map((product) => replaceTemplate(tempCard, product))
      .join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);
  } else if (pathname === '/product') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const product = newData.find((el) => el.slug === query.id);
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
  } else if (pathname === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'iloveDuy',
    });
    res.end('<h1>Page not found</h1>');
  }
});

server.listen(8000, () => {
  console.log('Listening to request');
});
