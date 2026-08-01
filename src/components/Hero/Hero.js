import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { DiSizzlejs } from 'react-icons/di';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Zaid Chughtai<br />
        Personal Portfolio
      </SectionTitle>
      <SectionText style = {{fontSize: "1.5rem"}}>
      Welcome to my portfolio!<br/>
      I'm a Technical Consultant specialising in Microsoft Power Platform, Robotic Process Automation, and Applied AI, delivering end-to-end digital transformations for clients across financial services, healthcare, and logistics. I combine a First-Class foundation in Computer Science with hands-on enterprise consulting experience, spanning RPA migrations, Power Apps development, and Copilot Studio conversational agents.
      Alongside my consulting work, I take on freelance automation and AI engineering projects, building API pipelines and applied AI tools, and I'm currently deepening my AI/ML expertise through postgraduate study.
      My hunger to learn new concepts and adapt to changes in the industry, along with my motivation to make a lasting impact for society, push me to consistently persevere outside of my comfort zone.<br/>
      Take a look around to learn more about me and my work. Let's connect and see how we can work together to achieve great things!
      </SectionText>

      <Button onClick={() => window.location = 'https://www.linkedin.com/in/zaid-chughtai-628b52222/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;