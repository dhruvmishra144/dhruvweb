import Head from 'next/head'
import { Homepage } from '../components/home'
import Login from '../components/login'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dhruv Mishra | Graphic Designing | Web Designing | Web Development | Hosting | Managing Sites | Website Redesign | Logo Making | UX/UI Consulting | Prototyping | Explainer Video Making | Marketing | Blogging</title>
        <meta name="description" content="Hi, I'm Dhruv from India, specifically from Faridabad, Haryana. I am a certified Designer in Design Research & Analysis, UI/UX Designing, Graphics Designing, Web Development(Angular), Marketing, Consulting. Feel free to contact for know more. Let's work together for your success." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Need to use homepage for the website */}
      {/* <Homepage /> */}
      {/*Adding login here */}
      <Login />
      
    </div>
  )
}
