import React from 'react';
import { DiFirebase, DiReact, DiZend, DiTerminal } from 'react-icons/di';
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
                        Vanilla JavaScript
                        <br />
                        React.js
                        <br />
                        React Native
                        <br />
                        NextJs
                        <br />
                        Sveltekit
                        <br />
                        Sass
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiFirebase size="3rem" />
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Express
                        <br />
                        Mongoose
                        <br />
                        MongoDb
                        <br />
                        Firebase
                        <br />
                        Sanity
                        <br />
                        Stripe
                        <br />
                        Databases
                        <br />
                        API's
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiTerminal size="3rem" />
                <ListContainer>
                    <ListTitle>Machine Learning</ListTitle>
                    <ListParagraph>
                        Pandas
                        <br />
                        Matplotlib
                        <br />
                        Numpy
                        <br />
                        Scikit-learn
                        <br />
                        TensorFlow3
                        <br />
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
