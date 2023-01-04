import Head from 'next/head';

import AboutTabs from '../components/about/AboutTabs';

export default function About() {

  return (
    <div style={{overflow: 'hidden'}}>
      <Head>
          <title>About Me</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutTabs />
    </div>
  )
}
