import React from 'react'
import { ApolloProvider as Provider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'

const contextLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token')
    const req = {
        headers: {
            ...headers,
        },
    }
    if (token && token !== 'null' && token !== 'undefined') {
        req.headers.Autorization = `Bearer ${token}`
    }
    return req
})

const onErrorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, location, path }) => {
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${location}, Path: ${path}`
            );
        });
    }
    if (networkError) {
        console.log(`[Nework error]: ${networkError}`)
    }
})

const httpLink = new HttpLink({
    uri: 'http://shop-roles.asmer.fs.a-level.com.ua/graphql',
})

const client = new ApolloClient({
    link: ApolloLink.from([onErrorLink, contextLink, httpLink]),
    cache: new InMemoryCache({
        addTypename: true,
        resultCaching: true,
    })
})

export const ApolloProvider = ({ children }) => (
    <Provider client={client}>{children}</Provider>
)
