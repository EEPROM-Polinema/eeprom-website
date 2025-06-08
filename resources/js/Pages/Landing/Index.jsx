import { Head } from '@inertiajs/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
									<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
										<span className="block">Welcome to</span>
										<span className="block text-blue-600">EEPROM Polinema</span>
									</h1>
									<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
										sebuah komunitas robothobbies yang ada di kampus Politeknik Negeri Malang, Komunitas ini berdiri pada tanggal 1 Juni 2011 yang dirintis oleh mahasiswa Politeknik Negeri Malang khususnya mahasiswa Jurusan Elektro dan Jurusan Teknologi Informasi.
									</p>
									<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
										<div className="rounded-md shadow">
											<a href="/register" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
												Join Us
											</a>
										</div>
									</div>
								</div>
							</main>
						</div>
					</div>
					<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
						<div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
							<img
								className="h-[450px] w-[450px] object-contain"
								src="/Logo EEPROM nobg.png"
								alt="EEPROM Logo"
							/>
						</div>
					</div>
				</div>

				{/* Visi Misi Section */}
				<div id="visi-misi" className="py-12">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
								<div className="bg-white border-2 border-blue-600 rounded-lg shadow-lg p-8">
									<h3 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h3>
									<p className="text-gray-600">
										Menjadi komunitas robotika yang unggul dan terdepan dalam pengembangan teknologi robotika di Indonesia, 
										serta menghasilkan talenta-talenta yang berkualitas dalam bidang robotika dan teknologi.
									</p>
								</div>
			
								{/* Misi */}
								<div className="bg-white border-2 border-blue-600 rounded-lg shadow-lg p-8">
									<h3 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h3>
									<ol className="list-disc list-inside text-gray-600 space-y-2">
										<li>Mengembangkan kompetensi anggota dalam bidang robotika dan teknologi</li>
										<li>Menciptakan lingkungan belajar yang kolaboratif dan inovatif</li>
										<li>Berpartisipasi aktif dalam kompetisi robotika nasional dan internasional</li>
										<li>Mengembangkan proyek-proyek robotika yang bermanfaat bagi masyarakat</li>
										<li>Membangun jaringan dengan komunitas robotika lainnya</li>
									</ol>
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
										<li className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-orange-600">
											<strong className="text-orange-600 text-lg block mb-2">Lambang Roda Gigi</strong>
											<p className="text-gray-700">Simbol keberanian dan semangat juang tinggi dalam menghadapi tantangan dan inovasi di bidang robotika.</p>
										</li>
										<li className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-600">
											<strong className="text-blue-600 text-lg block mb-2">Huruf "e"</strong>
											<p className="text-gray-700">Mewakili intelektualitas dan stabilitas dalam berpikir, mencerminkan pendekatan sistematis dan profesional dalam pengembangan teknologi.</p>
										</li>
										<li className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-yellow-500">
											<strong className="text-yellow-500 text-lg block mb-2">Lambang Tugu Kota Malang</strong>
											<p className="text-gray-700">Identitas lokal dan kebanggaan terhadap kota Malang, menunjukkan akar dan komitmen kami terhadap pengembangan teknologi di daerah.</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Team Section */}
				<div id="team" className="py-12">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center relative">
						<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-full"></div>
							<h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Team</h2>
							<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
								Meet Our Amazing Team
							</p>
							<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
								Our dedicated team of robotics enthusiasts and experts who make EEPROM Polinema what it is today.
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
										color: #3b82f6; /* blue-600 */
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
											<div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden h-full">
												<div className="px-6 py-8">
													<div className="h-32 w-32 rounded-full mx-auto mb-4 overflow-hidden">
														{member.image_path ? (
															<img
																src={`/storage/${member.image_path}`}
																alt={member.name}
																className="h-full w-full object-cover"
															/>
														) : (
															<div className="h-full w-full bg-blue-200 flex items-center justify-center">
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
				<div id="achievements" className="py-12">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center relative">
						<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-full"></div>
							<h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Achievements</h2>
							<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
								Our Success Stories
							</p>
						</div>
										
						<div className="mt-10">
							<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
								{[1, 2, 3].map((achievement) => (
									<div key={achievement} className="bg-white rounded-lg shadow-lg p-6">
										<div className="text-blue-600 text-4xl font-bold mb-4">#{achievement}</div>
										<h3 className="text-lg font-medium text-gray-900">Achievement Title</h3>
										<p className="mt-2 text-gray-500">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Gallery Section */}
				<div id="gallery" className="py-12">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center relative">
						<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-full"></div>
							<h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Gallery</h2>
							<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
								Our Moments
							</p>
						</div>

						<div className="mt-10">
							<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
								{[1, 2, 3, 4, 5, 6, 7, 8].map((image) => (
									<div key={image} className="aspect-w-1 aspect-h-1">
										<div className="w-full h-48 bg-gray-200 rounded-lg"></div>
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
							<ul className="space-y-2 text-gray-300">
								<li>Email: eeprom@polinema.ac.id</li>
								<li>Phone: +62 XXX-XXXX-XXXX</li>
								<li>Address: Politeknik Negeri Malang</li>
							</ul>
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
  