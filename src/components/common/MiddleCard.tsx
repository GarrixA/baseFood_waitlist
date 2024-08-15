interface MiddleCardProps {
	title: string;
	description: string;
}

const MiddleCard: React.FC<MiddleCardProps> = ({ title, description }) => {
	return (
		<div className="flex flex-col space-y-2 border p-4">
			<h1>{title}</h1>
			<h1>{description}</h1>
		</div>
	);
};

export default MiddleCard;
