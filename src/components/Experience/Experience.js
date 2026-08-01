import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { workExperience, certifications } from '../../constants/constants';
import {
  CertificationItem,
  CertificationList,
  ExperienceCard,
  ExperienceCompany,
  ExperienceGrid,
  ExperienceHeader,
  ExperiencePeriod,
  ExperiencePoint,
  ExperiencePoints,
  ExperienceRole,
} from './ExperienceStyles';

const Experience = () => (
  <Section id="experience">
    <SectionDivider />
    <SectionTitle>Experience</SectionTitle>
    <SectionText>
      A look at where I've worked and what I've been building — spanning enterprise consulting, freelance automation and AI engineering, and hands-on volunteering.
    </SectionText>
    <ExperienceGrid>
      {workExperience.map(({ id, company, location, role, period, points }) => (
        <ExperienceCard key={id}>
          <ExperienceHeader>
            <ExperienceRole>{role}</ExperienceRole>
            <ExperiencePeriod>{period}</ExperiencePeriod>
          </ExperienceHeader>
          <ExperienceCompany>{company} · {location}</ExperienceCompany>
          <ExperiencePoints>
            {points.map((point, i) => (
              <ExperiencePoint key={i}>{point}</ExperiencePoint>
            ))}
          </ExperiencePoints>
        </ExperienceCard>
      ))}
    </ExperienceGrid>

    <SectionTitle>Certifications</SectionTitle>
    <CertificationList>
      {certifications.map((cert, i) => (
        <CertificationItem key={i}>{cert}</CertificationItem>
      ))}
    </CertificationList>
    <SectionDivider />
  </Section>
);

export default Experience;
