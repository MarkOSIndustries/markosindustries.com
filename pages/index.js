import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>MarkOSIndustries</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="MarkOSIndustries" />
        <p className="description">
          Just some bloke who enjoys coding, and the colour black.
        </p>
        <p /><p />
        <h2>Projects on GitHub</h2>
        <ul>
          <li><b><a href="https://github.com/MarkOSIndustries/monosodium-glutamate">Monosodium Glutamate</a></b><br/>A set of tools for working with kafka, protobuf, GRPC, parquet files, and other stuff I've found useful working on distributed systems</li>
          <li><b><a href="https://github.com/MarkOSIndustries/distroboy">DistroBoy</a></b><br/>An attempt to simplify distributed data processing.</li>
        </ul>
      </main>

      <Footer />
    </div>
  )
}
