import React from 'react';

import { Section, SectionText, SectionTitle, SecondaryBtn } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { CTARow, Eyebrow, EyebrowDot, LeftSection } from './HeroStyles';

const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <Eyebrow>
        <EyebrowDot />
        Technical Consultant &middot; Power Platform, RPA &amp; AI
      </Eyebrow>
      <SectionTitle main center>
        Zaid Chughtai<br />
        Personal Portfolio
      </SectionTitle>
      <SectionText style = {{fontSize: "1.5rem"}}>
      I'm a Technical Consultant specialising in Microsoft Power Platform, Robotic Process Automation, and applied AI, delivering end-to-end digital transformations for clients across financial services, healthcare, and logistics.<br/><br/>
      Alongside my consulting work, I've delivered freelance automation and AI engineering projects, and recently completed a postgraduate program in AI and Machine Learning with Caltech to deepen my expertise.
      </SectionText>

      <CTARow>
        <Button onClick={() => scrollToId('projects')}>View My Work</Button>
        <SecondaryBtn onClick={() => scrollToId('contact')}>Get In Touch</SecondaryBtn>
      </CTARow>
    </LeftSection>
  </Section>
);

export default Hero;
