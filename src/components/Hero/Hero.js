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
                Hi my name's Jarrod and I'm a <span style={{ color: 'white' }}>fullstack developer</span> that loves keeping up with all <span style={{ color: 'white' }}>modern trends</span>. Feel free to look around and dive into the projects I've made. For more information on my tech stack please visit the{' '}
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
