import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { Section, SectionText, SectionTitle, SecondaryBtn } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { SocialIcons } from '../Header/HeaderStyles';
import { ContactCard, ContactCTARow, ContactSocialRow } from './ContactStyles';

const Contact = () => (
  <Section id="contact">
    <ContactCard>
      <SectionTitle>Let&apos;s Connect</SectionTitle>
      <SectionText style={{ paddingBottom: 0, maxWidth: '560px' }}>
        I&apos;m currently exploring new opportunities in technical consulting, automation, and applied AI. If my background looks like a fit for your team, I&apos;d love to hear from you.
      </SectionText>

      <ContactCTARow>
        <Button onClick={() => window.location = 'mailto:zaidchu@gmail.com'}>Email Me</Button>
        <SecondaryBtn onClick={() => window.location = 'tel:+447479991887'}>Call Me</SecondaryBtn>
      </ContactCTARow>

      <ContactSocialRow>
        <SocialIcons href="https://github.com/speedyzozo" aria-label="GitHub">
          <AiFillGithub size="2.4rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/zaid-chughtai-628b52222/" aria-label="LinkedIn">
          <AiFillLinkedin size="2.4rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/speedyzozo" aria-label="Instagram">
          <AiFillInstagram size="2.4rem" />
        </SocialIcons>
      </ContactSocialRow>
    </ContactCard>
  </Section>
);

export default Contact;
