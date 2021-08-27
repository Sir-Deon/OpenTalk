/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createFollowers = /* GraphQL */ `
  mutation CreateFollowers(
    $input: CreateFollowersInput!
    $condition: ModelFollowersConditionInput
  ) {
    createFollowers(input: $input, condition: $condition) {
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
export const updateFollowers = /* GraphQL */ `
  mutation UpdateFollowers(
    $input: UpdateFollowersInput!
    $condition: ModelFollowersConditionInput
  ) {
    updateFollowers(input: $input, condition: $condition) {
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
export const deleteFollowers = /* GraphQL */ `
  mutation DeleteFollowers(
    $input: DeleteFollowersInput!
    $condition: ModelFollowersConditionInput
  ) {
    deleteFollowers(input: $input, condition: $condition) {
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
export const createFollowing = /* GraphQL */ `
  mutation CreateFollowing(
    $input: CreateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    createFollowing(input: $input, condition: $condition) {
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
export const updateFollowing = /* GraphQL */ `
  mutation UpdateFollowing(
    $input: UpdateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    updateFollowing(input: $input, condition: $condition) {
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
export const deleteFollowing = /* GraphQL */ `
  mutation DeleteFollowing(
    $input: DeleteFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    deleteFollowing(input: $input, condition: $condition) {
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
export const createLikes = /* GraphQL */ `
  mutation CreateLikes(
    $input: CreateLikesInput!
    $condition: ModelLikesConditionInput
  ) {
    createLikes(input: $input, condition: $condition) {
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
export const updateLikes = /* GraphQL */ `
  mutation UpdateLikes(
    $input: UpdateLikesInput!
    $condition: ModelLikesConditionInput
  ) {
    updateLikes(input: $input, condition: $condition) {
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
export const deleteLikes = /* GraphQL */ `
  mutation DeleteLikes(
    $input: DeleteLikesInput!
    $condition: ModelLikesConditionInput
  ) {
    deleteLikes(input: $input, condition: $condition) {
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
