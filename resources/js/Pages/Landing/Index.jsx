import { Head } from '@inertiajs/react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import VisiMisiSection from './Components/VisiMisiSection';
import LogoMeaningSection from './Components/LogoMeaningSection';
import TeamSection from './Components/TeamSection';
import AchievementsSection from './Components/AchievementsSection';
import GallerySection from './Components/GallerySection';
import Footer from './Components/Footer';

export default function Landing({ teamMembers }) {
	const scrollToSection = (e, sectionId) => {
		e.preventDefault();
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col">
			<Head title="Home | EEPROM" />
			
			<Navbar scrollToSection={scrollToSection} />
			
			<div className="flex-grow">
				<HeroSection />
				<VisiMisiSection />
				<LogoMeaningSection />
				<TeamSection teamMembers={teamMembers} />
				<AchievementsSection />
				<GallerySection />
			</div>
			
			<Footer scrollToSection={scrollToSection} />
		</div>
	);
}