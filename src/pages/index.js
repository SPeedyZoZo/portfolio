import Head from 'next/head';

import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Contact from '../components/Contact/Contact';
import Experience from '../components/Experience/Experience';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';

import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const SITE_URL = 'https://zaid.netreviews.ai/';
const SITE_TITLE = 'Zaid Chughtai | Power Platform, RPA & AI Consultant';
const SITE_DESCRIPTION = "Portfolio of Zaid Chughtai, a Technical Consultant specialising in Microsoft Power Platform, Robotic Process Automation, and applied AI — projects, experience, and certifications.";
const SITE_IMAGE = `${SITE_URL}images/Logo.png`;

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="canonical" href={SITE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={SITE_IMAGE} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={SITE_IMAGE} />
      </Head>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Experience />
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
      <Contact />
    </Layout>
  );
};

export default Home;
