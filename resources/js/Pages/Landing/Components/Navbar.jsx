export default function Navbar({ scrollToSection }) {
	return (
		<nav className="bg-white shadow-lg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<img
							className="h-8 w-auto"
							src="/Logo EEPROM nobg.png"
							alt="EEPROM Logo"
						/>
						<span className="ml-2 text-xl font-semibold text-gray-800">EEPROM</span>
					</div>
					<div className="hidden md:flex items-center space-x-4">
						<a href="#" onClick={(e) => scrollToSection(e, 'hero')} className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Home</a>
						<a href="#visi-misi" onClick={(e) => scrollToSection(e, 'visi-misi')} className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Visi & Misi</a>
						<a href="#team" onClick={(e) => scrollToSection(e, 'team')} className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Team</a>
						<a href="#achievements" onClick={(e) => scrollToSection(e, 'achievements')} className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Achievements</a>
						<a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Gallery</a>
					</div>
					{/* Mobile menu button */}
					<div className="md:hidden flex items-center">
						<button className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}