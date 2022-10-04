import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Financial Tracker</title>
        <meta name="description" content="Budget and manage income and expenses." />
        <link rel="icon" href="/favicon.ico" />
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>

    </div>
  )
}

export default Home
