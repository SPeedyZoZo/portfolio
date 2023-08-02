import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with many technologies, from design tools such as Adobe Illustrator and Adobe XD, to project management tools like Jira, Trello, Asana and Slack, to delving into frontend alongside React.js, Node.js and HTML/CSS.
        I am also adept in game development, using Unity and C#.
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" /> 
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" /> 
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node and Databases
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiZend size="3rem" /> 
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br />
              tools like Figma
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
