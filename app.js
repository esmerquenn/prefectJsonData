const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const musicFolder = path.join(__dirname, "./music");

const musicFiles = fs
  .readdirSync(musicFolder)
  .filter((file) => file.endsWith(".mp3"));

app.get("/", (req, res) => {
  const randomIndex = Math.floor(Math.random() * musicFiles.length);
  const randomMusic = musicFiles[randomIndex];
  const musicPath = path.join(musicFolder, randomMusic);
  res.sendFile(musicPath);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server ${PORT}`);
});
