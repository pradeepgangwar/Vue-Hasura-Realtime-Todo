'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GRAPHQL_ENDPOINT: '"https://react-apollo-todo.demo.hasura.app/v1alpha1/graphql"',
  GRAPHQL_WS_ENDPOINT: '"ws://react-apollo-todo.demo.hasura.app/v1alpha1/graphql"'
})
