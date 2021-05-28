import gql from 'graphql-tag'

export const SING_IN_QUERY = gql`
query SingIn ($login: String, $password: String){
  login(login: $login, password: $password)
}
`