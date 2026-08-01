import React from 'react';
import { DiFirebase, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I work across enterprise automation and AI, from Microsoft Power Platform, UiPath and Copilot Studio, to applied AI with Python, LangChain and Azure OpenAI.
        I'm also comfortable across full-stack web development with React, Node.js and FastAPI, and started my journey in game development with Unity and C#.
      </SectionText>
      <List>
        <ListItem>
          <DiZend size="3rem" />
          <ListContainer>
            <ListTitle>Automation & Power Platform</ListTitle>
            <ListParagraph>
              Power Apps, Power Automate, <br />
              UiPath, Copilot Studio
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiPython size="3rem" />
          <ListContainer>
            <ListTitle>AI & Data</ListTitle>
            <ListParagraph>
              Python, LangChain, <br />
              Azure OpenAI, Gemini API
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js and Next.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Node.js, FastAPI, <br />
              Django and Databases
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
