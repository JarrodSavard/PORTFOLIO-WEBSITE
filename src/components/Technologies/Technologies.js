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
			On the front-end, I work with frameworks and libraries such as Framer Motion, Jest (for testing), React Native, Sveltekit, React.js, NextJs, and Sass.
			<br />
			<br />
			For the back-end, I utilize Mongoose, MongoDB, Firebase, Express, Argon2, Sanity, Stripe, Redis, JWT, and SQL.
			<br />
			<br />
			In addition, I have experience with machine learning tools and libraries such as Pandas, Matplotlib, Numpy, Scikit-learn, and TensorFlow.
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
