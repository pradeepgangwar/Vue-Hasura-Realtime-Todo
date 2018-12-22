import gql from 'graphql-tag'

export const TODO_FRAGMENT = gql`
  fragment TodoFragment on todos {
    id
    text
    is_completed
    created_at
    is_public
  }
`

export const USER_FRAGMENT = gql`
  fragment UserFragment on users {
    name
  }
`

export const QUERY_PRIVATE_TODO = gql`
  subscription fetch_todos($userId: String!) {
    todos(
      where: { is_public: { _eq: false }, user_id: { _eq: $userId } }
      order_by: { created_at: desc }
    ) {
      ...TodoFragment
    }
  }
  ${TODO_FRAGMENT}
`

export const SUBSCRIPTION_ONLINE_USERS = gql`
  subscription {
    online_users(order_by: { name: asc }) {
      name
    }
  }
`

export const QUERY_PUBLIC_TODO = gql`
  query fetch_todos($todoLimit: Int!, $todoId: Int!) {
    todos(
      where: { is_public: { _eq: true }, id: { _gt: $todoId } }
      order_by: { created_at: desc }
      limit: $todoLimit
    ) {
      ...TodoFragment
      user {
        ...UserFragment
      }
    }
  }
  ${TODO_FRAGMENT}
  ${USER_FRAGMENT}
`
export const QUERY_PUBLIC_TODO_ALL = gql`
  subscription fetch_todos {
    todos(
      where: { is_public: { _eq: true } }
      order_by: { created_at: desc }
    ) {
      ...TodoFragment
      user {
        ...UserFragment
      }
    }
  }
  ${TODO_FRAGMENT}
  ${USER_FRAGMENT}
`

export const QUERY_FEED_PUBLIC_TODO = gql`
  query fetch_todos($todoId: Int!) {
    todos(
      where: { is_public: { _eq: true }, id: { _gt: $todoId } }
      order_by: { created_at: desc }
    ) {
      ...TodoFragment
      user {
        ...UserFragment
      }
    }
  }
  ${TODO_FRAGMENT}
  ${USER_FRAGMENT}
`

export const QUERY_FEED_PUBLIC_OLD_TODO = gql`
  query fetch_todos($todoId: Int!) {
    todos(
      where: { is_public: { _eq: true }, id: { _lt: $todoId } }
      limit: 5
      order_by: { created_at: desc }
    ) {
      ...TodoFragment
      user {
        ...UserFragment
      }
    }
  }
  ${TODO_FRAGMENT}
  ${USER_FRAGMENT}
`

export const MUTATION_TODO_ADD = gql`
  mutation insert_todos($objects: [todos_insert_input!]) {
    insert_todos(objects: $objects) {
      affected_rows
      returning {
        id
        text
        is_completed
        created_at
        is_public
      }
    }
  }
`

export const MUTATION_TODO_UPDATE = gql`
  mutation update_todos($todoId: Int!, $set: todos_set_input!) {
    update_todos(where: { id: { _eq: $todoId } }, _set: $set) {
      affected_rows
    }
  }
`

export const MUTATION_TODO_DELETE = gql`
  mutation delete_todos($todoId: Int!) {
    delete_todos(where: { id: { _eq: $todoId } }) {
      affected_rows
    }
  }
`

export const SUBSCRIPTION_TODO_PUBLIC_LIST = gql`
  subscription($todoId: Int!) {
    todos(
      where: { is_public: { _eq: true }, id: { _gt: $todoId } }
      order_by: { created_at: desc }
      limit: 1
    ) {
      id
      text
      is_completed
      created_at
      is_public
    }
  }
`

// export const ADD_TODO = gql`
//   mutation addTodo($desc: String!, $userid: String!) {
//     insert_todos(
//       objects:[{
//         text: $desc
//         user_id: $userid
//       }]
//     ) {
//       returning {
//         id
//         text
//         is_completed
//         created_at
//         updated_at
//         is_public
//         user_id
//       }
//     }
//   }
// `

// export const ALL_PENDING_TODOS = gql`
//   subscription todosQuery {
//     todos(
//       where: { is_public: { _eq: false }, is_completed: { _eq: false }}
//       order_by: { created_at: desc }
//     ) {
//       id
//       text
//       is_completed
//       created_at
//       updated_at
//       is_public
//       user_id
//     }
//   }
// `

// export const ALL_COMPLETED_TODOS = gql`
//   subscription todosQuery {
//     todos(
//       where: { is_public: { _eq: true }, is_completed: { _eq: true }}
//       order_by: { created_at: desc }
//     ) {
//       id
//       text
//       is_completed
//       created_at
//       updated_at
//       is_public
//       user_id
//     }
//   }
// `

// export const UPDATE_TODO = gql`
//   mutation updateTodo($id: Int!, $updated: timestamptz!) {
//     update_todos(
//       where: { id: {_eq: $id}},
//       _set: { is_completed: true, updated_at: $updated }
//     ) {
//       affected_rows
//     }
//   }
// `

// export const DELETE_TODO = gql`
//   mutation deleteTodo($id: Int! ) {
//     delete_todos(
//       where: { id: {_eq: $id}},
//     ) {
//       affected_rows
//     }
//   }
// `
