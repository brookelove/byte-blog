const { Blog } = require("../models");

module.exports = {
  async createBlog({ body }, res) {
    const blog = await Blog.create(body);

    if (!blog) {
      return res.status(400).json({ message: "Unable to create blog" });
    }

    res.status(200).json(blog);
  },
  //   async createVote(req, res) {
  //     const vote = await Matchup.findOneAndUpdate(
  //       { _id: req.body.id },
  //       { $inc: { [`tech${req.body.techNum}_votes`]: 1 } },
  //       { new: true }
  //     );

  //     if (!vote) {
  //       return res.status(400).json({ message: 'Unable to vote on matchup' });
  //     }

  //     res.status(200).json(vote);
  //   },
  async getAllBlogs(req, res) {
    const allBlogs = await Blog.find({});

    if (!allBlogs) {
      return res.status(400).json({ message: "No blogs found" });
    }

    res.status(200).json(allBlogs);
  },
  async getBlog({ params }, res) {
    const blog = await Blog.findOne({ _id: params.id });

    if (!blog) {
      return res.status(400).json({ message: "No blog found by that id" });
    }

    res.status(200).json(blog);
  },
};
