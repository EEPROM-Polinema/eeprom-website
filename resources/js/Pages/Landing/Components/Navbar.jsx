export default function Navbar({ scrollToSection }) {
	return (
		<nav className="bg-white shadow-lg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-20">
					<div className="flex items-center">
						<a href="#" onClick={(e) => scrollToSection(e, 'hero')} className="flex items-center">
							<img
								className="h-14 w-auto"
								src="/Logo EEPROM nobg.png"
								alt="EEPROM Logo"
							/>
							<span className="ml-2 text-xl font-semibold text-gray-800">EEPROM</span>
						</a>
					</div>
					<div className="hidden md:flex items-center space-x-6">
						<a href="#" onClick={(e) => scrollToSection(e, 'hero')} className="hover:text-white px-4 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-blue-600">Home</a>
						<a href="#visi-misi" onClick={(e) => scrollToSection(e, 'visi-misi')} className="hover:text-white px-4 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-blue-600">Visi & Misi</a>
						<a href="#team" onClick={(e) => scrollToSection(e, 'team')} className="hover:text-white px-4 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-blue-600">Team</a>
						<a href="#achievements" onClick={(e) => scrollToSection(e, 'achievements')} className="hover:text-white px-4 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-blue-600">Achievements</a>
						<a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="hover:text-white px-4 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-blue-600">Gallery</a>
					</div>
					{/* Mobile menu button */}
					<div className="md:hidden flex items-center">
						<button className="text-white hover:text-white transition-colors duration-200">
							<svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}