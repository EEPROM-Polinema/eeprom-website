export default function AchievementsSection() {
	return (
		<div id="achievements" className="py-12 bg-white">
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
	);
}