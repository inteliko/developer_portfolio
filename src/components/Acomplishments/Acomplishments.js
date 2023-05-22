import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 10, text: 'Happy Clients', },
  { number: 100, text: 'Github Followers', },
  { number: 100, text: 'Github Stars', },

];

const Acomplishments = () => (
  <section>
    <SectionTitle> Personal Acomplishments </SectionTitle>

    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>{card.text}</BoxText>
          <BoxNum>{card.number}+</BoxNum>




        </Box>
        ))}
    </Boxes>
    
  </section>
);

export default Acomplishments;
