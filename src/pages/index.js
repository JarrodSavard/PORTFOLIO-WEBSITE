// import Accomplishments from '../components/Accomplishments/Accomplishments';
import { Parallax } from 'react-scroll-parallax';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
	return (
		<Layout>
			<Section grid>
				<Hero />
				<BgAnimation />
			</Section>

			<Projects />
			<Technologies />
			<Timeline />

			<Footer />
		</Layout>
	);
};

export default Home;
