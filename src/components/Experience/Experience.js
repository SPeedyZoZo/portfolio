import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { workExperience, certifications, education } from '../../constants/constants';
import {
  CertificationItem,
  CertificationList,
  ClientBlurb,
  ClientCard,
  ClientGrid,
  ClientHeaderRow,
  ClientLogoWrap,
  ClientName,
  ClientSector,
  ClientsLabel,
  EducationCard,
  EducationClassification,
  EducationDegree,
  EducationHighlight,
  EducationInstitution,
  EducationPeriod,
  EducationTopRow,
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
      {workExperience.map(({ id, company, location, role, period, points, featured, clients }) => (
        <ExperienceCard key={id} $featured={featured}>
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

          {clients && (
            <>
              <ClientsLabel>Client Work</ClientsLabel>
              <ClientGrid>
                {clients.map((client) => (
                  <ClientCard key={client.name}>
                    <ClientLogoWrap>
                      <img src={client.logo} alt={`${client.name} logo`} loading="lazy" />
                    </ClientLogoWrap>
                    <ClientHeaderRow>
                      <ClientName>{client.name}</ClientName>
                      <ClientSector>{client.sector}</ClientSector>
                    </ClientHeaderRow>
                    <ClientBlurb>{client.blurb}</ClientBlurb>
                  </ClientCard>
                ))}
              </ClientGrid>
            </>
          )}
        </ExperienceCard>
      ))}
    </ExperienceGrid>

    <SectionTitle>Education &amp; Certifications</SectionTitle>
    <EducationCard>
      <EducationTopRow>
        <EducationDegree>{education.degree}</EducationDegree>
        <EducationPeriod>{education.period}</EducationPeriod>
      </EducationTopRow>
      <EducationInstitution>{education.institution}</EducationInstitution>
      <EducationClassification>{education.classification}</EducationClassification>
      <EducationHighlight>{education.highlight}</EducationHighlight>
    </EducationCard>
    <CertificationList>
      {certifications.map((cert, i) => (
        <CertificationItem key={i}>{cert}</CertificationItem>
      ))}
    </CertificationList>
    <SectionDivider />
  </Section>
);

export default Experience;
