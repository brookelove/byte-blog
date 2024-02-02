const typeDefs = `
  type Blog {
    _id: ID
    blogText: String
    blogAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
  }

  type Query {
    blogs: [Blog]!
    blog(blogId: ID!): Blog
  }

  type Mutation {
    addBlog(blogText: String!, blogAuthor: String!): Blog
    addComment(blogId: ID!, commentText: String!): Blog
    removeBlog(blogId: ID!): Blog
    removeComment(blogId: ID!, commentId: ID!): Blog
  }
`;

module.exports = typeDefs;
