import express from "express";
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./favicon.ico" />
    <link rel="icon" type="image/png" href="./favicon/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="./favicon/favicon.svg" />
    <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="MyWebSite" />
    <link rel="manifest" href="./favicon/site.webmanifest" />
    <link rel="stylesheet" href="/css/main.css" />
    <title>Express.JS</title>
</head>
<body>
    <h1> Labas rytas Lietuva!!!</h1>    
    <script src="/js/main.js"></script>
</body>
</html>`);
});

app.get("/about", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./favicon.ico" />
    <link rel="icon" type="image/png" href="./favicon/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="./favicon/favicon.svg" />
    <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="MyWebSite" />
    <link rel="manifest" href="./favicon/site.webmanifest" />
    <link rel="stylesheet" href="/css/main.css" />
    <title>Express.JS</title>
</head>
<body>
    <h1>About</h1>
    <p>Page is running</p>    
    <script src="/js/main.js"></script>
</body>
</html>`);
});

app.get("/users/:userID", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./favicon.ico" />
    <link rel="icon" type="image/png" href="./favicon/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="./favicon/favicon.svg" />
    <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="MyWebSite" />
    <link rel="manifest" href="./favicon/site.webmanifest" />
    <link rel="stylesheet" href="/css/main.css" />
    <title>Express.JS</title>
</head>
<body>
    <h1>User ID: ${req.params.userID}</h1>
    <script src="/js/main.js"></script>
</body>
</html>`);
});

app.get("*error", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./favicon.ico" />
    <link rel="icon" type="image/png" href="./favicon/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="./favicon/favicon.svg" />
    <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="MyWebSite" />
    <link rel="manifest" href="./favicon/site.webmanifest" />
    <link rel="stylesheet" href="/css/main.css" />
    <title>Express.JS</title>
</head>
<body>
    <h1>404</h1>
    <p>Page not found</p>    
    <script src="/js/main.js"></script>
</body>
</html>`);
});

app.listen(port, () => {
  console.log(`Server is running: http://localhost:${port}/`);
});
