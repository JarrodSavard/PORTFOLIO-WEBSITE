import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
    <Section id="technologies">
        <SectionDivider />
        <br />
        <br />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            I currently use Figma as well as open source projects for my design processes.
            <br />
            <br />
            I program in a variety of languages such as JavaScript, Node.js, and Python3 to name a few.
            <br />
            <br />
            Some frameworks/libraries I like to use are React.js, NextJs, Express, Mongoose, TensorFlow, and Scikit-learn.
        </SectionText>
        <List>
            <ListItem>
                <DiReact size="3rem" />
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        React.js
                        <br />
                        NextJs
                        <br />
                        Sveltekit
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiFirebase size="3rem" />
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Node.js
                        <br />
                        databases
                    </ListParagraph>
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
