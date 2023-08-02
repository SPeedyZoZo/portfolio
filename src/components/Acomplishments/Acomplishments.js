import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 6, text: 'Projects Worked On (and counting)'},
  { number: 8, text: 'Years Since I Started Learning Unity'},
  { number: 5, text: 'Years Since I Started Learning UI/UX', },
  { number: 12, text: 'Years Since I Started Learning To Code', },
  { number: 0, text: 'signs of slowing down :)', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle><br/>Personal Accomplishments</SectionTitle>
    
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
