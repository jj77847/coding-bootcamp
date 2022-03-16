const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type School {
    _id: ID
    name: String!
    location: String!
    studentCount: Int!
    classes: [Class]
  }

  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
    professor: Professor
  }

  type Professor {
    _id: ID
    name: String
    studentScore: Float
    officeHours: String
    officeLocation: String
    classes: [Class]
  }

  type Query {
    schools: [School]
    classes: [Class]
    professors: [Professor]
    singleClass(classId: ID!): Class
  }

  input AddSchoolInput {
    name: String!
    location: String!
    studentCount: Int!
  }

  input UpdateClassInput {
    _id: ID!
    name: String
    building: String
    creditHours: Int
    professor: ID
  }

  type Mutation {
    addSchool(input: AddSchoolInput!): School!
    updateClass(input: UpdateClassInput!): Class!
  }
`;

module.exports = typeDefs;
