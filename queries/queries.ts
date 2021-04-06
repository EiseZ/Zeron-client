import { gql } from "@apollo/client";

export const PROFILE_QUERY = gql`
  {
    profile {
      error
      user {
        id
        username
        createdAt
      }
      posts {
        id
        title
        body
        createdAt
      }
    }
  }
`;

export const POSTS_QUERY = gql`
  {
    posts {
      id
      title
      body
      userID
      createdAt
    }
  }
`;

export const ME_QUERY = gql`
  {
    me {
      error
      user {
        id
        username
        createdAt
      }
    }
  }
`;

export const USER_BY_ID_QUERY = gql`
  query($id: Int!) {
    userById(id: $id) {
      id
      username
      createdAt
    }
  }
`;

export const LOGIN_MUT = gql`
  mutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      error
      user {
        id
        username
        createdAt
      }
    }
  }
`;

export const CREATE_POST_MUT = gql`
  mutation($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      error
      post {
        id
        title
        body
        userID
        createdAt
      }
    }
  }
`;

export const LOGOUT_MUT = gql`
  mutation {
    logout
  }
`;

export const DELETE_POST_MUT = gql`
  mutation deletePost($id: Int!) {
    deletePost(id: $id) {
      error
      post {
        id
        title
        body
        userID
        createdAt
      }
    }
  }
`;
