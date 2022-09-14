import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React, { VFC } from 'react'
import { Layout } from '../components/Layout'

const Home: VFC = () => {
  return (
    <>
      <Layout title="Home">
        <p className="text-3xl font-bold">Nextjs + GraphQL</p>
      </Layout>
    </>
  )
}

export default Home
