function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  console.log('https://' + req.get('host') + req.url);
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
    console.log('https://' + req.get('host') + req.url);
      return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}
const express = require('express');
const app = express();
// app.use(requireHTTPS);

app.use(express.static("./dist/ui"));

app.get("/*", function(req, res) {
  console.log("hit");
  res.sendFile("index.html", {root: "dist/ui/"}
);
});

// app.listen(process.env.PORT || 8080);

const PORT = process.env.PORT || 8080
app.listen(PORT);
console.log(`started on the PORT:${PORT}`);
