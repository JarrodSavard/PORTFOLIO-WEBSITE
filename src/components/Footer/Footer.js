import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, Copyright } from './FooterStyles';

const Footer = () => {
	return (
		<FooterWrapper id="contact">
			<LinkList>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href="mailto:jarrodsavard2x180@gmail.com">jarrodsavard2x180@gmail.com</LinkItem>
					<LinkTitle>Phone Number</LinkTitle>
					<LinkItem>+1 (310) 809-4782</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer></CompanyContainer>
				<SocialContainer>
					<SocialIcons href="https://github.com/JarrodSavard">
						<AiFillGithub size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://www.linkedin.com/in/jarrod-savard">
						<AiFillLinkedin size="3rem" />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
			<Copyright>&copy; JarrodSavard 2022 - 2023</Copyright>
		</FooterWrapper>
	);
};

export default Footer;
