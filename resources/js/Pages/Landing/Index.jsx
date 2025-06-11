import { Head } from '@inertiajs/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Landing({ teamMembers, achievements, galleries, contact }) {
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
		<div className="min-h-screen bg-gray-50 flex flex-col overflow-hidden">
			<Head title="Home | EEPROM" />
			{/* Technical Background Pattern */}
			<div className="fixed inset-0 pointer-events-none opacity-5">
				<div className="absolute inset-0" style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					backgroundSize: '60px 60px'
				}}></div>
				{/* Floating Technical Icons */}
				<div className="absolute top-1/4 left-10 w-16 h-16 opacity-10 animate-float">
					<img src="/arduino-svgrepo-com.svg" alt="Arduino" className="w-full h-full" />
				</div>
				<div className="absolute top-1/3 right-20 w-20 h-20 opacity-10 animate-float-delayed">
					<img src="/electronics-chip-svgrepo-com.svg" alt="Electronics" className="w-full h-full" />
				</div>
				<div className="absolute bottom-1/4 left-1/4 w-14 h-14 opacity-10 animate-float">
					<img src="/programming-svgrepo-com.svg" alt="Programming" className="w-full h-full" />
				</div>
				<div className="absolute bottom-1/3 right-1/4 w-16 h-16 opacity-10 animate-float-delayed">
					<img src="/cog-svgrepo-com.svg" alt="Cog" className="w-full h-full" />
				</div>
			</div>
			{/* Add animation styles */}
			<style jsx global>{`
				@keyframes float {
					0% { transform: translateY(0px); }
					50% { transform: translateY(-20px); }
					100% { transform: translateY(0px); }
				}
				@keyframes float-delayed {
					0% { transform: translateY(-10px); }
					50% { transform: translateY(10px); }
					100% { transform: translateY(-10px); }
				}
				.animate-float {
					animation: float 6s ease-in-out infinite;
				}
				.animate-float-delayed {
					animation: float-delayed 6s ease-in-out infinite;
				}
			`}</style>
			{/* Navbar */}
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

			{/* Main Content */}
			<div className="flex-grow">
				{/* Hero Section */}
				<div id="hero" className="relative overflow-hidden">
					<div className="max-w-7xl mx-auto">
						<div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
							<main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
								<div className="sm:text-center lg:text-left">
									{/* Circuit Board Decoration */}
									<div className="absolute -left-4 top-0 w-24 h-24 opacity-20">
										<svg viewBox="0 0 100 100" className="w-full h-full text-blue-600">
											<path d="M10,50 L90,50 M50,10 L50,90" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
											<circle cx="50" cy="50" r="5" fill="currentColor"/>
											<circle cx="10" cy="50" r="3" fill="currentColor"/>
											<circle cx="90" cy="50" r="3" fill="currentColor"/>
											<circle cx="50" cy="10" r="3" fill="currentColor"/>
											<circle cx="50" cy="90" r="3" fill="currentColor"/>
										</svg>
									</div>
									<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
										<span className="block">Welcome to</span>
										<span className="block text-blue-600 relative">
											EEPROM Polinema
										</span>
									</h1>
									<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
										sebuah komunitas robothobbies yang ada di kampus Politeknik Negeri Malang, Komunitas ini berdiri pada tanggal 1 Juni 2011 yang dirintis oleh mahasiswa Politeknik Negeri Malang khususnya mahasiswa Jurusan Elektro dan Jurusan Teknologi Informasi.
									</p>
									<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
										<div className="rounded-md shadow relative group">
											<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
											<a href="/register" className="relative w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
												Join Us
											</a>
										</div>
									</div>
								</div>
							</main>
						</div>
					</div>
					<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
						<div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center relative">
							{/* Animated Circuit Lines */}
							<div className="absolute inset-0 overflow-hidden">
								<div className="absolute top-0 left-0 w-full h-full">
									<svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
										<path d="M0,50 L100,50" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="0.5" strokeDasharray="2 2">
											<animate attributeName="stroke-dashoffset" from="0" to="4" dur="1s" repeatCount="indefinite"/>
										</path>
										<path d="M50,0 L50,100" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="0.5" strokeDasharray="2 2">
											<animate attributeName="stroke-dashoffset" from="0" to="4" dur="1s" repeatCount="indefinite"/>
										</path>
									</svg>
								</div>
							</div>
							<img
								className="h-[450px] w-[450px] object-contain relative z-10"
								src="/Logo EEPROM nobg.png"
								alt="EEPROM Logo"
							/>
						</div>
					</div>
				</div>

				{/* Visi Misi Section */}
				<div id="visi-misi" className="py-12 relative">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						{/* Technical Icons */}
						<div className="absolute right-0 top-10 w-24 h-24 opacity-10">
							<img src="/arduino-svgrepo-com.svg" alt="Arduino" className="w-full h-full" />
						</div>
						<div className="absolute left-0 bottom-10 w-24 h-24 opacity-10">
							<img src="/electronics-chip-svgrepo-com.svg" alt="Electronics" className="w-full h-full" />
						</div>
						<div className="lg:text-center relative">
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-full"></div>
							<h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Who We Are</h2>
							<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
								Visi & Misi
							</p>
							<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
								Di EEPROM Polinema, kami percaya bahwa masa depan teknologi ada di tangan generasi muda yang berani bermimpi, berinovasi, dan berkolaborasi. Visi dan misi kami mencerminkan komitmen untuk mencetak talenta terbaik di dunia robotika.
							</p>
						</div>
			
						<div className="mt-10">
							<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
								{/* Visi */}
								<div className="bg-white border-2 border-blue-600 rounded-lg shadow-lg p-8 relative group hover:shadow-xl transition-all duration-300">
									<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"></div>
									<div className="relative">
										<div className="absolute -top-4 -right-4 w-8 h-8 text-blue-600">
											<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
												<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
											</svg>
										</div>
										<h3 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h3>
										<p className="text-gray-600">
											Visi Komunitas EEPROM adalah menjadikan komunitas robotik sebagai pusat perkembangan teknologi dan peningkatan kualitas sumber daya manusia dalam bidang robotik.
										</p>
									</div>
								</div>
			
								{/* Misi */}
								<div className="bg-white border-2 border-blue-600 rounded-lg shadow-lg p-8 relative group hover:shadow-xl transition-all duration-300">
									<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"></div>
									<div className="relative">
										<div className="absolute -top-4 -right-4 w-8 h-8 text-blue-600">
											<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
												<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
											</svg>
										</div>
										<h3 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h3>
										<ol className="list-none space-y-2">
											{[
												"Meningkatkan rasa kerja sama di dalam komunitas.",
												"Dapat mengikuti era globalisasi dunia robotika.",
												"Menerapkan teknologi dalam bidang robotika untuk menjadikan masyarakat modern.",
												"Mampu mengikuti perlombaan internasional"
											].map((item, index) => (
												<li key={index} className="flex items-start">
													<span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-2">
														{index + 1}
													</span>
													<span className="text-gray-600">{item}</span>
												</li>
											))}
										</ol>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Our Philosophy Section */}
				<div id="our-philosophy" className="py-12">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="lg:text-center relative">
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-full"></div>
							<h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Philosophy</h2>
							<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
								Makna Logo
							</p>
							<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
								Setiap elemen dalam logo EEPROM memiliki makna mendalam yang mencerminkan nilai-nilai dan identitas komunitas kami.
							</p>
						</div>

						<div className="mt-10">
							<div className="lg:flex lg:items-center lg:gap-12">
								{/* Logo Image */}
								<div className="lg:w-1/2 relative">
									<div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-red-100 rounded-2xl opacity-50 blur-xl"></div>
									<div className="relative bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
										<img
											src="/Logo EEPROM nobg.png"
											alt="Makna Logo EEPROM"
											className="h-[450px] w-[450px] object-contain mx-auto"
										/>
									</div>
								</div>
								{/* Makna Text */}
								<div className="lg:w-1/2 mt-8 lg:mt-0">
								  <ul className="space-y-6">
								    {/* Huruf "e" */}
								    <li className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-600">
								      <div className="text-left">
								        <h3 className="text-blue-600 text-lg font-semibold mb-2">Huruf "e"</h3>
								        <p className="text-gray-700">Melambangkan elektro.</p>
								      </div>
								    </li>

								    {/* Tugu */}
								    <li className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-yellow-500">
								      <div className="text-left">
								        <h3 className="text-yellow-500 text-lg font-semibold mb-2">Tugu</h3>
								        <p className="text-gray-700">Melambangkan kota saat ini yaitu Malang.</p>
								      </div>
								    </li>

								    {/* Roda Gigi */}
								    <li className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-orange-600">
								      <div className="text-left">
								        <h3 className="text-orange-600 text-lg font-semibold mb-2">Roda Gigi</h3>
								        <p className="text-gray-700">Melambangkan kode teknik.</p>
								      </div>
								    </li>

								    {/* Makna Umum */}
								    <li className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-gray-600">
								      <div className="text-left">
								        <p className="text-gray-700">
								          Makna secara umum dapat diartikan sebagai sebuah komunitas belajar tentang elektro yang terdapat di Teknik Elektro POLINEMA kota Malang.
								        </p>
								      </div>
								    </li>
								  </ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Team Section */}
				<div id="team" className="py-12 relative">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						{/* Technical Icons */}
						<div className="absolute right-0 top-10 w-24 h-24 opacity-10">
							<img src="/programming-svgrepo-com.svg" alt="Programming" className="w-full h-full" />
						</div>
						<div className="absolute left-0 bottom-10 w-24 h-24 opacity-10">
							<img src="/cog-svgrepo-com.svg" alt="Cog" className="w-full h-full" />
						</div>
						<div className="lg:text-center relative">
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-full"></div>
							<h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Team</h2>
							<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
								Meet Our Amazing Team
							</p>
							<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
							Dedicated team of robotics enthusiasts and experts who make EEPROM Polinema what it is today. Our active members bring passion, skills, and innovation to drive success in every competition and project.
							</p>
						</div>

						<div className="mt-10">
							<div className="relative px-8">
								<style jsx global>{`
									.slick-slide {
										padding: 0 10px;
									}
									.slick-list {
										margin: 0 -10px;
									}
									.slick-prev:before, 
									.slick-next:before {
										color: #3b82f6;
										font-size: 24px;
									}
									.slick-prev {
										left: -30px;
									}
									.slick-next {
										right: -30px;
									}
									.slick-dots li button:before {
										color: #3b82f6;
									}
									.slick-dots li.slick-active button:before {
										color: #3b82f6;
									}
									.team-card {
										position: relative;
										transition: all 0.3s ease;
									}
									.team-card:hover {
										transform: translateY(-5px);
									}
									.team-card::before {
										content: '';
										position: absolute;
										top: 0;
										left: 0;
										right: 0;
										bottom: 0;
										border: 2px solid transparent;
										border-radius: 0.5rem;
										background: linear-gradient(45deg, #3b82f6, #8b5cf6) border-box;
										-webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
										-webkit-mask-composite: destination-out;
										mask-composite: exclude;
										opacity: 0;
										transition: opacity 0.3s ease;
									}
									.team-card:hover::before {
										opacity: 1;
									}
								`}</style>

								<Slider
									dots={true}
									infinite={false}
									speed={500}
									slidesToShow={Math.min(3, teamMembers?.length || 1)}
									slidesToScroll={1}
									autoplay={true}
									autoplaySpeed={3000}
									responsive={[
										{
											breakpoint: 1024,
											settings: {
												slidesToShow: Math.min(2, teamMembers?.length || 1),
												slidesToScroll: 1,
											}
										},
										{
											breakpoint: 640,
											settings: {
												slidesToShow: 1,
												slidesToScroll: 1
											}
										}
									]}
								>
									{teamMembers?.map((member) => (
										<div key={member.id} className="px-2">
											<div className="team-card bg-gray-50 rounded-lg shadow-lg overflow-hidden h-full">
												<div className="px-6 py-8">
													<div className="relative h-32 w-32 mx-auto mb-4">
														<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
														{member.image_path ? (
															<img
																src={`/storage/${member.image_path}`}
																alt={member.name}
																className="h-full w-full object-cover rounded-full relative z-10"
															/>
														) : (
															<div className="h-full w-full bg-blue-200 flex items-center justify-center rounded-full relative z-10">
																<span className="text-blue-600 text-2xl font-bold">
																	{member.name.charAt(0)}
																</span>
															</div>
														)}
													</div>
													<h3 className="text-center text-lg font-medium text-gray-900">{member.name}</h3>
													<p className="mt-1 text-center text-sm text-blue-600">{member.position}</p>
													<p className="mt-2 text-center text-gray-500">
														{member.description}
													</p>
												</div>
											</div>
										</div>
									))}
								</Slider>
							</div>
						</div>
					</div>
				</div>

				{/* Achievements Section */}
				<div id="achievements" className="py-12 relative">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						{/* Technical Icons */}
						<div className="absolute right-0 top-10 w-24 h-24 opacity-10">
							<img src="/electronics-chip-svgrepo-com.svg" alt="Electronics" className="w-full h-full" />
						</div>
						<div className="absolute left-0 bottom-10 w-24 h-24 opacity-10">
							<img src="/arduino-svgrepo-com.svg" alt="Arduino" className="w-full h-full" />
						</div>
						<div className="lg:text-center relative">
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-full"></div>
							<h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Achievements</h2>
							<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
								Our Success Stories
							</p>
							<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
								From champions to innovators, our team has consistently pushed the boundaries of robotics excellence.
							</p>
						</div>
										
						<div className="mt-10">
							<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
								{achievements?.map((achievement) => (
									<div key={achievement.id} className="group relative">
										<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"></div>
										<div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 group-hover:-translate-y-1">
											{achievement.image_path && (
												<div className="relative h-48 w-full overflow-hidden">
													<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
													<img
														src={`/storage/${achievement.image_path}`}
														alt={achievement.title}
														className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
													/>
												</div>
											)}
											<div className="p-6">
												<div className="flex items-center justify-between mb-2">
													<div className="text-blue-600 text-sm font-semibold">
														{new Date(achievement.achievement_date).toLocaleDateString()}
													</div>
													<div className="text-yellow-500">
														<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
															<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
														</svg>
													</div>
												</div>
												<h3 className="text-lg font-medium text-gray-900 mb-2">{achievement.title}</h3>
												{achievement.competition_name && (
													<p className="text-sm text-gray-600 mb-2 flex items-center">
														<svg className="w-4 h-4 mr-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
														</svg>
														{achievement.competition_name}
													</p>
												)}
												{achievement.position && (
													<p className="text-sm text-gray-600 mb-2 flex items-center">
														<svg className="w-4 h-4 mr-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
														</svg>
														{achievement.position}
													</p>
												)}
												<p className="text-gray-500">
													{achievement.description}
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Gallery Section */}
				<div id="gallery" className="py-12 relative">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						{/* Technical Icons */}
						<div className="absolute right-0 top-10 w-24 h-24 opacity-10">
							<img src="/cog-svgrepo-com.svg" alt="Cog" className="w-full h-full" />
						</div>
						<div className="absolute left-0 bottom-10 w-24 h-24 opacity-10">
							<img src="/programming-svgrepo-com.svg" alt="Programming" className="w-full h-full" />
						</div>
						<div className="lg:text-center relative">
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-full"></div>
							<h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Gallery</h2>
							<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
								Our Moments
							</p>
							<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
								A visual journey of our milestones, from brainstorming sessions to standing proud on the competition stage.
							</p>
						</div>

						<div className="mt-10">
							<div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
								{galleries?.map((gallery) => (
									<div key={gallery.id} className="break-inside-avoid group relative">
										<div className="w-full bg-gray-200 rounded-lg overflow-hidden">
											<img
												src={`/storage/${gallery.image_path}`}
												alt={gallery.title}
												className="w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
											/>
											<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
												<div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
													<h3 className="text-lg font-semibold mb-2">{gallery.title}</h3>
													{gallery.description && (
														<p className="text-sm">{gallery.description}</p>
													)}
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className="bg-gray-800 text-white">
				<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div className="space-y-4">
							<img
								className="h-24 w-auto"
								src="/maskot eeprom.png"
								alt="EEPROM Logo"
							/>
							<p className="text-gray-300 text-sm">
								EEPROM Polinema - Robotics Community
							</p>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
							<ul className="space-y-2">
								<li><a href="#" onClick={(e) => scrollToSection(e, 'hero')} className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
								<li><a href="#visi-misi" onClick={(e) => scrollToSection(e, 'visi-misi')} className="text-gray-300 hover:text-white transition-colors duration-200">Visi & Misi</a></li>
								<li><a href="#team" onClick={(e) => scrollToSection(e, 'team')} className="text-gray-300 hover:text-white transition-colors duration-200">Team</a></li>
								<li><a href="#achievements" onClick={(e) => scrollToSection(e, 'achievements')} className="text-gray-300 hover:text-white transition-colors duration-200">Achievements</a></li>
								<li><a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="text-gray-300 hover:text-white transition-colors duration-200">Gallery</a></li>
							</ul>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-4">Contact</h3>
							<ul className="space-y-4 text-gray-300">
								{contact?.email && (
									<li className="flex items-center space-x-3">
										<svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
										<a href={`mailto:${contact.email}`} className="hover:text-white transition-colors duration-200">{contact.email}</a>
									</li>
								)}
								{contact?.whatsapp_number && (
									<li className="flex items-center space-x-3">
										<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
											<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
										</svg>
										<a href={`https://wa.me/${contact.whatsapp_number}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
											<span className="font-semibold">{contact.whatsapp_name || 'Contact Us'}</span>
											<span className="text-gray-300"> ({contact.whatsapp_number})</span>
										</a>
									</li>
								)}
								<li className="flex items-center space-x-3">
									<svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
									<span>Gedung AL POLINEMA</span>
								</li>
							</ul>
							<div className="mt-4">
								<iframe 
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d538.6449486753755!2d112.61460487335965!3d-7.945436729665192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7883003dd47a6d%3A0x869957f7f4ec8059!2sEEPROM%20Polinema!5e0!3m2!1sen!2sid!4v1749624570194!5m2!1sen!2sid" 
									width="100%" 
									height="200" 
									style={{ border: 0 }} 
									allowFullScreen="" 
									loading="lazy" 
									referrerPolicy="no-referrer-when-downgrade"
									className="rounded-lg shadow-lg"
								></iframe>
							</div>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-4">Follow Us</h3>
							<div className="flex space-x-4">
								<a href="https://www.instagram.com/eeprom.polinema" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
									<span className="sr-only">Instagram</span>
									<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
										<path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
									</svg>
								</a>
								<a href="https://www.linkedin.com/company/eeprom-robotics-polinema" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
									<span className="sr-only">LinkedIn</span>
									<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
										<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
						<p>&copy; {new Date().getFullYear()} EEPROM Polinema. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
  