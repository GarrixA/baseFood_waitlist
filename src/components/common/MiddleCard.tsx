interface MiddleCardProps {
	title: string;
	description: string;
}

const MiddleCard: React.FC<MiddleCardProps> = ({ title, description }) => {
	return (
		<div className="flex flex-col gap-4 shadow-sm rounded-lg py-10 px-8 w-full lg:h-72 2xl:h-52 bg-white _shadow">
			<h1 className="text-[#2245ff] text-xl md:text-4xl lg:text-xl font-body">
				{title}
			</h1>
			<h1 className="text-xl font-body md:text-2xl lg:text-xl">
				{description}
			</h1>
		</div>
	);
};

export default MiddleCard;
