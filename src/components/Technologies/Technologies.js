import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
    <Section id="technologies">
        <SectionDivider />
        <br />
        <br />
        <br />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>Information about the tech stack that I program in</SectionText>
        <List>
            <ListItem>
                <DiReact size="3rem" />
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>Experience with React.js</ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiFirebase size="3rem" />
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>Experience with Node.js & databases</ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiZend size="3rem" />
                <ListContainer>
                    <ListTitle>UI/UX</ListTitle>
                    <ListParagraph>Design tools such as Figma</ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
