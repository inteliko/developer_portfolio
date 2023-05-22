import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <section id="tech">
    <SectionDivider />
     <br/>
      <SectionTitle> Technologies </SectionTitle>
      <SectionText>I am committed to continuous learning and staying updated with the latest web development technologies and trends.</SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem"/>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience with <br/> Html, CSS, Bootstrap and react</ListParagraph>


        </ListItem>

        <ListItem>
          <DiFirebase size="3rem"/>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experience with <br/> Django, Node.js , Databases</ListParagraph>


        </ListItem>

        <ListItem>
          <DiZend size="3rem"/>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>Experience with <br/> tools like Figma, Adoe xD</ListParagraph>


        </ListItem>

       
        
      </List>
   
    
  </section>
);

export default Technologies;
