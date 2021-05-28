import gql from 'graphql-tag'

const USER_FRAGMENT = gql`
  fragment UserData on User {
    login,
    nick
  }
`;

export const SIGN_UP_MUTATION = gql`
  mutation SignUp($login: String, $nick: String, $password: String) {
    UserUpsert(user: { login: $login, nick: $nick, password: $password }) {
      ...UserData
    }
  }
  ${USER_FRAGMENT}
`;