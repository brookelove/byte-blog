const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  isHidden: {
    type: Boolean,
  },
  blogAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  img: {
    type: String,
  },
  blogText: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Blog = model("Blog", blogSchema);

module.exports = Blog;
