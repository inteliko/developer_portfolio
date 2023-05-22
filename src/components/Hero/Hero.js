import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <section row nopadding>
    <LeftSection>
      <SectionTitle main center>

      Hello, Welcome To <br/>
      My Personal Portfolio

      </SectionTitle>
      <SectionText>
      I am Maksus Bin Islam and a Junior Web Developer with a solid foundation in both front-end and back-end development. I am deeply passionate about creating visually appealing and user-friendly websites that leave a lasting impression. 

      </SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/1xczT6YS4y4HysRHIl2EOJ_UBFF6jHFhO/view?usp=share_link'}>
          Download CV
      </Button>
    </LeftSection>
    


    
  </section>
);

export default Hero;