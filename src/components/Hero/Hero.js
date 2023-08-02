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
      As a university student with a passion for web development, UI/UX design and a side hobby of game development, I'm constantly seeking new challenges and opportunities to grow. My studies have provided me with a strong foundation in HTML, CSS, JavaScript, and user-centered design principles, and I'm always eager to apply my knowledge to real-world projects.
      I'm excited to continue building my skills and making an impact in the industry.<br/>
      Take a look around to learn more about me and my work. Let's connect and see how we can work together to achieve great things!
      </SectionText>

      <Button onClick={() => window.location = 'https://www.linkedin.com/in/zaid-chughtai-628b52222/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;