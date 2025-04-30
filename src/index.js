import express from "express";
import { pageHome, textList, count } from "./pages/home.js";
import { pageAbout } from "./pages/about.js";
import { pagePricing } from "./pages/pricing.js";
import { pageUserInner } from "./pages/user.js";
import { page404 } from "./pages/404.js";
const app = express();
const port = 3000;

// kodas kuris padeda gauti post duomenis

app.use(express.static("public"));

app.get("/", pageHome);
app.get("/about", pageAbout);
app.get("/users/:userID", pageUserInner);
app.get("/pricing", pagePricing);

app.all("/api", (req, res) => {
  res.status(404).send("Toks adresas negalimas");
});

app.post("/api/text/", (req, res) => {
  // textList.push();
  res.send("Sukurtas naujas tekstas");
});

app.put("/api/text/:index/:text", (req, res) => {
  textList[req.params.index] = req.params.text.replaceAll("-", " ");
  res.send("Tekstas atnaujintas");
});

app.put("/api/update-count/:number", (req, res) => {
  const n = req.params.number;
  if (!isNaN(n)) {
    count.value = n;
  }
  res.send("Gautas skaičius: " + n);
});

app.get("*error", page404);

app.listen(port, () => {
  console.log(`Server is running: http://localhost:${port}/`);
});
