import express from "express";

const app = express();
const seen = new Set(); // use your database in production
const coins = new Map();

app.get("/api/adsun-reward", (req, res) => {
  if (req.query.key !== process.env.REWARD_KEY) return res.status(403).send("forbidden");
  const userId = String(req.query.userid || "");
  if (!/^\d+$/.test(userId)) return res.status(400).send("bad user");
  const id = `${userId}:${req.query.block}:${req.query.ts}`;
  if (seen.has(id)) return res.send("duplicate");
  seen.add(id);
  coins.set(userId, (coins.get(userId) || 0) + 100);
  res.send("ok");
});

app.listen(process.env.PORT || 3000, () => console.log("listening"));
