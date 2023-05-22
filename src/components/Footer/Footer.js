import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
       <LinkTitle>Call</LinkTitle>
       
       <LinkItem> +88 01630-458205</LinkItem>
      </LinkColumn>

      <LinkColumn>
       <LinkTitle>Email</LinkTitle>
       <LinkItem>maksusbinislam@gmail.com</LinkItem>
     </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan> Innovating one project at a time.</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/inteliko">
           
        <AiFillGithub size="2rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/maksus-bin-islam-riad-64b78926b/" >
          
        <AiFillLinkedin size="2rem" />
        </SocialIcons>
        <SocialIcons href="" >
           
          <AiFillInstagram size="2rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>

  );
};

export default Footer;
