import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href = "tel:111-111-1111">(111) 111-1111</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href = "mailto:erick@gmail.com">test@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
      <SocialIcons href = "https://github.com/Er1ckkkk">
        <AiFillGithub size = "3rem"/>
      </SocialIcons>
      <SocialIcons href = "https://www.linkedin.com/in/erick-lopez-a53039207/">
        <AiFillLinkedin size = "3rem"/>
      </SocialIcons>
      <SocialIcons href = "https://twitter.com/ErickLikes2Code">
        <AiFillTwitterCircle size = "3rem"/>
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
