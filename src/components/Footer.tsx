const Footer = () => {
	return (
		<div className="flex flex-col items-center border-t justify-center space-y-2 bg-[#f4f9fa] py-4 ">
			<h1 className="font-heading text-[#2245FE] text-4xl font-black">
				baseFood
			</h1>
			<p className="font-body text-center text-[#1E1E1E]">
				Collecting, transforming, and visualising food production
			</p>
			<span className="font-body text-[#1E1E1E] text-sm">
				© {new Date(). getFullYear()} All Rights Reserved.
			</span>
		</div>
	);
};

export default Footer;
