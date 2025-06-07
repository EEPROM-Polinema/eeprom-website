export default function VisiMisiSection() {
	return (
		<div id="visi-misi" className="py-12 bg-white">
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
	);
}