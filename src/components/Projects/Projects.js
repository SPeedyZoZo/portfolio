import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';



const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
          <Img src={image} alt={title} loading="lazy" decoding="async" />
          <TitleContent>
            <HeaderThree $large>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <br></br>
            <TitleContent>Project Stack</TitleContent>
            <TagList>
              {tags.map((tag, i)=>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            {visit && <ExternalLinks href={visit}>Visit</ExternalLinks>}
            {/* <ExternalLinks href={source}>Source</ExternalLinks> */}
          </UtilityList>
        </BlogCard>

      ))}
    </GridContainer>
    <SectionDivider />
  </Section>
);

export default Projects;