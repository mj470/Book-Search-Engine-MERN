const { GraphQL} = require('graphql');

const typeDefs = GraphQL`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Auth {
        token: ID!
        user: User
    }
    type Book {
        bookId: ID!
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }
    input BookInput {
        bookId: ID!
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }
    type Query {
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(newBook: BookInput!): User
        removeBook(bookId: ID!): User
    }`;

module.exports = typeDefs;
