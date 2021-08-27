/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateFollowers = /* GraphQL */ `
  subscription OnCreateFollowers {
    onCreateFollowers {
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
export const onUpdateFollowers = /* GraphQL */ `
  subscription OnUpdateFollowers {
    onUpdateFollowers {
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
export const onDeleteFollowers = /* GraphQL */ `
  subscription OnDeleteFollowers {
    onDeleteFollowers {
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
export const onCreateFollowing = /* GraphQL */ `
  subscription OnCreateFollowing {
    onCreateFollowing {
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
export const onUpdateFollowing = /* GraphQL */ `
  subscription OnUpdateFollowing {
    onUpdateFollowing {
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
export const onDeleteFollowing = /* GraphQL */ `
  subscription OnDeleteFollowing {
    onDeleteFollowing {
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
export const onCreateLikes = /* GraphQL */ `
  subscription OnCreateLikes {
    onCreateLikes {
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
export const onUpdateLikes = /* GraphQL */ `
  subscription OnUpdateLikes {
    onUpdateLikes {
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
export const onDeleteLikes = /* GraphQL */ `
  subscription OnDeleteLikes {
    onDeleteLikes {
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
