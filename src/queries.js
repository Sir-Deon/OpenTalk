/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      password
      followers {
        items {
          id
          followerID
          createdAt
          updatedAt
        }
        nextToken
      }
      following {
        items {
          id
          followingID
          createdAt
          updatedAt
        }
        nextToken
      }
      posts {
        items {
          id
          text
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        password
        followers {
          nextToken
        }
        following {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      user {
        id
        name
        email
        password
        followers {
          nextToken
        }
        following {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      text
      image
      likes {
        id
        followingID
        post {
          id
          text
          image
          createdAt
          updatedAt
        }
        comment {
          id
          text
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      comments {
        items {
          id
          text
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          name
          email
          password
          createdAt
          updatedAt
        }
        text
        image
        likes {
          id
          followingID
          createdAt
          updatedAt
        }
        createdAt
        comments {
          nextToken
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      text
      image
      likes {
        id
        followingID
        post {
          id
          text
          image
          createdAt
          updatedAt
        }
        comment {
          id
          text
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      post {
        id
        user {
          id
          name
          email
          password
          createdAt
          updatedAt
        }
        text
        image
        likes {
          id
          followingID
          createdAt
          updatedAt
        }
        createdAt
        comments {
          nextToken
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        image
        likes {
          id
          followingID
          createdAt
          updatedAt
        }
        createdAt
        post {
          id
          text
          image
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFollowers = /* GraphQL */ `
  query GetFollowers($id: ID!) {
    getFollowers(id: $id) {
      id
      followerID
      user {
        id
        name
        email
        password
        followers {
          nextToken
        }
        following {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFollowers = /* GraphQL */ `
  query ListFollowers(
    $filter: ModelFollowersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        followerID
        user {
          id
          name
          email
          password
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFollowing = /* GraphQL */ `
  query GetFollowing($id: ID!) {
    getFollowing(id: $id) {
      id
      followingID
      user {
        id
        name
        email
        password
        followers {
          nextToken
        }
        following {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFollowings = /* GraphQL */ `
  query ListFollowings(
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        followingID
        user {
          id
          name
          email
          password
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLikes = /* GraphQL */ `
  query GetLikes($id: ID!) {
    getLikes(id: $id) {
      id
      followingID
      post {
        id
        user {
          id
          name
          email
          password
          createdAt
          updatedAt
        }
        text
        image
        likes {
          id
          followingID
          createdAt
          updatedAt
        }
        createdAt
        comments {
          nextToken
        }
        updatedAt
      }
      comment {
        id
        text
        image
        likes {
          id
          followingID
          createdAt
          updatedAt
        }
        createdAt
        post {
          id
          text
          image
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        followingID
        post {
          id
          text
          image
          createdAt
          updatedAt
        }
        comment {
          id
          text
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userByEmail = /* GraphQL */ `
  query UserByEmail(
    $email: String
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByEmail(
      email: $email
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        password
        followers {
          nextToken
        }
        following {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
