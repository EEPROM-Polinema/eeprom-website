import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TeamSection({ teamMembers }) {
	return (
		<div id="team" className="py-12 bg-white">
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
	);
}