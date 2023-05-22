import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, Span, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <div>
    <Container>
      <Div1>
        <Link href="/">
          <div style={{ display: "flex", alignItems: "center", color: 'white' }}>
            <DiCssdeck size="3rem" /> <Span>Maksus</Span>
          </div>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
       
      </Div2>

      <Div3>

        <SocialIcons href="https://github.com/inteliko">
           
        <AiFillGithub size="2rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/maksus-bin-islam-riad-64b78926b/" >
          
        <AiFillLinkedin size="2rem" />
        </SocialIcons>
        <SocialIcons href="" >
           
          <AiFillInstagram size="2rem" />
        </SocialIcons>
        
      </Div3>
      

    </Container>
  </div>
);

export default Header;
