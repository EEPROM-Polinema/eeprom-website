export default function GallerySection() {
	return (
		<div id="gallery" className="py-12 bg-white">
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
	);
}