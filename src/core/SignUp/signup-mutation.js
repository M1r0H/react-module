import gql from 'graphql-tag'

const USER_FRAGMENT = gql `
  fragment UserData on User {
    _id,
    login
  }
`;

export const SIGN_UP_MUTATION = gql `
  mutation SignUp($login: String, $password: String) {
    UserUpsert(user: { login: $login, password: $password }) {
      ...UserData
    }
  }
  ${USER_FRAGMENT}
`;