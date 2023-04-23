import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Welcome To My Portfolio <br />
			</SectionTitle>
			<SectionText>
				Hi my name's Jarrod and I'm a <span style={{ color: 'white' }}>Fullstack Developer</span> that's{' '}
				<a href="https://www.coursera.org/account/accomplishments/professional-cert/KT4YHLBPPYD9" noreferrer target="_blank" style={{ color: 'white' }}>
					Meta Front-End Professional Developer Certified
				</a>
				. Feel free to look around and dive into the projects I've made. For more information on my tech stack please visit the{' '}
				<a href="#technologies" style={{ color: 'white' }}>
					Technologies section.
				</a>
			</SectionText>

			<a href="#technologies">
				<Button>Technologies</Button>
			</a>
		</LeftSection>
	</Section>
);

export default Hero;
