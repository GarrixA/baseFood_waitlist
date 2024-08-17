interface VisualizeCardProps {
	headline: string;
	subtitle: string;
	image?: string;
}

const VisualizeCard: React.FC<VisualizeCardProps> = ({
	headline,
	subtitle,
	image,
}) => {
	return (
		<div className="w-full flex items-center justify-between py-10 lg:py-0 space-y-5 lg:space-y-0 lg:h-[70vh] lg:space-x-24 lg:max-w-[80%] max-w-[90%] mx-auto lg:flex-row flex-col">
			<div className="flex flex-col items-center space-y-5 lg:w-1/2">
				<h1 className="lg:text-4xl md:text-2xl text-xl font-heading font-black text-[#1E1E1E]">
					{headline}
				</h1>
				<p className="md:text-xl w-full font-body text-[#1E1E1E]">{subtitle}</p>
			</div>
			<div className=" rounded overflow-hidden lg:w-1/2 w-full">
				<img src={image} alt="image" className="w-full h-full object-cover" />
			</div>
		</div>
	);
};

export default VisualizeCard;
