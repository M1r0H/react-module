import gql from 'graphql-tag';

export const FIND_CATEGORY_ONE_QUERY = gql`
query FindOneCategory ($query: String){
    CategoryFindOne(query: $query) {
        _id,
        name,
        goods {
            _id,
            name,
            description,
            price,
            images {
                url
            }
        }
    }
}
`
