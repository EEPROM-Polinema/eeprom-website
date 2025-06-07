export default function LogoMeaningSection() {
	return (
		<div id="our-philosophy" className="py-12 bg-white">
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
	);
}