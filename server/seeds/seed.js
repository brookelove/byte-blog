const db = require("../config/connection");
const { Blog } = require("../models");
const cleanDB = require("./cleanDB");
const blogData = require("./blogData.json");

db.once("open", async () => {
  await cleanDB("Blog", "blogs");

  await Blog.insertMany(blogData);

  console.log("Blog seeded!");
  process.exit(0);
});
