import React from 'react';
import { DiFirebase, DiReact, DiCode, DiTerminal } from 'react-icons/di';
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
				<DiCode size="3rem" />
				<ListContainer>
					<ListTitle>Languages</ListTitle>
					<ListParagraph>
						JavaScript
						<br />
						TypeScript
						<br />
						Python
						<br />
						Rust
						<br />
						C#
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiReact size="3rem" />
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						Framer Motion
						<br />
						Jest (testing)
						<br />
						React Native
						<br />
						Sveltekit
						<br />
						React.js
						<br />
						NextJs
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
						Mongoose
						<br />
						MongoDB
						<br />
						Firebase
						<br />
						Express
						<br />
						Argon2
						<br />
						Sanity
						<br />
						Stripe
						<br />
						Redis
						<br />
						JWT
						<br />
						SQL
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
