import { useQuery } from '@apollo/client'
import Link from 'next/link'
import { VFC } from 'react'
import { Layout } from '../components/Layout'
import { GET_USERIDS, GET_USERS } from '../queries/queries'
import { GetUsersQuery } from '../types/generated/graphql'

const FetchMain: VFC = () => {
  const { data, error } = useQuery<GetUsersQuery>(GET_USERS, {
    //fetchPolicy: 'network-only',
    fetchPolicy: 'cache-and-network',
    // fetchPolicy: 'cache-first',
    // fetchPolicy: 'no-cache',
  })
  console.log(data)
  if (error) {
    return (
      <>
        <Layout title="Hasura fetchPolicy">
          <p>Error: {error.message}</p>
        </Layout>
      </>
    )
  }
  return (
    <>
      <Layout title="Hasura FetchPolicy">
        <p className="mb-6 font-bold">Hasura main page</p>
        {data?.users.map((user) => {
          return (
            <p className="my-1" key={user.id}>
              {user.name}
            </p>
          )
        })}
        <Link href="/hasura-sub">
          <a className="mt-6">Next</a>
        </Link>
      </Layout>
    </>
  )
}
export default FetchMain
