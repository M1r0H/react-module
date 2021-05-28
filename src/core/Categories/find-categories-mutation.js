import gql from 'graphql-tag';

export const FIND_CATEGORY_MUTATION = gql`
    query CategoryFind{
        CategoryFind(query: "[{}]"){
            _id,
            name ,
            parent{
            name
            },
            subCategories {
                name
            },
            goods {
                name
                images {
                    _id, url
                }
            }
        }
    }
`;