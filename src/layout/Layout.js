import React from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Container } from './LayoutStyles';
import Head from 'next/head';

export const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Portfolio: Jarrod Savard</title>
				<meta name="description" content="Jarrod Savard's portfolio" />
			</Head>
			<Container>
				<Header />
				<main>{children}</main>
			</Container>
		</>
	);
};
